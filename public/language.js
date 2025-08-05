// language.js - Complete rewritten version with voice control support

// Language configuration and translations
const translations = {
    en: {
        // Navbar
        nav: {
            home: "My Self",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact Me"
        },
        
        // Hero Section
        hero: {
            greeting: "Hey there 😊",
            subHeading: "I am <{role}/",
            description: "I'm a software developer and here is my Portfolio Website. Here you'll learn about my journey as a software developer.",
            roles: [
                "Full Stack Developer",
                "Web Developer",
                "Frontend Developer",
                "Coder",
                "React Developer",
                "UI-UX Designer",
                "Subhasmita Sahoo"
            ],
            viewWork: "HIRE Subhasmita"
        },
        
        // Projects Section
        projects: {
            title: "Projects",
            project1: {
                title: "Guardian Angel – Safety Web App",
                description: "Guardian Angel is a modern, AI-powered personal safety web app built using Next.js, React, Tailwind CSS, and Genkit (Gemini AI). Focused on empowering women and students during solo travels, it integrates real-time location sharing, voice and shake-triggered SOS, AI crime reporting, and a community-rated safety map. With multilingual support and responsive design, it's a powerful tool for turning your device into a smart safety companion."
            },
            project2: {
                title: "IMAGE-Enhancer",
                description: "A modern React and Tailwind CSS web app for enhancing images with AI. Features include dark/light mode, side-by-side comparison, and support for upscaling, denoising, and sharpening via API integration."
            },
            project3: {
                title: "Password Vault",
                description: "A sleek and secure password manager built with React, Next.js, and Tailwind CSS. Store, manage, and retrieve your passwords effortlessly – all in your browser!"
            },
            project4: {
                title: "3D Gaming Website",
                description: "This 3D Gaming Website is a sleek, scroll-based interactive experience crafted with React, Tailwind CSS, Three.js and GSAP. Designed to feel like a virtual game world, it features smooth animations, bold visuals, and immersive UI elements that showcase modern frontend development with a futuristic twist. A visual journey where design meets motion."
            },
            project5: {
                title: "BitLinks",
                description: "Bit Links – Smart URL Shortener I developed Bit Links, a clean and responsive web app that allows users to shorten long URLs, manage them efficiently, and track click analytics. Built with React.js, Next.js, Express.js, MongoDB and Tailwind CSS, it offers a modern UI/UX and real-time performance."
            },
            liveLink: "LIVE LINK",
            watchDemo: "WATCH DEMO"
        },
        
        // Skills Section
        skills: {
            title: "Me and MyTech Stack",
            description1: "Hi, I'm Subhasmita Sahoo, a passionate Computer Science Engineering student driven by curiosity and a flair for innovation in web development and AI.",
            description2: "My expertise centers on frontend and full-stack technologies, including HTML, CSS, Tailwind CSS, JavaScript, React, Redux, Next.js, Node.js, Express.js, MongoDB, Firebase, Mongoose, and RESTful APIs, along with UI/UX design in Figma. I love building responsive, accessible, and seamless applications that delight users.",
            description3: "I have been recognized as a Top 5 Finalist in the All-India Women Tech Hackathon 2025 for my AI-powered project 'Guardian Angel', and have completed internships with Infosys in Full-Stack Development and an AICTE-approved Microsoft Azure AI/ML program.",
            description4: "Beyond academics, I have delivered impactful freelance solutions—including a professional IT portfolio site, an official temple website, a crowdfunding platform for motorcycle rides, and an interior automation company site. Eager to embrace new challenges, I thrive on collaboration, continuous learning, and bringing bold ideas to life through clean, efficient code."
        },
        
        // Contact Section
        contact: {
            title: "Let's",
            subtitle: "Connect!",
            form: {
                name: "Your Name",
                email: "Your Email",
                subject: "Subject",
                message: "Message",
                send: "Send"
            }
        },
        
        // Voice Control
        voice: {
            listening: "Listening...",
            commandExecuted: "Command executed!",
            commandNotRecognized: "Command not recognized",
            voiceNotSupported: "Voice control not supported in this browser",
            clickToSpeak: "Click and speak a command",
            microphoneAccess: "Microphone access required for voice control",
            startListening: "Click to start voice control",
            stopListening: "Click to stop voice control"
        },
        
        // Notifications
        notifications: {
            emailSent: "Email sent successfully!",
            emailFailed: "Failed to send email. Please try again.",
            fillAllFields: "Please fill in all fields",
            invalidEmail: "Please enter a valid email address",
            languageChanged: "Language changed to English",
            voiceCommandHelp: "Say commands like 'go to projects', 'show skills', 'contact me'"
        },
        
        // Footer
        footer: {
            thanksMessage: "Thanks for visiting ❤️",
            quote: "Design, CODE, Develop",
            copyright: "All rights reserved."
        }
    },
    
    hi: {
        // Navbar
        nav: {
            home: "मैं",
            projects: "प्रोजेक्ट्स",
            skills: "कौशल",
            contact: "मुझसे संपर्क करें"
        },
        
        // Hero Section
        hero: {
            greeting: "नमस्ते वहाँ 😊",
            subHeading: "मैं <{role}/ हूं",
            description: "मैं एक सॉफ्टवेयर डेवलपर हूं और यह मेरी पोर्टफोलियो वेबसाइट है। यहां आप सॉफ्टवेयर डेवलपर के रूप में मेरी यात्रा के बारे में जानेंगे।",
            roles: [
                "फुल स्टैक डेवलपर",
                "वेब डेवलपर",
                "फ्रंटएंड डेवलपर",
                "कोडर",
                "रिएक्ट डेवलपर",
                "UI-UX डिज़ाइनर",
                "सुभष्मिता साहू"
            ],
            viewWork: "सुभष्मिता को हायर करें"
        },
        
        // Projects Section
        projects: {
            title: "प्रोजेक्ट्स",
            project1: {
                title: "गार्डियन एंजेल – सुरक्षा वेब ऐप",
                description: "गार्डियन एंजेल एक आधुनिक, AI-संचालित व्यक्तिगत सुरक्षा वेब ऐप है जो Next.js, React, Tailwind CSS, और Genkit (Gemini AI) का उपयोग करके बनाया गया है। एकल यात्रा के दौरान महिलाओं और छात्रों को सशक्त बनाने पर केंद्रित, यह रीयल-टाइम लोकेशन शेयरिंग, वॉयस और शेक-ट्रिगर SOS, AI क्राइम रिपोर्टिंग, और कम्युनिटी-रेटेड सेफ्टी मैप को एकीकृत करता है।"
            },
            project2: {
                title: "इमेज-एन्हांसर",
                description: "AI के साथ इमेज को बेहतर बनाने के लिए एक आधुनिक React और Tailwind CSS वेब ऐप। इसमें डार्क/लाइट मोड, साइड-बाई-साइड तुलना, और API इंटीग्रेशन के माध्यम से अपस्केलिंग, डिनॉइज़िंग, और शार्पनिंग का समर्थन शामिल है।"
            },
            project3: {
                title: "पासवर्ड वॉल्ट",
                description: "React, Next.js, और Tailwind CSS के साथ बनाया गया एक स्लीक और सुरक्षित पासवर्ड मैनेजर। अपने पासवर्ड को आसानी से स्टोर, मैनेज और रिट्रीव करें – सब कुछ आपके ब्राउज़र में!"
            },
            project4: {
                title: "3D गेमिंग वेबसाइट",
                description: "यह 3D गेमिंग वेबसाइट एक स्लीक, स्क्रॉल-आधारित इंटरैक्टिव अनुभव है जो React, Tailwind CSS, Three.js और GSAP के साथ तैयार किया गया है। वर्चुअल गेम वर्ल्ड की तरह डिज़ाइन किया गया, यह स्मूथ एनिमेशन, बोल्ड विजुअल्स, और इमर्सिव UI एलिमेंट्स प्रदान करता है।"
            },
            project5: {
                title: "बिटलिंक्स",
                description: "बिट लिंक्स – स्मार्ट URL शॉर्टनर। मैंने बिट लिंक्स विकसित किया है, एक साफ और रिस्पॉन्सिव वेब ऐप जो उपयोगकर्ताओं को लंबे URLs को छोटा करने, उन्हें कुशलता से प्रबंधित करने और क्लिक एनालिटिक्स ट्रैक करने की अनुमति देता है।"
            },
            liveLink: "लाइव लिंक",
            watchDemo: "डेमो देखें"
        },
        
        // Skills Section
        skills: {
            title: "मैं और मेरी टेक स्टैक",
            description1: "नमस्ते, मैं सुभष्मिता साहू हूं, एक भावुक कंप्यूटर साइंस इंजीनियरिंग की छात्रा जो जिज्ञासा और वेब डेवलपमेंट और AI में नवाचार के जुनून से प्रेरित है।",
            description2: "मेरी विशेषज्ञता फ्रंटएंड और फुल-स्टैक प्रौद्योगिकियों पर केंद्रित है, जिसमें HTML, CSS, Tailwind CSS, JavaScript, React, Redux, Next.js, Node.js, Express.js, MongoDB, Firebase, Mongoose, और RESTful APIs शामिल हैं।",
            description3: "मुझे अपने AI-संचालित प्रोजेक्ट 'गार्जियन एंजेल' के लिए अखिल भारतीय महिला टेक हैकथॉन 2025 में टॉप 5 फाइनलिस्ट के रूप में पहचान मिली है।",
            description4: "शिक्षाविदों से परे, मैंने प्रभावशाली फ्रीलांस समाधान प्रदान किए हैं—जिसमें एक पेशेवर IT पोर्टफोलियो साइट, एक आधिकारिक मंदिर वेबसाइट, मोटरसाइकिल राइड्स के लिए एक क्राउडफंडिंग प्लेटफॉर्म शामिल है।"
        },
        
        // Contact Section
        contact: {
            title: "आइए",
            subtitle: "जुड़ते हैं!",
            form: {
                name: "आपका नाम",
                email: "आपका ईमेल",
                subject: "विषय",
                message: "संदेश",
                send: "भेजें"
            }
        },
        
        // Voice Control
        voice: {
            listening: "सुन रहा है...",
            commandExecuted: "कमांड चलाया गया!",
            commandNotRecognized: "कमांड समझ नहीं आया",
            voiceNotSupported: "इस ब्राउज़र में वॉयस कंट्रोल समर्थित नहीं है",
            clickToSpeak: "क्लिक करें और कमांड बोलें",
            microphoneAccess: "वॉयस कंट्रोल के लिए माइक्रोफोन एक्सेस चाहिए",
            startListening: "वॉयस कंट्रोल शुरू करने के लिए क्लिक करें",
            stopListening: "वॉयस कंट्रोल बंद करने के लिए क्लिक करें"
        },
        
        // Notifications
        notifications: {
            emailSent: "ईमेल सफलतापूर्वक भेजा गया!",
            emailFailed: "ईमेल भेजने में असफल। कृपया पुनः प्रयास करें।",
            fillAllFields: "कृपया सभी फ़ील्ड भरें",
            invalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें",
            languageChanged: "भाषा हिंदी में बदली गई",
            voiceCommandHelp: "'प्रोजेक्ट दिखाओ', 'कौशल दिखाओ', 'संपर्क करो' जैसे कमांड बोलें"
        },
        
        // Footer
        footer: {
            thanksMessage: "विजिट करने के लिए धन्यवाद ❤️",
            quote: "डिजाइन, कोड, विकसित करें",
            copyright: "सभी अधिकार सुरक्षित।"
        }
    },
    
    or: {
        // Navbar
        nav: {
            home: "ମୁଁ",
            projects: "ପ୍ରୋଜେକ୍ଟସ୍",
            skills: "ଦକ୍ଷତା",
            contact: "ମୋ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ"
        },
        
        // Hero Section
        hero: {
            greeting: "ନମସ୍କାର ଏଠାରେ 😊",
            subHeading: "ମୁଁ <{role}/ ଅଟେ",
            description: "ମୁଁ ଜଣେ ସଫ୍ଟୱେର୍ ଡେଭେଲପର୍ ଏବଂ ଏହା ମୋର ପୋର୍ଟଫୋଲିଓ ୱେବସାଇଟ୍। ଏଠାରେ ଆପଣ ସଫ୍ଟୱେର୍ ଡେଭେଲପର୍ ଭାବରେ ମୋର ଯାତ୍ରା ବିଷୟରେ ଜାଣିବେ।",
            roles: [
                "ଫୁଲ୍ ସ୍ଟାକ୍ ଡେଭେଲପର୍",
                "ୱେବ୍ ଡେଭେଲପର୍",
                "ଫ୍ରଣ୍ଟଏଣ୍ଡ ଡେଭେଲପର୍",
                "କୋଡର୍",
                "ରିଆକ୍ଟ ଡେଭେଲପର୍",
                "UI-UX ଡିଜାଇନର୍",
                "ସୁଭଷ୍ମିତା ସାହୁ"
            ],
            viewWork: "ସୁଭଷ୍ମିତାଙ୍କୁ ହାୟାର କରନ୍ତୁ"
        },
        
        // Projects Section
        projects: {
            title: "ପ୍ରୋଜେକ୍ଟସ୍",
            project1: {
                title: "ଗାର୍ଡିଆନ୍ ଏଞ୍ଜେଲ୍ – ସୁରକ୍ଷା ୱେବ୍ ଆପ୍",
                description: "ଗାର୍ଡିଆନ୍ ଏଞ୍ଜେଲ୍ ଏକ ଆଧୁନିକ, AI-ଚାଳିତ ବ୍ୟକ୍ତିଗତ ସୁରକ୍ଷା ୱେବ୍ ଆପ୍ ଯାହା Next.js, React, Tailwind CSS, ଏବଂ Genkit (Gemini AI) ବ୍ୟବହାର କରି ନିର୍ମାଣ କରାଯାଇଛି। ଏକାକୀ ଯାତ୍ରା ସମୟରେ ମହିଳା ଏବଂ ଛାତ୍ରମାନଙ୍କୁ ସଶକ୍ତ କରିବାରେ ଧ୍ୟାନ ଦେଇ, ଏହା ରିଆଲ୍-ଟାଇମ୍ ଲୋକେସନ୍ ସେୟାରିଂ, ଭଏସ୍ ଏବଂ ସେକ୍-ଟ୍ରିଗର୍ SOS ଏକୀକୃତ କରେ।"
            },
            project2: {
                title: "ଇମେଜ୍-ଏନ୍ହାନ୍ସର୍",
                description: "AI ସହିତ ଇମେଜ୍ ବୃଦ୍ଧି ପାଇଁ ଏକ ଆଧୁନିକ React ଏବଂ Tailwind CSS ୱେବ୍ ଆପ୍। ଏଥିରେ ଡାର୍କ/ଲାଇଟ୍ ମୋଡ୍, ସାଇଡ୍-ବାଇ-ସାଇଡ୍ ତୁଳନା, ଏବଂ API ଇଣ୍ଟିଗ୍ରେସନ୍ ମାଧ୍ୟମରେ ଅପସ୍କେଲିଂ, ଡିନଏସିଂ, ଏବଂ ସାର୍ପନିଂର ସମର୍ଥନ ଅନ୍ତର୍ଭୁକ୍ତ।"
            },
            project3: {
                title: "ପାସୱାର୍ଡ ଭଲ୍ଟ",
                description: "React, Next.js, ଏବଂ Tailwind CSS ସହିତ ନିର୍ମିତ ଏକ ଚିକ୍କଣ ଏବଂ ସୁରକ୍ଷିତ ପାସୱାର୍ଡ ମ୍ୟାନେଜର୍। ଆପଣଙ୍କ ପାସୱାର୍ଡକୁ ସହଜରେ ଷ୍ଟୋର୍, ମ୍ୟାନେଜ୍ ଏବଂ ପୁନରୁଦ୍ଧାର କରନ୍ତୁ – ସବୁ ଆପଣଙ୍କ ବ୍ରାଉଜରରେ!"
            },
            project4: {
                title: "3D ଗେମିଂ ୱେବସାଇଟ୍",
                description: "ଏହି 3D ଗେମିଂ ୱେବସାଇଟ୍ ଏକ ଚିକ୍କଣ, ସ୍କ୍ରଲ୍-ଆଧାରିତ ଇଣ୍ଟରଆକ୍ଟିଭ୍ ଅନୁଭବ ଯାହା React, Tailwind CSS, Three.js ଏବଂ GSAP ସହିତ ତିଆରି। ଭର୍ଚୁଆଲ୍ ଗେମ୍ ଜଗତ ପରି ଡିଜାଇନ୍ କରାଯାଇ, ଏହା ସ୍ମୁଥ୍ ଆନିମେସନ୍, ବୋଲ୍ଡ ଭିଜୁଆଲ୍ସ ପ୍ରଦାନ କରେ।"
            },
            project5: {
                title: "ବିଟଲିଙ୍କସ୍",
                description: "ବିଟ୍ ଲିଙ୍କସ୍ – ସ୍ମାର୍ଟ URL ଶର୍ଟନର୍। ମୁଁ ବିଟ୍ ଲିଙ୍କସ୍ ବିକଶିତ କରିଛି, ଏକ ସଫା ଏବଂ ରେସ୍ପନ୍ସିଭ୍ ୱେବ୍ ଆପ୍ ଯାହା ବ୍ୟବହାରକାରୀଙ୍କୁ ଲମ୍ବା URLs କୁ ଛୋଟ କରିବାକୁ, ସେମାନଙ୍କୁ ଦକ୍ଷତାର ସହିତ ପରିଚାଳନା କରିବାକୁ ଅନୁମତି ଦିଏ।"
            },
            liveLink: "ଲାଇଭ୍ ଲିଙ୍କ",
            watchDemo: "ଡେମୋ ଦେଖନ୍ତୁ"
        },
        
        // Skills Section
        skills: {
            title: "ମୁଁ ଏବଂ ମୋର ଟେକ୍ ସ୍ଟାକ୍",
            description1: "ନମସ୍କାର, ମୁଁ ସୁଭାଷ୍ମିତା ସାହୁ, ଜଣେ ଆବେଗପ୍ରବଣ କମ୍ପ୍ୟୁଟର ସାଇନ୍ସ ଇଞ୍ଜିନିୟରିଂ ଛାତ୍ରୀ ଯିଏ କୌତୂହଳ ଏବଂ ୱେବ୍ ଡେଭେଲପମେଣ୍ଟ ଏବଂ AI ରେ ନବାଚାରର ପ୍ରତିଭା ଦ୍ୱାରା ଚାଳିତ।",
            description2: "ମୋର ବିଶେଷଜ୍ଞତା ଫ୍ରଣ୍ଟଏଣ୍ଡ ଏବଂ ଫୁଲ୍-ସ୍ଟାକ୍ ଟେକ୍ନୋଲୋଜିରେ କେନ୍ଦ୍ରିତ, ଯେଉଁଥିରେ HTML, CSS, Tailwind CSS, JavaScript, React, Redux, Next.js, Node.js, Express.js, MongoDB, Firebase, Mongoose ଅନ୍ତର୍ଭୁକ୍ତ।",
            description3: "ମୋର AI-ଚାଳିତ ପ୍ରୋଜେକ୍ଟ 'ଗାର୍ଡିଆନ୍ ଏଞ୍ଜେଲ୍' ପାଇଁ ଅଖିଲ ଭାରତୀୟ ମହିଳା ଟେକ୍ ହାକାଥନ୍ 2025 ରେ ଟପ୍ 5 ଫାଇନାଲିଷ୍ଟ ଭାବରେ ମାନ୍ୟତା ପାଇଛି।",
            description4: "ଶିକ୍ଷାବିଦ୍ୟା ବାହାରେ, ମୁଁ ପ୍ରଭାବଶାଳୀ ଫ୍ରିଲାନ୍ସ ସମାଧାନ ପ୍ରଦାନ କରିଛି—ଯେଉଁଥିରେ ଏକ ପେସାଦାର IT ପୋର୍ଟଫୋଲିଓ ସାଇଟ୍, ଏକ ଅଫିସିଆଲ୍ ମନ୍ଦିର ୱେବସାଇଟ୍, ମୋଟରସାଇକେଲ ରାଇଡ୍ସ ପାଇଁ ଏକ କ୍ରାଉଡଫଣ୍ଡିଂ ପ୍ଲାଟଫର୍ମ ଅନ୍ତର୍ଭୁକ୍ତ।"
        },
        
        // Contact Section
        contact: {
            title: "ଆସନ୍ତୁ",
            subtitle: "ସଂଯୁକ୍ତ ହେବା!",
            form: {
                name: "ଆପଣଙ୍କ ନାମ",
                email: "ଆପଣଙ୍କ ଇମେଲ୍",
                subject: "ବିଷୟ",
                message: "ବାର୍ତ୍ତା",
                send: "ପଠାନ୍ତୁ"
            }
        },
        
        // Voice Control
        voice: {
            listening: "ଶୁଣୁଛି...",
            commandExecuted: "କମାଣ୍ଡ ଚଲାଗଲା!",
            commandNotRecognized: "କମାଣ୍ଡ ବୁଝିପାରିଲି ନାହିଁ",
            voiceNotSupported: "ଏହି ବ୍ରାଉଜରରେ ଭଏସ କଣ୍ଟ୍ରୋଲ ସମର୍ଥିତ ନୁହେଁ",
            clickToSpeak: "କ୍ଲିକ କରି କମାଣ୍ଡ କୁହନ୍ତୁ",
            microphoneAccess: "ଭଏସ କଣ୍ଟ୍ରୋଲ ପାଇଁ ମାଇକ୍ରୋଫୋନ ଏକ୍ସେସ ଦରକାର",
            startListening: "ଭଏସ କଣ୍ଟ୍ରୋଲ ଆରମ୍ଭ କରିବାକୁ କ୍ଲିକ କରନ୍ତୁ",
            stopListening: "ଭଏସ କଣ୍ଟ୍ରୋଲ ବନ୍ଦ କରିବାକୁ କ୍ଲିକ କରନ୍ତୁ"
        },
        
        // Notifications
        notifications: {
            emailSent: "ଇମେଲ ସଫଳତାର ସହ ପଠାଗଲା!",
            emailFailed: "ଇମେଲ ପଠାଇବାରେ ବିଫଳ। ଦୟାକରି ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ।",
            fillAllFields: "ଦୟାକରି ସମସ୍ତ ଫିଲ୍ଡ ପୂରଣ କରନ୍ତୁ",
            invalidEmail: "ଦୟାକରି ଏକ ବୈଧ ଇମେଲ ଠିକଣା ଦିଅନ୍ତୁ",
            languageChanged: "ଭାଷା ଓଡ଼ିଆରେ ପରିବର୍ତ୍ତନ ହୋଇଛି",
            voiceCommandHelp: "'ପ୍ରୋଜେକ୍ଟ ଦେଖାଅ', 'ଦକ୍ଷତା ଦେଖାଅ', 'ଯୋଗାଯୋଗ କର' ଭଳି କମାଣ୍ଡ କୁହନ୍ତୁ"
        },
        
        // Footer
        footer: {
            thanksMessage: "ପରିଦର୍ଶନ ପାଇଁ ଧନ୍ୟବାଦ ❤️",
            quote: "ଡିଜାଇନ୍, କୋଡ୍, ବିକାଶ କରନ୍ତୁ",
            copyright: "ସମସ୍ତ ଅଧିକାର ସୁରକ୍ଷିତ।"
        }
    }
};

