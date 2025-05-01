// Define trivia data with shortened category names for better display on wheel
const triviaData = {
    // Each category corresponds to a segment on the wheel
    categories: [
        "Mission Basics",
        "Launch",
        "Spacecraft",
        "Science",
        "Asteroid Facts",
        "Mission Journey",
        "Team & Partners",
        "Space Technology"
    ],
    
    // Questions organized by category
    questions: [
        // 0: Mission Basics
        [
            {
                question: "What makes the Psyche asteroid unique compared to most other asteroids?",
                answers: [
                    "It's made mostly of metal (iron and nickel)",
                    "It has a strong magnetic field",
                    "It has a breathable atmosphere",
                    "It has flowing water on its surface"
                ],
                correctIndex: 0,
                explanation: "Unlike most rocky or icy asteroids, Psyche appears to be composed largely of metal - primarily iron and nickel. Scientists believe it might be the exposed core of an early planet."
            },
            {
                question: "What is the main goal of NASA's Psyche mission?",
                answers: [
                    "To mine precious metals from the asteroid",
                    "To determine if life once existed there",
                    "To study what appears to be a metal world",
                    "To test if humans could land on it"
                ],
                correctIndex: 2,
                explanation: "The Psyche mission aims to study the metal world. Scientists want to understand if it's the core of an early planet, a never-before-seen object, or something else entirely."
            }
        ],
        
        // 1: Launch
        [
            {
                question: "When did the Psyche mission launch?",
                answers: [
                    "August 2022",
                    "October 2023",
                    "January 2023",
                    "July 2021"
                ],
                correctIndex: 1,
                explanation: "The Psyche spacecraft launched on October 13, 2023, atop a SpaceX Falcon Heavy rocket from Launch Complex 39A at NASA's Kennedy Space Center in Florida."
            },
            {
                question: "What type of rocket launched the Psyche spacecraft?",
                answers: [
                    "Atlas V",
                    "Delta IV Heavy",
                    "Falcon Heavy",
                    "SLS (Space Launch System)"
                ],
                correctIndex: 2,
                explanation: "The Psyche mission launched aboard a SpaceX Falcon Heavy rocket, which provides the power needed to send the spacecraft on its journey to the distant asteroid belt."
            }
        ],
        
        // 2: Spacecraft
        [
            {
                question: "What innovative propulsion system does the Psyche spacecraft use?",
                answers: [
                    "Nuclear propulsion",
                    "Solar electric propulsion",
                    "Antimatter drive",
                    "Chemical rockets only"
                ],
                correctIndex: 1,
                explanation: "The Psyche spacecraft uses solar electric propulsion, which uses electricity from solar arrays to create electromagnetic fields that accelerate and expel charged atoms (ions) to create thrust."
            },
            {
                question: "How big is the Psyche spacecraft?",
                answers: [
                    "About the size of a school bus",
                    "About the size of a car",
                    "About the size of a tennis court with solar arrays deployed",
                    "About the size of a small airplane"
                ],
                correctIndex: 2,
                explanation: "With its solar arrays deployed, the Psyche spacecraft is about the size of a tennis court. The body of the spacecraft is about the size of a small van."
            }
        ],
        
        // 3: Science
        [
            {
                question: "What scientific instruments does the Psyche spacecraft carry?",
                answers: [
                    "Only cameras for imaging",
                    "A drill to collect samples",
                    "Magnetometer, multispectral imager, and gamma ray spectrometer",
                    "Weather sensors and seismometers"
                ],
                correctIndex: 2,
                explanation: "The Psyche spacecraft carries a magnetometer to detect magnetic fields, multispectral imagers to photograph the surface, and a gamma ray and neutron spectrometer to identify elements on the asteroid's surface."
            },
            {
                question: "What will scientists learn by studying Psyche's composition?",
                answers: [
                    "If there's life on the asteroid",
                    "How to mine asteroids effectively",
                    "Clues about early planetary formation, particularly cores",
                    "How to deflect asteroids threatening Earth"
                ],
                correctIndex: 2,
                explanation: "By studying Psyche, scientists hope to gain insights into how planets formed during the early solar system, particularly their metal cores, which are normally hidden beneath layers of rock."
            }
        ],
        
        // 4: Asteroid Facts
        [
            {
                question: "How large is the Psyche asteroid?",
                answers: [
                    "About 10 miles (16 km) in diameter",
                    "About 140 miles (226 km) in diameter",
                    "About 500 miles (805 km) in diameter",
                    "About 1,000 miles (1,610 km) in diameter"
                ],
                correctIndex: 1,
                explanation: "Psyche is about 140 miles (226 kilometers) in diameter, making it one of the largest objects in the main asteroid belt between Mars and Jupiter."
            },
            {
                question: "Where is the Psyche asteroid located?",
                answers: [
                    "Between Earth and Mars",
                    "Between Mars and Jupiter",
                    "Beyond Jupiter",
                    "In the Kuiper Belt past Neptune"
                ],
                correctIndex: 1,
                explanation: "The Psyche asteroid orbits the Sun in the main asteroid belt between Mars and Jupiter, about three times farther from the Sun than Earth."
            }
        ],
        
        // 5: Mission Journey
        [
            {
                question: "When is the Psyche spacecraft expected to reach the asteroid?",
                answers: [
                    "2025",
                    "2026",
                    "2029",
                    "2030"
                ],
                correctIndex: 2,
                explanation: "After its launch in October 2023, the Psyche spacecraft is expected to arrive at the asteroid in 2029, after a journey of nearly 6 years."
            },
            {
                question: "What celestial body will the Psyche spacecraft fly by for a gravity assist?",
                answers: [
                    "Venus",
                    "Earth",
                    "Mars",
                    "Jupiter"
                ],
                correctIndex: 3,
                explanation: "The Psyche spacecraft will use a Mars gravity assist in 2026 to help it reach the asteroid. The gravity of Mars will help slingshot the spacecraft toward its destination."
            }
        ],
        
        // 6: Team & Partners
        [
            {
                question: "Which institution leads the Psyche mission?",
                answers: [
                    "Johns Hopkins University APL",
                    "Arizona State University",
                    "MIT",
                    "University of California"
                ],
                correctIndex: 1,
                explanation: "Arizona State University leads the Psyche mission, with principal investigator Lindy Elkins-Tanton. NASA's Jet Propulsion Laboratory is responsible for mission management, operations, and navigation."
            },
            {
                question: "Which NASA center manages the Psyche mission?",
                answers: [
                    "Goddard Space Flight Center",
                    "Kennedy Space Center",
                    "Ames Research Center",
                    "Jet Propulsion Laboratory"
                ],
                correctIndex: 3,
                explanation: "NASA's Jet Propulsion Laboratory (JPL) in Southern California manages the Psyche mission for NASA's Science Mission Directorate in Washington."
            }
        ],
        
        // 7: Space Technology
        [
            {
                question: "What technology demonstration is flying with the Psyche mission?",
                answers: [
                    "Deep Space Atomic Clock 2",
                    "Inflatable heat shield",
                    "Miniature nuclear reactor",
                    "Quantum communication system"
                ],
                correctIndex: 0,
                explanation: "The Deep Space Atomic Clock 2 is flying on Psyche as a technology demonstration. This ultra-precise clock could help spacecraft navigate autonomously in the future."
            },
            {
                question: "What type of communication will the Psyche mission test?",
                answers: [
                    "Radio frequency only",
                    "Deep Space Optical Communications",
                    "Quantum entanglement messaging",
                    "Gravitational wave communication"
                ],
                correctIndex: 1,
                explanation: "Psyche will test Deep Space Optical Communications, using lasers instead of traditional radio waves, potentially enabling more efficient data transmission for future missions."
            }
        ]
    ]
};

