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
        
        // Ensure we spin at least 2 full rotations plus a random amount
        this.spinAmount = 720 + Math.random() * 360;
        
        // Calculate which segment will be selected when wheel stops
        const totalRotation = (this.startRotation + this.spinAmount) % 360;
        
        // Arrow points to the right (90 degrees), adjust the segment calculation
        // Each segment is 45 degrees (360/8)
        // We need to get the final rotation value to determine where the wheel will stop
        const finalRotation = (this.startRotation + this.spinAmount) % 360;
        
        // The arrow is fixed at 90 degrees (right side)
        // We need to find which segment will be under the arrow when the wheel stops
        const segmentAngle = (finalRotation + 90) % 360;
        this.selectedSegment = Math.floor(segmentAngle / 45) % 8;
        
        console.log("Spin started, duration:", this.data.spinDuration, "ms");
        console.log("Start rotation:", this.startRotation);
        console.log("Spin amount:", this.spinAmount);
        console.log("Final rotation:", finalRotation);
        console.log("Segment angle:", segmentAngle);
        console.log("Selected segment will be:", this.selectedSegment);
        
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