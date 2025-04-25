// Custom A-Frame wheel component that handles spinning and selection
AFRAME.registerComponent('wheel-spinner', {
    schema: {
        spinning: { type: 'boolean', default: false },
        spinDuration: { type: 'number', default: 7000 }, // Increase from 5000 to 7000ms for slower spin
        spinSpeed: { type: 'number', default: 3 }  // Reduce from 5 to 3 for slower spin
    },

    init: function() {
        this.rotation = 0;
        this.targetRotation = 0;
        this.spinStartTime = 0;
        this.segments = 8; // 8 segments on the wheel
        this.selectedSegment = 0;
        this.spinSound = null;
        this.customAudio = null;
        this.loopTimeout = null;
        
        // Track segment history to ensure variety
        this.segmentHistory = [];
        this.maxHistoryLength = 8;
        
        // Ensure initial rotation is 0
        this.el.setAttribute('rotation', '0 0 0');
        
        // Bind methods
        this.onClick = this.onClick.bind(this);
        this.onSpinComplete = this.onSpinComplete.bind(this);
        
        // Add event listener
        this.el.addEventListener('click', this.onClick);
        
        // Cache the sound element
        this.spinSound = document.querySelector('#spin-sound');

        // Force consistent timing regardless of platform
        this.forceConsistentTiming();
        
        console.log("Wheel spinner initialized with spin duration:", this.data.spinDuration, "ms");
    },

    // Ensure consistent timing on all platforms
    forceConsistentTiming: function() {
        // Keep original reference
        const self = this;
        
        // Override spin to ensure exact timing
        const originalSpin = this.spin;
        this.spin = function() {
            // Start a hard timer backup to force completion after exactly spinDuration
            if (self.spinCompleteTimer) {
                clearTimeout(self.spinCompleteTimer);
            }
            
            // Call original spin
            if (originalSpin) {
                originalSpin.apply(this, arguments);
            }
            
            // Set a hard backup timer to force completion
            self.spinCompleteTimer = setTimeout(function() {
                if (self.data.spinning) {
                    console.log("Forcing spin completion after timeout");
                    self.data.spinning = false;
                    
                    // Stop sound
                    if (self.spinSound) {
                        self.spinSound.pause();
                        self.spinSound.currentTime = 0;
                    }
                    
                    // Final rotation
                    self.rotation = self.startRotation + self.spinAmount;
                    self.el.setAttribute('rotation', `0 0 ${-self.rotation}`);
                    
                    // Complete
                    self.onSpinComplete();
                }
            }, self.data.spinDuration + 100); // Add small buffer
        };
    },

    tick: function(time, deltaTime) {
        // Handle spinning animation
        if (this.data.spinning) {
            const elapsed = time - this.spinStartTime;
            const progress = Math.min(elapsed / this.data.spinDuration, 1.0);
            
            // Easing function for natural slowdown
            const easeOut = function(t) {
                return 1 - Math.pow(1 - t, 3);
            };
            
            // Calculate current rotation - for proper clockwise spinning
            const rotationProgress = easeOut(progress);
            this.rotation = this.startRotation + (this.spinAmount * rotationProgress);
            
            // Update element rotation - ROTATE AROUND Z AXIS
            this.el.setAttribute('rotation', `0 0 ${-this.rotation}`);
            
            // Check if spin is complete
            if (progress >= 1.0) {
                console.log("Spin complete via progress check");
                this.data.spinning = false;
                
                // Stop the sound
                if (this.spinSound) {
                    this.spinSound.pause();
                    this.spinSound.currentTime = 0;
                }
                
                // Call onSpinComplete immediately
                this.onSpinComplete();
            }
        } else {
            // Keep wheel at its current rotation when not spinning
            this.el.setAttribute('rotation', `0 0 ${-this.rotation}`);
        }
    },

    onClick: function() {
        // Only allow clicking if not already spinning
        if (!this.data.spinning && !document.getElementById('question-overlay').classList.contains('active')) {
            this.spin();
        }
    },

    // Logic to avoid repeating the same segment too often
    getValidSegment: function() {
        // Count occurrences of each segment in the history
        const segmentCounts = new Array(this.segments).fill(0);
        this.segmentHistory.forEach(segment => {
            segmentCounts[segment]++;
        });
        
        // Find segments that have appeared fewer than 2 times
        const validSegments = [];
        for (let i = 0; i < this.segments; i++) {
            if (segmentCounts[i] < 2) {
                validSegments.push(i);
            }
        }
        
        // If no valid segments (unlikely), allow any segment
        if (validSegments.length === 0) {
            for (let i = 0; i < this.segments; i++) {
                validSegments.push(i);
            }
        }
        
        // Randomly select from valid segments
        const randomIndex = Math.floor(Math.random() * validSegments.length);
        return validSegments[randomIndex];
    },

    spin: function() {
        // Reset audio state
        this.isAudioFading = false;
        if (this.fadeAudio) {
            clearTimeout(this.fadeAudio);
            this.fadeAudio = null;
        }
        
        // Play spin sound with error handling
        try {
            if (this.spinSound) {
                // Ensure any previous playback is stopped
                this.spinSound.pause();
                this.spinSound.currentTime = 0;
                this.spinSound.volume = 1.0;
                this.spinSound.loop = true;
                this.spinSound.playbackRate = 1.0;
                
                // Start playing and handle any errors
                this.spinSound.play().catch(error => {
                    console.warn('Spin sound playback error:', error);
                });
            }
        } catch (e) {
            console.warn('Audio error:', e);
        }
        
        // Set spinning parameters
        this.data.spinning = true;
        this.spinStartTime = performance.now();
        this.startRotation = this.rotation;
        
        // Get a valid segment using our anti-repetition logic
        const targetSegment = this.getValidSegment();
        
        // Calculate rotation needed to land on the selected segment
        // Each segment is 45 degrees (360/8)
        // We need to add a random offset within the segment for natural feel
        const segmentAngle = 45;
        const segmentStartAngle = targetSegment * segmentAngle;
        const randomOffset = Math.random() * (segmentAngle * 0.7) + (segmentAngle * 0.15); // Random position within middle 70% of segment
        const targetAngle = segmentStartAngle + randomOffset;
        
        // To make arrow at 0 degrees point to the segment, we need to rotate the wheel so the targetAngle is at 0
        // We also add multiple full rotations for a satisfying spin
        const fullRotations = 2 + Math.floor(Math.random() * 2); // 2-3 full rotations
        this.spinAmount = (360 * fullRotations) + (360 - targetAngle);
        
        // The segment that will be selected
        this.selectedSegment = targetSegment;
        
        // Add to history
        this.segmentHistory.push(this.selectedSegment);
        if (this.segmentHistory.length > this.maxHistoryLength) {
            this.segmentHistory.shift(); // Remove oldest entry if we exceed max history
        }
        
        console.log("Spin started, targeting segment:", this.selectedSegment);
        console.log("Start rotation:", this.startRotation);
        console.log("Spin amount:", this.spinAmount);
        console.log("Final angle:", targetAngle);
        console.log("Segment history:", this.segmentHistory);
        
        // Dispatch custom event that the wheel is spinning
        document.dispatchEvent(new CustomEvent('wheel-spinning', {
            detail: { spinning: true }
        }));
    },

    onSpinComplete: function() {
        console.log("Spin complete, final segment:", this.selectedSegment);
        
        // Force the browser to recognize a minimum delay before showing question
        setTimeout(() => {
            // Dispatch custom event with the selected segment
            document.dispatchEvent(new CustomEvent('wheel-stopped', {
                detail: { segment: this.selectedSegment }
            }));
            
            console.log("Dispatched wheel-stopped event with segment:", this.selectedSegment);
        }, 100);
    },
    
    remove: function() {
        // Clean up event listeners
        this.el.removeEventListener('click', this.onClick);
        
        // Clean up audio resources
        if (this.spinSound) {
            this.spinSound.pause();
            this.spinSound.currentTime = 0;
            this.spinSound = null;
        }
        
        // Clear any pending timers
        if (this.spinCompleteTimer) {
            clearTimeout(this.spinCompleteTimer);
            this.spinCompleteTimer = null;
        }
        
        if (this.fadeAudio) {
            clearTimeout(this.fadeAudio);
            this.fadeAudio = null;
        }
    }
}); 