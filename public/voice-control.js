document.addEventListener("DOMContentLoaded", function () {
  // ======= ENHANCED STYLES (Mic Button & Notification) =======
  const style = document.createElement('style');
  style.textContent = `
.voice-control-btn {
  position: fixed;
  bottom: 82px;
  right: 26px;
  z-index: 1002;
  width: 58px;
  height: 58px;
  background: linear-gradient(135deg, #4AB1F1 0%, #DC2430 100%);
  color: #fff;
  border: none;
  outline: none;
  border-radius: 50%;
  box-shadow: 0 6px 22px rgba(220,36,48,0.17), 0 2px 9px rgba(74, 177, 241, 0.11);
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow .3s, transform .18s, background .23s;
}
.voice-control-btn:active,
.voice-control-btn.listening {
  background: linear-gradient(135deg, #FF6B6B 7%, #FF8E53 93%);
  animation: pulse-mic 1.4s infinite;
}
@keyframes pulse-mic {
  0%, 100% { box-shadow: 0 4px 16px 3px #FF8E5340; }
  55% { box-shadow: 0 9px 28px 9px #FF8E53AA; }
}
.voice-control-btn:hover {
  box-shadow: 0 12px 28px rgba(220,36,48,0.28), 0 3px 12px rgba(74, 177, 241, 0.23);
  transform: scale(1.13);
  outline: 2px solid #fff;
  background: linear-gradient(135deg, #DC2430 18%, #4AB1F1 82%);
}
/* --- New Visual Overlay Styles --- */
.voice-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: opacity 0.3s ease;
}
.voice-overlay.active { display: flex; }
.wave-container {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wave-ring {
  position: absolute;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #4AB1F1, #DC2430, #4AB1F1);
  mask: radial-gradient(circle, transparent 69%, black 70%);
  -webkit-mask: radial-gradient(circle, transparent 69%, black 70%);
  opacity: 0.8;
  filter: drop-shadow(0 0 8px rgba(74, 177, 241, 0.6));
}
.wave-ring:nth-child(1) { 
  width: 100%; 
  height: 100%; 
  animation: rotate-wave 3s linear infinite; 
}
.wave-ring:nth-child(2) { 
  width: 92%; 
  height: 92%; 
  animation: rotate-wave 5s linear reverse infinite; 
  opacity: 0.5;
  filter: blur(1px);
}
.mic-center-icon {
  width: 60px;
  height: 100px;
  background: #999;
  border-radius: 30px;
  position: relative;
  z-index: 2001;
  display: flex;
  justify-content: center;
}
.mic-center-icon::after {
  content: '';
  position: absolute;
  bottom: -20px;
  width: 80px;
  height: 40px;
  border: 6px solid #999;
  border-top: 0;
  border-radius: 0 0 40px 40px;
}
.mic-center-icon::before {
  content: '';
  position: absolute;
  bottom: -35px;
  width: 6px;
  height: 15px;
  background: #999;
}
@keyframes rotate-wave {
  from { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.05); }
  to { transform: rotate(360deg) scale(1); }
}
.voice-status-text {
  margin-top: 30px;
  color: #fff;
  font-family: sans-serif;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgba(255,255,255,0.5);
}
.voice-indicator,
.voice-notification {
  position: fixed;
  background: linear-gradient(135deg, #4AB1F1, #DC2430);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 1003;
  opacity: 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(74,177,241,0.4);
}
.voice-indicator {
  top: 20px;
  right: 20px;
}
.voice-notification {
  bottom: 140px;
  right: 20px;
}
.voice-notification.show {
  opacity: 1;
  transform: translateY(-10px);
}
@media (max-width: 650px) {
  .voice-control-btn { right: 9px; bottom: 17px; width: 40px; height: 40px; font-size: 21px; }
  .voice-indicator { top: 47px; right: 9px; font-size: 12px; min-width: 64px;}
  .voice-notification { right: 7px; bottom: 56px; padding: 6px 10px; font-size: .97rem;}
}
  `;
  document.head.appendChild(style);

  // ===== Add Mic Button and Elements =====
  let micBtn = document.getElementById("voiceControlBtn");
  if (!micBtn) {
    micBtn = document.createElement('button');
    micBtn.id = "voiceControlBtn";
    micBtn.className = "voice-control-btn";
    micBtn.innerHTML = `<span aria-label="Mic" role="img">🎤</span>`;
    micBtn.title = "Click to speak a voice command";
    document.body.appendChild(micBtn);
  }
  
  let voiceIndicator = document.getElementById("voiceIndicator");
  if (!voiceIndicator) {
    voiceIndicator = document.createElement('div');
    voiceIndicator.id = "voiceIndicator";
    voiceIndicator.className = "voice-indicator";
    document.body.appendChild(voiceIndicator);
  }
  
  let notificationDiv = document.getElementById('voiceNotification');
  if (!notificationDiv) {
    notificationDiv = document.createElement('div');
    notificationDiv.id = 'voiceNotification';
    notificationDiv.className = 'voice-notification';
    document.body.appendChild(notificationDiv);
  }

  // ===== VOICE NOTIFICATION FUNCTION =====
  function showVoiceNotification(message, duration = 2200) {
    notificationDiv.textContent = message;
    notificationDiv.classList.add("show");
    notificationDiv.style.opacity = "1";
    clearTimeout(notificationDiv.hideTimeout);
    notificationDiv.hideTimeout = setTimeout(() => {
      notificationDiv.classList.remove("show");
      notificationDiv.style.opacity = "0";
    }, duration);
  }

  // ===== CREATE VISUAL OVERLAY =====
  let voiceOverlay = document.getElementById("voiceOverlay");
  if (!voiceOverlay) {
    voiceOverlay = document.createElement('div');
    voiceOverlay.id = "voiceOverlay";
    voiceOverlay.className = "voice-overlay";
    voiceOverlay.innerHTML = `
      <div class="wave-container">
        <div class="wave-ring"></div>
        <div class="wave-ring"></div>
        <div class="mic-center-icon"></div>
      </div>
      <div id="overlayStatus" class="voice-status-text">Listening...</div>
    `;
    document.body.appendChild(voiceOverlay);
  }

  const overlayStatus = document.getElementById("overlayStatus");

  // ===== FEMALE VOICE TEXT-TO-SPEECH FUNCTION =====
  function speakFeedback(message, lang) {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = lang === 'hi' ? 'hi-IN' : lang === 'or' ? 'or-IN' : 'en-US';
    utterance.rate = 0.9;      // Natural speaking speed
    utterance.pitch = 1.2;     // Higher pitch = feminine tone
    utterance.volume = 0.8;
    
    // Wait for voices to load
    function assignVoice() {
      const voices = speechSynthesis.getVoices();
      
      // PRIORITIZE FEMALE VOICES
      let femaleVoice = null;
      
      if (lang === 'en') {
        // English female voices (most common)
        femaleVoice = voices.find(v => 
          v.lang.startsWith('en') && (
            v.name.toLowerCase().includes('female') ||
            v.name.toLowerCase().includes('woman') ||
            v.name.toLowerCase().includes('samantha') ||
            v.name.toLowerCase().includes('cortana') ||
            v.name.toLowerCase().includes('zira') ||
            v.name.includes('Google US English') ||
            v.name.includes('Microsoft Zira') ||
            v.name.includes('Samantha') ||
            v.gender === 'female'  // Some browsers support this
          )
        );
      }
      else if (lang === 'hi') {
        femaleVoice = voices.find(v => 
          v.lang.startsWith('hi') && (
            v.name.toLowerCase().includes('female') ||
            v.name.includes('Google हिंदी') ||
            v.gender === 'female'
          )
        );
      }
      else if (lang === 'or') {
        femaleVoice = voices.find(v => 
          v.lang.startsWith('or') || 
          (v.lang.startsWith('en') && v.gender === 'female')
        );
      }
      
      // Fallback to best available voice
      utterance.voice = femaleVoice || voices.find(v => v.lang.startsWith(utterance.lang.slice(0,2)));
      
      speechSynthesis.speak(utterance);
    }
    
    // Handle voice loading delay
    if (speechSynthesis.getVoices().length > 0) {
      assignVoice();
    } else {
      speechSynthesis.onvoiceschanged = assignVoice;
    }
  }

  // ===== SPEECH RECOGNITION SETUP =====
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    micBtn.style.display = "none";
    voiceIndicator.style.display = "block";
    const notSupportedMsg = (window.langManager && window.langManager.getTranslation)
      ? window.langManager.getTranslation('voice.voiceNotSupported')
      : "Voice control not supported in this browser";
    voiceIndicator.textContent = notSupportedMsg;
    showVoiceNotification(notSupportedMsg, 3500);
    return;
  }

  const recognition = new SpeechRecognition();
  function updateRecognitionLang() {
    if (window.langManager) {
      recognition.lang =
        window.langManager.currentLang === "en" ? "en-US" :
        window.langManager.currentLang === "hi" ? "hi-IN" : "or-IN";
    }
  }
  updateRecognitionLang();
  recognition.continuous = false;
  recognition.interimResults = false;

  // ===== BUTTON INTERACTIONS =====
  micBtn.addEventListener("mousedown", function () {
    micBtn.classList.add("listening");
  });
  micBtn.addEventListener("mouseup", function () {
    micBtn.classList.remove("listening");
  });
  micBtn.addEventListener("mouseleave", function () {
    micBtn.classList.remove("listening");
  });

  micBtn.addEventListener("click", function () {
    updateRecognitionLang();
    recognition.start();
    
    micBtn.classList.add("listening");
    voiceOverlay.classList.add("active");
    
    let listenMsg = (window.langManager && window.langManager.getTranslation)
      ? window.langManager.getTranslation('voice.listening')
      : "Listening...";
    overlayStatus.textContent = listenMsg;
  });

  // ===== RECOGNITION EVENTS =====
  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.trim().toLowerCase();
    handleVoiceCommand(transcript);
    
    const lang = (window.langManager && window.langManager.currentLang) ? window.langManager.currentLang : "en";
    speakFeedback(
      lang === "en" ? "Command executed successfully" :
      lang === "hi" ? "आदेश सफलतापूर्वक निष्पादित" :
      "କମାଣ୍ଡ ସଫଳତାର ସହ ନିର୍ବାହିତ",
      lang
    );
    
    overlayStatus.textContent = (window.langManager && window.langManager.getTranslation)
      ? window.langManager.getTranslation('voice.commandExecuted')
      : "Success!";
    
    setTimeout(() => {
      voiceOverlay.classList.remove("active");
      micBtn.classList.remove("listening");
    }, 1000);
  };

  recognition.onerror = function () {
    overlayStatus.textContent = "Try Again...";
    const lang = (window.langManager && window.langManager.currentLang) ? window.langManager.currentLang : "en";
    speakFeedback(
      lang === "en" ? "Please try again" :
      lang === "hi" ? "कृपया पुनः प्रयास करें" :
      "ଦୟାକରି ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ",
      lang
    );
    
    setTimeout(() => {
      voiceOverlay.classList.remove("active");
      micBtn.classList.remove("listening");
    }, 1500);
  };

  // ===== VOICE COMMAND HANDLER =====
  function handleVoiceCommand(command) {
    const lang = (window.langManager && window.langManager.currentLang) ? window.langManager.currentLang : "en";
    let link = null, navMsg = null;
    
    // Projects
    if (
      (lang === "en" && (command.includes("project") || command.includes("show projects"))) ||
      (lang === "hi" && (command.includes("प्रोजेक्ट") || command.includes("प्रोजेक्ट्स"))) ||
      (lang === "or" && (command.includes("ପ୍ରୋଜେକ୍ଟ") || command.includes("ପ୍ରୋଜେକ୍ଟସ୍")))
    ) {
      link = document.querySelector("[href='#projects']");
      navMsg = lang === "en" ? "Projects" : lang === "hi" ? "प्रोजेक्ट्स" : "ପ୍ରୋଜେକ୍ଟ୍";
    }
    // Skills
    else if (
      (lang === "en" && command.includes("skill")) ||
      (lang === "hi" && command.includes("कौशल")) ||
      (lang === "or" && command.includes("ଦକ୍ଷତା"))
    ) {
      link = document.querySelector("[href='#skills']");
      navMsg = lang === "en" ? "Skills" : lang === "hi" ? "कौशल" : "ଦକ୍ଷତା";
    }
    // Contact Me
    else if (
      (lang === "en" && command.includes("contact")) ||
      (lang === "hi" && command.includes("संपर्क")) ||
      (lang === "or" && command.includes("ସହ ଯୋଗାଯୋଗ"))
    ) {
      link = document.querySelector("[href='#contactMe']");
      navMsg = lang === "en" ? "Contact Me" : lang === "hi" ? "संपर्क" : "ସହ ଯୋଗାଯୋଗ";
    }
    // Home/About
    else if (
      (lang === "en" && (command.includes("home") || command.includes("about") || command.includes("myself"))) ||
      (lang === "hi" && command.includes("मैं")) ||
      (lang === "or" && command.includes("ମୁଁ"))
    ) {
      link = document.querySelector("[href='#hero-section']");
      navMsg = lang === "en" ? "Home" : lang === "hi" ? "मुख्य" : "ଘର";
    }
    // Not matched
    else {
      const notFoundMsg = (window.langManager && window.langManager.getTranslation)
        ? window.langManager.getTranslation("voice.commandNotRecognized")
        : "Command not recognized";
      
      voiceIndicator.textContent = notFoundMsg;
      showVoiceNotification(notFoundMsg, 1800);
      
      speakFeedback(
        lang === "en" ? "Command not recognized. Try again." :
        lang === "hi" ? "आदेश पहचाना नहीं गया। पुनः प्रयास करें।" :
        "କମାଣ୍ଡ୍ ପରିଚାଳନା ହୋଇନଥିଲା। ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ।",
        lang
      );
      
      setTimeout(() => (voiceIndicator.style.display = "none"), 2000);
      return;
    }
    
    if (link) {
      link.click();
      
      // FEMALE VOICE NAVIGATION CONFIRMATION
      const spokenMsg = 
        lang === "en" ? `Navigating to ${navMsg}` :
        lang === "hi" ? `${navMsg} पर जा रहे हैं` :
        `${navMsg}କୁ ଯାଉଛି`;
      
      speakFeedback(spokenMsg, lang);
      
      showVoiceNotification("✓ " + navMsg, 1700);
    }
  }
});