// Enhanced Language Management Class
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.supportedLangs = ['en', 'hi', 'or'];
        this.init();
    }

    init() {
        this.createLanguageSelector();
        this.updateContent();
        this.updateTypedJs();
        this.bindEvents();
    }

    createLanguageSelector() {
        // Remove existing selector
        const existingSelector = document.querySelector('.language-selector');
        if (existingSelector) {
            existingSelector.remove();
        }

        // Create new language selector
        const langSelector = document.createElement('div');
        langSelector.className = 'language-selector';
        langSelector.innerHTML = `
            <select id="languageSelect" class="lang-select" aria-label="Select Language">
                <option value="en" ${this.currentLang === 'en' ? 'selected' : ''}>English</option>
                <option value="hi" ${this.currentLang === 'hi' ? 'selected' : ''}>हिंदी</option>
                <option value="or" ${this.currentLang === 'or' ? 'selected' : ''}>ଓଡ଼ିଆ</option>
            </select>
        `;

        // Insert before hamburger icon or append to navbar
        const hamburgerIcon = document.getElementById('hamburgerIcon');
        const navbar = document.querySelector('.navbar');
        
        if (hamburgerIcon && hamburgerIcon.parentNode) {
            hamburgerIcon.parentNode.insertBefore(langSelector, hamburgerIcon);
        } else if (navbar) {
            navbar.appendChild(langSelector);
        }
    }

    bindEvents() {
        const select = document.getElementById('languageSelect');
        if (select) {
            select.addEventListener('change', (e) => {
                this.changeLang(e.target.value);
            });
        }
    }

    changeLang(lang) {
        if (!this.supportedLangs.includes(lang)) {
            console.warn(`Unsupported language: ${lang}`);
            return;
        }

        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        this.updateContent();
        this.updateTypedJs();
        this.notifyLanguageChange();
        
        // Notify other components about language change
        if (typeof window.handleLanguageChange === 'function') {
            window.handleLanguageChange();
        }
    }

    updateContent() {
        const t = translations[this.currentLang];
        if (!t) return;

        try {
            this.updateNavbar(t);
            this.updateHeroSection(t);
            this.updateProjectsSection(t);
            this.updateSkillsSection(t);
            this.updateContactSection(t);
            this.updateFooter(t);
        } catch (error) {
            console.error('Error updating content:', error);
        }
    }

    updateNavbar(t) {
        const navItems = document.querySelectorAll('.nav-item a');
        if (navItems.length >= 4) {
            navItems[0].textContent = t.nav.home;
            navItems[1].textContent = t.nav.projects;
            navItems[2].textContent = t.nav.skills;
            navItems[3].textContent = t.nav.contact;
        }
    }

    updateHeroSection(t) {
        // Update greeting
        const heroHeading = document.querySelector('.hero-section-heading span');
        if (heroHeading) {
            heroHeading.textContent = t.hero.greeting;
        }

        // Update sub-heading
        const heroSubHeading = document.querySelector('.hero-section-sub-heading');
        if (heroSubHeading) {
            heroSubHeading.innerHTML = t.hero.subHeading.replace('{role}', '<span class="role"></span>');
        }

        // Update description
        const heroDescription = document.querySelector('.hero-section-description');
        if (heroDescription) {
            heroDescription.textContent = t.hero.description;
        }

        // Update button
        const viewWorkBtn = document.querySelector('.btn');
        if (viewWorkBtn) {
            viewWorkBtn.textContent = t.hero.viewWork;
        }
    }

    updateProjectsSection(t) {
        // Update section title
        const projectTitle = document.querySelector('.projectTitle');
        if (projectTitle) {
            projectTitle.textContent = t.projects.title;
        }

        // Update individual projects
        this.updateProjectCard('#project1', t.projects.project1);
        this.updateProjectCard('#project2', t.projects.project2);
        this.updateProjectCard('#project3', t.projects.project3);
        this.updateProjectCard('#project4', t.projects.project4);
        this.updateProjectCard('#project5', t.projects.project5);

        // Update project buttons
        this.updateProjectButtons(t);
    }

    // Fix the updateProjectCard function
