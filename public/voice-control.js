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
.voice-indicator {
  position: fixed;
  top: 65px;
  right: 20px;
  background: rgba(26,26,26,0.93);
  color: #fff;
  padding: 12px 18px;
  border-radius: 18px;
  font-size: 15px;
  letter-spacing: 0.5px;
  z-index: 1003;
  display: none;
  font-family: inherit;
  backdrop-filter: blur(10px);
  border: 1px solid #fff4;
  min-width: 110px;
}
/* Notification Styles */
.voice-notification {
  position: fixed;
  bottom: 150px;
  right: 35px;
  z-index: 1400;
  background: linear-gradient(135deg, #4AB1F1 0%, #DC2430 100%);
  color: #fff;
  padding: 13px 24px;
  border-radius: 22px;
  font-size: 1rem;
  font-weight: 600;
  display: none;
  box-shadow: 0 9px 32px rgba(46,20,80,0.16);
  letter-spacing: .4px;
  opacity: 0;
  transition: opacity .2s, transform .2s;
  pointer-events: none;
}
.voice-notification.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
@media (max-width: 650px) {
  .voice-control-btn { right: 9px; bottom: 17px; width: 40px; height: 40px; font-size: 21px; }
  .voice-indicator { top: 47px; right: 9px; font-size: 12px; min-width: 64px;}
  .voice-notification { right: 7px; bottom: 56px; padding: 6px 10px; font-size: .97rem;}
}
  `;
  document.head.appendChild(style);

  // ===== Add Mic Button and Notification if not exist =====
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

  // ===== MIC LOGIC & SEAMLESS SECTION SELECTORS =====
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
        window.langManager.currentLang === "en"
          ? "en-US"
          : window.langManager.currentLang === "hi"
          ? "hi-IN"
          : "or-IN";
    }
  }
  updateRecognitionLang();
  recognition.continuous = false;
  recognition.interimResults = false;

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
    voiceIndicator.style.display = "block";
    let listenMsg = (window.langManager && window.langManager.getTranslation)
      ? window.langManager.getTranslation('voice.listening')
      : "Listening...";
    voiceIndicator.textContent = listenMsg;
    // If translation for clickToSpeak exists, use it.
    if (window.langManager && window.langManager.getTranslation) {
      showVoiceNotification(window.langManager.getTranslation('voice.clickToSpeak'));
    } else {
      showVoiceNotification("Click and speak a command");
    }
  });

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.trim().toLowerCase();
    handleVoiceCommand(transcript);
    let executedMsg = (window.langManager && window.langManager.getTranslation)
      ? window.langManager.getTranslation('voice.commandExecuted')
      : "Command executed!";
    voiceIndicator.textContent = executedMsg;
    micBtn.classList.remove("listening");
    setTimeout(() => (voiceIndicator.style.display = "none"), 1400);
  };
  recognition.onerror = function () {
    let errMsg = (window.langManager && window.langManager.getTranslation)
      ? window.langManager.getTranslation('voice.commandNotRecognized')
      : "Command not recognized";
    voiceIndicator.textContent = errMsg;
    showVoiceNotification(errMsg, 2000);
    micBtn.classList.remove("listening");
    setTimeout(() => (voiceIndicator.style.display = "none"), 1500);
  };

  // ----- USE ONLY CORRECT SELECTORS -----
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
      navMsg = "Projects";
    }
    // Skills
    else if (
      (lang === "en" && command.includes("skill")) ||
      (lang === "hi" && command.includes("कौशल")) ||
      (lang === "or" && command.includes("ଦକ୍ଷତା"))
    ) {
      link = document.querySelector("[href='#skills']");
      navMsg = "Skills";
    }
    // Contact Me (note: selector matches your project formula)
    else if (
      (lang === "en" && command.includes("contact")) ||
      (lang === "hi" && command.includes("संपर्क")) ||
      (lang === "or" && command.includes("ସହ ଯୋଗାଯୋଗ"))
    ) {
      link = document.querySelector("[href='#contactMe']");
      navMsg = "Contact Me";
    }
    // My Self (home/hero-section)
    else if (
      (lang === "en" &&
        (command.includes("home") || command.includes("about") || command.includes("myself"))) ||
      (lang === "hi" && command.includes("मैं")) ||
      (lang === "or" && command.includes("ମୁଁ"))
    ) {
      link = document.querySelector("[href='#hero-section']");
      navMsg = "My Self";
    }
    // Not matched
    else {
      let notFound = (window.langManager && window.langManager.getTranslation)
        ? window.langManager.getTranslation("voice.commandNotRecognized")
        : "Command not recognized";
      voiceIndicator.textContent = notFound;
      showVoiceNotification(notFound, 1800);
      setTimeout(() => (voiceIndicator.style.display = "none"), 2000);
    }
    if (link) {
      link.click();
      if (window.langManager && window.langManager.notifications && window.langManager.notifications.voiceCommandHelp) {
        // If you want section-specific text, extend language.js, but this is section name:
        showVoiceNotification((window.langManager.notifications.voiceCommandHelp || "Jump to section: ") + navMsg, 1700);
      } else {
        showVoiceNotification("Navigating: " + navMsg, 1700);
      }
    }
  }
});