// Make triviaData globally available
window.triviaData = triviaData;

// Main application functionality
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const loadingScreen = document.getElementById('loading-screen');
    const enterButton = document.getElementById('enter-button');
    const arButton = document.getElementById('ar-button');
    const questionOverlay = document.getElementById('question-overlay');
    const questionCategory = document.getElementById('question-category');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers');
    const answerButtons = document.querySelectorAll('.answer-btn');
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('result-text');
    const continueBtn = document.getElementById('continue-btn');
    const respinButton = document.querySelector('#respin-button');
    
    // Audio elements
    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');
    
    // State variables
    let currentCategory = 0;
    let currentQuestion = null;
    
    // Initialize the experience
    function init() {
        // Hide loading screen when user enters
        enterButton.addEventListener('click', () => {
            loadingScreen.classList.add('hidden');
            // Force re-rendering of all textures on enter
            setTimeout(() => {
                document.querySelector('#trivia-wheel').setAttribute('material', 'src: #wheel-texture; side: double; shader: flat');
                document.querySelector('#pointer').setAttribute('material', 'src: #arrow-texture; transparent: true; shader: flat');
                document.querySelector('a-sky').setAttribute('src', '#stars-bg');
                console.log("Applied textures on scene enter");
            }, 100);
        });
        
        // We're now handling this directly in index.html for simplicity
        // document.addEventListener('wheel-stopped', handleWheelStopped);
        
        // Add click handlers for answer buttons
        answerButtons.forEach(button => {
            button.addEventListener('click', handleAnswerSelection);
        });
        
        // Continue button after answering
        continueBtn.addEventListener('click', () => {
            resultDiv.classList.add('hidden');
            questionOverlay.classList.add('hidden');
            questionOverlay.classList.remove('active');
            
            // Show and pulse the respin button
            respinButton.classList.remove('hidden-respin');
            respinButton.classList.add('pulse');
            
            // Remove pulse effect after 3 seconds
            setTimeout(() => {
                respinButton.classList.remove('pulse');
            }, 3000);
        });

        // Speed up loading by simulating assets loaded
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
            enterButton.style.display = 'inline-block';
            arButton.style.display = 'inline-block';
        }, 1000);

        // Create temporary textures if needed
        createTemporaryWheelTexture();

        // Also listen for wheel spinning to hide the respin button
        document.addEventListener('wheel-spinning', () => {
            respinButton.classList.add('hidden-respin');
        });

        // Make sure the respin button is initially hidden
        respinButton.classList.add('hidden-respin');
        
        // Add click event listener for respin button
        respinButton.addEventListener('click', () => {
            const wheelComponent = document.querySelector('#trivia-wheel').components['wheel-spinner'];
            if (!wheelComponent.data.spinning && !questionOverlay.classList.contains('active')) {
                wheelComponent.spin();
            }
        });
    }
    
    // Handle wheel stopping at a segment
    function handleWheelStopped(event) {
        const segmentIndex = event.detail.segment;
        currentCategory = segmentIndex;
        
        console.log("Wheel stopped at segment:", segmentIndex);
        console.log("Selecting question from category:", triviaData.categories[segmentIndex]);
        
        // Get a random question from the selected category
        const categoryQuestions = triviaData.questions[currentCategory];
        const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
        currentQuestion = categoryQuestions[randomIndex];
        
        // Display the question
        showQuestion(currentCategory, currentQuestion);
    }
    
    // Display question overlay
    function showQuestion(categoryIndex, questionData) {
        console.log("Showing question from category index:", categoryIndex);
        console.log("Category name:", triviaData.categories[categoryIndex]);
        
        // Set question content
        questionCategory.textContent = triviaData.categories[categoryIndex];
        questionText.textContent = questionData.question;
        
        // Set answer options
        answerButtons.forEach((button, index) => {
            button.textContent = questionData.answers[index];
            button.classList.remove('correct', 'incorrect');
        });
        
        // Reset result
        resultDiv.classList.add('hidden');
        resultDiv.classList.remove('correct', 'incorrect');
        
        // Show the overlay
        questionOverlay.classList.remove('hidden');
        setTimeout(() => questionOverlay.classList.add('active'), 50);
    }
    
    // Handle answer selection
    function handleAnswerSelection(event) {
        const selectedIndex = parseInt(event.target.dataset.index);
        const correctIndex = currentQuestion.correctIndex;
        const isCorrect = selectedIndex === correctIndex;
        
        // Clear any previous selections
        answerButtons.forEach(btn => {
            btn.classList.remove('correct', 'incorrect');
        });
        
        // Apply correct class to the correct answer
        answerButtons[correctIndex].classList.add('correct');
        
        // Apply incorrect class to wrong selections
        if (!isCorrect) {
            event.target.classList.add('incorrect');
        }
        
        // Show result
        resultDiv.classList.remove('hidden');
        
        // Create result message with explanation
        let resultMessage = '';
        
        if (isCorrect) {
            resultMessage = `✓ Correct! <span class="result-correct">${currentQuestion.explanation}</span>`;
            try {
                document.querySelector('#correct-sound').play();
            } catch (e) {
                console.warn('Audio error:', e);
            }
        } else {
            resultMessage = `✗ Incorrect. The correct answer is "${currentQuestion.answers[correctIndex]}". ${currentQuestion.explanation}`;
            try {
                document.querySelector('#incorrect-sound').play();
            } catch (e) {
                console.warn('Audio error:', e);
            }
        }
        
        // Update result text with the message
        resultText.innerHTML = resultMessage;
    }
    
    // Add this function to the init() function in app.js
    function createTemporaryWheelTexture() {
        // Check if the wheel texture is missing
        const wheelImg = document.getElementById('wheel-texture');
        
        if (!wheelImg.complete || wheelImg.naturalHeight === 0) {
            console.log("Creating temporary wheel texture");
            const canvas = document.createElement('canvas');
            canvas.width = 1024;  // Revert to 1024 resolution
            canvas.height = 1024;
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            
            // Draw the wheel
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = Math.min(centerX, centerY) - 20;
            
            // Draw metallic outer rim with clean, high contrast gradient
            const rimWidth = radius * 0.12;
            const rimGradient = ctx.createRadialGradient(
                centerX, centerY, radius - rimWidth,
                centerX, centerY, radius + 5
            );
            rimGradient.addColorStop(0, '#a0a0a0');
            rimGradient.addColorStop(0.3, '#f0f0f0');
            rimGradient.addColorStop(0.6, '#a0a0a0');
            rimGradient.addColorStop(0.9, '#707070');
            rimGradient.addColorStop(1, '#505050');
            
            // Create the wheel with anti-aliasing for smoother edges
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius + 5, 0, Math.PI * 2);
            ctx.fillStyle = rimGradient;
            ctx.fill();
            
            // Add crisp highlight to outer rim edge - thinner line for better smoothness
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius + 5, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Add clean inner highlight to rim - thinner line for better smoothness
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius - rimWidth + 2, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            
            // Add rivets/bolts to the rim - well defined with good contrast
            const boltCount = 36;
            const boltAngleStep = (Math.PI * 2) / boltCount;
            
            for (let i = 0; i < boltCount; i++) {
                const boltAngle = i * boltAngleStep;
                const boltDistance = radius - (rimWidth / 2);
                const boltX = centerX + boltDistance * Math.cos(boltAngle);
                const boltY = centerY + boltDistance * Math.sin(boltAngle);
                
                // Draw clean, high-contrast bolt
                ctx.beginPath();
                ctx.arc(boltX, boltY, 3, 0, Math.PI * 2);
                const boltGradient = ctx.createRadialGradient(
                    boltX - 1, boltY - 1, 0,
                    boltX, boltY, 3
                );
                boltGradient.addColorStop(0, '#ffffff');
                boltGradient.addColorStop(0.5, '#c0c0c0');
                boltGradient.addColorStop(1, '#808080');
                ctx.fillStyle = boltGradient;
                ctx.fill();
                
                // Add simple highlight that will render crisply
                ctx.beginPath();
                ctx.arc(boltX - 0.7, boltY - 0.7, 1, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
            }
            
            // Draw wheel base
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius - rimWidth, 0, Math.PI * 2);
            ctx.fillStyle = '#000';
            ctx.fill();
            
            // Draw segments with clean, vibrant colors
            const segmentCount = 8;
            const angleStep = (Math.PI * 2) / segmentCount;
            
            const colors = [
                ['#2980b9', '#3498db'], // Blue
                ['#8e44ad', '#9b59b6'], // Purple
                ['#27ae60', '#2ecc71'], // Green
                ['#c0392b', '#e74c3c'], // Red
                ['#d35400', '#e67e22'], // Orange
                ['#16a085', '#1abc9c'], // Teal
                ['#f39c12', '#f1c40f'], // Yellow
                ['#2c3e50', '#34495e']  // Dark Blue
            ];
            
            for (let i = 0; i < segmentCount; i++) {
                const startAngle = i * angleStep;
                const endAngle = (i + 1) * angleStep;
                
                // Create clean gradient for segment
                const gradient = ctx.createRadialGradient(
                    centerX, centerY, (radius - rimWidth) * 0.3,
                    centerX, centerY, radius - rimWidth
                );
                gradient.addColorStop(0, colors[i][0]);
                gradient.addColorStop(0.7, colors[i][1]);
                gradient.addColorStop(1, colors[i][0]);
                
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, radius - rimWidth, startAngle, endAngle);
                ctx.closePath();
                ctx.fillStyle = gradient;
                ctx.fill();
                
                // Add simple, high-contrast segment divider
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX + Math.cos(startAngle) * (radius - rimWidth), 
                          centerY + Math.sin(startAngle) * (radius - rimWidth));
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
                ctx.lineWidth = 2;
                ctx.stroke();
                
                // Add highlight to segment divider for depth
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX + Math.cos(startAngle) * (radius - rimWidth), 
                          centerY + Math.sin(startAngle) * (radius - rimWidth));
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.lineWidth = 1;
                ctx.stroke();
                
                // Add clear, bold text with strong contrast
                const textAngle = startAngle + (angleStep / 2);
                const textX = centerX + ((radius - rimWidth) * 0.8) * Math.cos(textAngle);
                const textY = centerY + ((radius - rimWidth) * 0.8) * Math.sin(textAngle);
                
                ctx.save();
                ctx.translate(textX, textY);
                ctx.rotate(textAngle + Math.PI/2);
                
                // Sharp, high-contrast text
                ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
                ctx.shadowBlur = 3;
                ctx.shadowOffsetX = 1;
                ctx.shadowOffsetY = 1;
                ctx.fillStyle = 'white';
                ctx.font = 'bold 34px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(triviaData.categories[i], 0, 0);
                ctx.restore();
            }
            
            // Draw center hub with metallic finish
            const centerRadius = (radius - rimWidth) * 0.3;
            
            // Draw outer hub ring with clean metallic gradient
            const hubOuterRingGradient = ctx.createRadialGradient(
                centerX, centerY, centerRadius - 10,
                centerX, centerY, centerRadius
            );
            hubOuterRingGradient.addColorStop(0, '#444444');
            hubOuterRingGradient.addColorStop(0.5, '#333333');
            hubOuterRingGradient.addColorStop(1, '#222222');
            
            ctx.beginPath();
            ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
            ctx.fillStyle = hubOuterRingGradient;
            ctx.fill();
            
            // Draw metallic accent ring
            const goldRingWidth = centerRadius * 0.2;
            const goldRingRadius = centerRadius - goldRingWidth - 5;
            const centerRingGradient = ctx.createRadialGradient(
                centerX, centerY, goldRingRadius - goldRingWidth,
                centerX, centerY, goldRingRadius
            );
            centerRingGradient.addColorStop(0, '#a0a0a0');
            centerRingGradient.addColorStop(0.3, '#f0f0f0');
            centerRingGradient.addColorStop(0.7, '#808080');
            centerRingGradient.addColorStop(1, '#505050');
            
            ctx.beginPath();
            ctx.arc(centerX, centerY, goldRingRadius, 0, Math.PI * 2);
            ctx.fillStyle = centerRingGradient;
            ctx.fill();
            
            // Add highlight to ring for depth
            ctx.beginPath();
            ctx.arc(centerX, centerY, goldRingRadius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Add inner highlight to ring
            ctx.beginPath();
            ctx.arc(centerX, centerY, goldRingRadius - goldRingWidth, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Add clean dotted pattern on ring
            const dotCount = 24;
            const dotAngleStep = (Math.PI * 2) / dotCount;
            
            for (let i = 0; i < dotCount; i++) {
                const dotAngle = i * dotAngleStep;
                const dotRadius = goldRingRadius - (goldRingWidth / 2);
                const dotX = centerX + dotRadius * Math.cos(dotAngle);
                const dotY = centerY + dotRadius * Math.sin(dotAngle);
                
                ctx.beginPath();
                ctx.arc(dotX, dotY, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            }
            
            // Draw inner center hub
            const innerCenterRadius = goldRingRadius - goldRingWidth - 5;
            const innerCenterGradient = ctx.createRadialGradient(
                centerX, centerY, 0,
                centerX, centerY, innerCenterRadius
            );
            innerCenterGradient.addColorStop(0, '#333333');
            innerCenterGradient.addColorStop(0.7, '#222222');
            innerCenterGradient.addColorStop(1, '#111111');
            
            ctx.beginPath();
            ctx.arc(centerX, centerY, innerCenterRadius, 0, Math.PI * 2);
            ctx.fillStyle = innerCenterGradient;
            ctx.fill();
            
            // Add simple, clean radial lines in the center hub
            const lineCount = 16;
            const lineAngleStep = (Math.PI * 2) / lineCount;
            
            for (let i = 0; i < lineCount; i++) {
                const lineAngle = i * lineAngleStep;
                
                ctx.beginPath();
                ctx.moveTo(centerX + innerCenterRadius * 0.3 * Math.cos(lineAngle), 
                          centerY + innerCenterRadius * 0.3 * Math.sin(lineAngle));
                ctx.lineTo(centerX + innerCenterRadius * 0.9 * Math.cos(lineAngle), 
                          centerY + innerCenterRadius * 0.9 * Math.sin(lineAngle));
                ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
            
            // Add center pivot/axle with clean metallic finish
            const centerPivotRadius = innerCenterRadius * 0.3;
            const centerPivotGradient = ctx.createRadialGradient(
                centerX - 2, centerY - 2, 0,
                centerX, centerY, centerPivotRadius
            );
            centerPivotGradient.addColorStop(0, '#ffffff');
            centerPivotGradient.addColorStop(0.3, '#c0c0c0');
            centerPivotGradient.addColorStop(1, '#808080');
            
            ctx.beginPath();
            ctx.arc(centerX, centerY, centerPivotRadius, 0, Math.PI * 2);
            ctx.fillStyle = centerPivotGradient;
            ctx.fill();
            
            // Add clean highlight to center pivot
            ctx.beginPath();
            ctx.arc(centerX - 1, centerY - 1, centerPivotRadius * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.fill();
            
            // Ensure high-quality PNG output with proper type
            wheelImg.src = canvas.toDataURL('image/png', 1.0);
        }
    }
    
    // Initialize the app
    init();

    // Add to the end of app.js
    console.log("Asset paths:");
    console.log("Wheel texture:", document.querySelector('#wheel-texture').getAttribute('src'));
    console.log("Arrow texture:", document.querySelector('#arrow-texture').getAttribute('src'));
    console.log("Stars background:", document.querySelector('#stars-bg').getAttribute('src'));
    console.log("Directory structure (assets should be in):", window.location.href);
}); 