updateProjectCard(selector, projectData) {
    const projectCard = document.querySelector(selector);
    if (!projectCard) return;
    
    // Use the correct class names that exist in your HTML
    const titleElement = projectCard.querySelector('.projectHeading');
    const descElement = projectCard.querySelector('.projectSubHeading');
    
    if (titleElement) titleElement.textContent = projectData.title;
    if (descElement) descElement.textContent = projectData.description;
}

// Also update the updateProjectButtons function to be more specific
updateProjectButtons(t) {
    // Update live link buttons - target buttons that contain specific text
    const projectBtns = document.querySelectorAll('.projectBtn');
    projectBtns.forEach(btn => {
        // Check if it's a live link button (not video button)
        if (!btn.classList.contains('videoBtn')) {
            const btnText = btn.textContent.toLowerCase();
            if (btnText.includes('live') || btnText.includes('लाइव') || btnText.includes('ଲାଇଭ୍')) {
                btn.textContent = t.projects.liveLink;
            }
        }
    });

    // Update watch demo buttons specifically
    const watchDemoBtns = document.querySelectorAll('.videoBtn');
    watchDemoBtns.forEach(btn => {
        btn.innerHTML = `<i class="fa-solid fa-play"></i> ${t.projects.watchDemo}`;
    });
}

    
    updateSkillsSection(t) {
        // Update skills heading
        const skillHeading = document.querySelector('.skillHeading');
        if (skillHeading) {
            skillHeading.textContent = t.skills.title;
        }

        // Update skill descriptions
        const skillDescriptions = document.querySelectorAll('.skillSubHeading p');
        const descriptions = [
            t.skills.description1,
            t.skills.description2,
            t.skills.description3,
            t.skills.description4
        ];

        skillDescriptions.forEach((desc, index) => {
            if (descriptions[index]) {
                desc.textContent = descriptions[index];
            }
        });
    }

    updateContactSection(t) {
        // Update contact title and subtitle
        const contactTitle = document.querySelector('.upper p');
        if (contactTitle) {
            contactTitle.innerHTML = `${t.contact.title}<br/><span>${t.contact.subtitle}</span>`;
        }

        // Update form placeholders
        const formElements = {
            '#name': t.contact.form.name,
            '#email': t.contact.form.email,
            '#subject': t.contact.form.subject,
            '#message': t.contact.form.message
        };

        Object.entries(formElements).forEach(([selector, placeholder]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.setAttribute('placeholder', placeholder);
            }
        });

        // Update send button
        const sendBtn = document.querySelector('.contact-form button');
        if (sendBtn) {
            sendBtn.textContent = t.contact.form.send;
        }
    }

    updateFooter(t) {
        // Update thanks message
        const thanksMsg = document.querySelector('.footer-thanks');
        if (thanksMsg) {
            thanksMsg.textContent = t.footer.thanksMessage;
        }

        // Update quote
        const quote = document.querySelector('.footer-quote');
        if (quote) {
            quote.textContent = t.footer.quote;
        }

        // Update copyright
        const copyright = document.querySelector('.footer-copyright');
        if (copyright) {
            copyright.textContent = `© ${new Date().getFullYear()} Subhasmita Sahoo. ${t.footer.copyright}`;
        }
    }

    updateTypedJs() {
        // This will be called by the main script to reinitialize Typed.js
        if (typeof window.handleLanguageChange === 'function') {
            window.handleLanguageChange();
        }
    }

    notifyLanguageChange() {
        const t = translations[this.currentLang];
        if (t && t.notifications && t.notifications.languageChanged) {
            // Show language change notification if notification system is available
            if (typeof window.showNotification === 'function') {
                window.showNotification(t.notifications.languageChanged, 'success');
            }
        }
    }

    // Get current translation object
    getTranslations() {
        return translations[this.currentLang];
    }

    // Get specific translation
    getTranslation(path) {
        const keys = path.split('.');
        let current = translations[this.currentLang];
        
        for (const key of keys) {
            if (current && typeof current === 'object' && key in current) {
                current = current[key];
            } else {
                return path; // Return path if translation not found
            }
        }
        
        return current;
    }

    // Translate element by data attribute
    translateByDataAttribute() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const path = element.getAttribute('data-translate');
            const translation = this.getTranslation(path);
            if (translation) {
                element.textContent = translation;
            }
        });
    }
}

// Utility function to get current language manager instance
function getLanguageManager() {
    return window.langManager || new LanguageManager();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, LanguageManager };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (!window.langManager) {
        window.langManager = new LanguageManager();
    }
});

console.log('Language Manager loaded with voice control support');
