// Function to generate wheel texture
function createWheelTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    
    // Draw background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Define wheel properties
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    
    // Categories (shorter names for better display)
    const categories = [
        "Basics",
        "Launch",
        "Spacecraft",
        "Science",
        "Asteroid",
        "Journey",
        "Team",
        "Technology"
    ];
    
    // Colors for segments (bright, vibrant colors like in the reference)
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
    
    // Draw metallic outer rim
    const rimGradient = ctx.createRadialGradient(
        centerX, centerY, radius - 15,
        centerX, centerY, radius + 15
    );
    rimGradient.addColorStop(0, '#a0a0a0');
    rimGradient.addColorStop(0.3, '#f0f0f0');
    rimGradient.addColorStop(0.5, '#808080');
    rimGradient.addColorStop(0.7, '#c0c0c0');
    rimGradient.addColorStop(1, '#505050');
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 15, 0, Math.PI * 2);
    ctx.fillStyle = rimGradient;
    ctx.fill();
    
    // Add rivets/bolts to the rim
    const boltCount = 36;
    const boltAngleStep = (Math.PI * 2) / boltCount;
    
    for (let i = 0; i < boltCount; i++) {
        const boltAngle = i * boltAngleStep;
        const boltX = centerX + (radius + 8) * Math.cos(boltAngle);
        const boltY = centerY + (radius + 8) * Math.sin(boltAngle);
        
        // Draw bolt
        const boltGradient = ctx.createRadialGradient(
            boltX, boltY, 0,
            boltX, boltY, 4
        );
        boltGradient.addColorStop(0, '#ffffff');
        boltGradient.addColorStop(0.3, '#e0e0e0');
        boltGradient.addColorStop(1, '#808080');
        
        ctx.beginPath();
        ctx.arc(boltX, boltY, 4, 0, Math.PI * 2);
        ctx.fillStyle = boltGradient;
        ctx.fill();
        
        // Add bolt shadow
        ctx.beginPath();
        ctx.arc(boltX, boltY, 5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    // Draw inner wheel area
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#000';
    ctx.fill();
    
    // Draw segments
    const segmentCount = categories.length;
    const angleStep = (Math.PI * 2) / segmentCount;
    
    for (let i = 0; i < segmentCount; i++) {
        const startAngle = i * angleStep;
        const endAngle = (i + 1) * angleStep;
        
        // Create gradient for segment
        const gradient = ctx.createRadialGradient(
            centerX, centerY, radius * 0.25,
            centerX, centerY, radius
        );
        gradient.addColorStop(0, colors[i][0]);
        gradient.addColorStop(1, colors[i][1]);
        
        // Draw segment
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add segment divider lines
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + Math.cos(startAngle) * radius, centerY + Math.sin(startAngle) * radius);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + Math.cos(startAngle) * radius, centerY + Math.sin(startAngle) * radius);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Add category text
        const textAngle = startAngle + (angleStep / 2);
        const textDistance = radius * 0.8; // Position text closer to outer edge for better visibility
        const textX = centerX + textDistance * Math.cos(textAngle);
        const textY = centerY + textDistance * Math.sin(textAngle);
        
        // Save context, move to position and rotate text
        ctx.save();
        ctx.translate(textX, textY);
        ctx.rotate(textAngle + Math.PI/2); // Rotate text perpendicular to radius
        
        // Draw text with shadow for better visibility
        ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
        ctx.shadowBlur = 3;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.fillStyle = 'white';
        ctx.font = 'bold 34px Arial'; // Larger, bold font
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(categories[i], 0, 0);
        
        // Restore context
        ctx.restore();
    }
    
    // Draw center hub with gold/yellow accent
    const centerRadius = radius * 0.22;
    
    // Draw gold/yellow ring around center
    const centerRingGradient = ctx.createRadialGradient(
        centerX, centerY, centerRadius - 8,
        centerX, centerY, centerRadius
    );
    centerRingGradient.addColorStop(0, '#a0a0a0');
    centerRingGradient.addColorStop(0.3, '#f0f0f0');
    centerRingGradient.addColorStop(0.7, '#808080');
    centerRingGradient.addColorStop(1, '#505050');
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
    ctx.fillStyle = centerRingGradient;
    ctx.fill();
    
    // Add dotted/dashed white pattern on gold ring
    const dotCount = 24;
    const dotAngleStep = (Math.PI * 2) / dotCount;
    
    for (let i = 0; i < dotCount; i++) {
        const dotAngle = i * dotAngleStep;
        const dotRadius = centerRadius - 4; // Slightly inside the gold ring
        const dotX = centerX + dotRadius * Math.cos(dotAngle);
        const dotY = centerY + dotRadius * Math.sin(dotAngle);
        
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    
    // Draw inner center hub
    const innerCenterGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, centerRadius - 10
    );
    innerCenterGradient.addColorStop(0, '#333333');
    innerCenterGradient.addColorStop(0.7, '#222222');
    innerCenterGradient.addColorStop(1, '#111111');
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, centerRadius - 10, 0, Math.PI * 2);
    ctx.fillStyle = innerCenterGradient;
    ctx.fill();
    
    // Add subtle radial lines in the center hub
    const lineCount = 16;
    const lineAngleStep = (Math.PI * 2) / lineCount;
    const innerRadius = centerRadius - 10;
    
    for (let i = 0; i < lineCount; i++) {
        const lineAngle = i * lineAngleStep;
        
        ctx.beginPath();
        ctx.moveTo(centerX + innerRadius * 0.3 * Math.cos(lineAngle), 
                  centerY + innerRadius * 0.3 * Math.sin(lineAngle));
        ctx.lineTo(centerX + innerRadius * 0.9 * Math.cos(lineAngle), 
                  centerY + innerRadius * 0.9 * Math.sin(lineAngle));
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    
    // Return data URL
    return canvas.toDataURL('image/png');
} 