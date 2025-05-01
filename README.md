# 18c_ar_xr-vcu

An interactive suite of WebXR experiences designed to promote public engagement with NASA's **Psyche Mission** — a mission exploring a metal-rich asteroid to better understand planetary cores and early solar system formation.

This project was created as part of the Virginia Commonwealth University Capstone Course **CMSC 451**, in collaboration with NASA’s Psyche Student Collaborations program.

---


## The Psyche Trivia Wheel  

An educational WebXR game that helps users learn about the Psyche mission through an interactive spinning wheel filled with trivia questions.

### How to Play
1. Click **“Enter Experience”** to begin.
2. Tap the wheel to spin it.
3. Answer the trivia question where the wheel lands.
4. Track your score on the right side.
5. Use the **Study Guide** button for additional facts.

### Access Options
- **🌐 Live Demo:** [adoniasdaniel.github.io](https://adoniasdaniel.github.io)  
- **🖥️ Local Server:**
  ```bash
  python -m http.server
  ```
  Then open `http://localhost:8000` in your browser.
- **📂 Direct HTML:** Open `index.html` in your browser.
- **📱 QR Code:** Scan `qr_code.png` with a mobile device to launch the experience.

### Directory Structure
```
PsycheProject/
├── index.html           # Main application
├── qr_code.png          # Working QR code
├── css/
│   └── styles.css       # Styling
├── js/
│   ├── app.js           # Main game logic
│   └── wheel.js         # Wheel spinning component
└── assets/
    ├── textures/        # Images and textures
    └── audio/           # Sound effects
```

---


## Project Contributors

### Devolpers

- **Adonias Daniel** 
- **Santiago Blanco** 
- **Ankita Sahu**
- **Andre Smith** 

**Faculty Advisor:** Rodrigo Spinola, Ph.D.  
**Mentor:** Cassie Bowman, Ed.D.  
**Sponsor:** NASA Psyche Mission  


## Disclaimer

This work was created in partial fulfillment of Virginia Commonwealth University Capstone Course "CMSC442/CMSC452″. The work is a result of the Psyche Student Collaborations component of NASA's Psyche Mission (https://psyche.asu.edu/). "Psyche: A Journey to a Metal World" [Contract number NNM16AA09C] is part of the NASA Discovery Program mission to solar system targets. Trade names and trademarks of ASU and NASA are used in this work for identification only. Their usage does not constitute an official endorsement, either expressed or implied, by Arizona State University or National Aeronautics and Space Administration. The content is solely the responsibility of the authors and does not necessarily represent the official views of ASU or NASA.
