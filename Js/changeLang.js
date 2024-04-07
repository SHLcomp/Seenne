
// change language// Original English texts for nav links

const navbar = document.querySelector('nav');
const langBtn = document.querySelector(".dropdown-toggle");
const eng = document.querySelector("#engLang");
const ar = document.querySelector("#arLang");
const navbarBrand = document.querySelector(".navbar-brand");
const navLinks = document.querySelectorAll(".nav-link");
const text1 = document.querySelector("#section2Text");
const startBtn = document.querySelector(".start-btn");
const footerText = document.querySelectorAll(".footer-text");

// Retrieve language from local storage if it exists, otherwise default to English
let currentLanguage = localStorage.getItem("currentLanguage") || "en";

function changeToArabic() {
    navbarBrand.innerText = "سين";

    navLinks.forEach(function(navLink) {
        switch (navLink.innerText) {
            case "Home":
                navLink.innerHTML = "الرئيسية";
                break;
            case "Categories":
                navLink.innerHTML = "الأقسام";
                break;
            case "Contact Us":
                navLink.innerHTML = "اتصل بنا";
                break;
            case "Blogs":
                navLink.innerHTML = "المدونات";
                break;
            case "Sign Up":
                navLink.innerHTML = "تسجيل";
                break;
        }

    
    });

    footerText.forEach(function(footerLink) {
        switch (footerLink.innerText) {
            case "Get connected with us on social networks:":
                footerLink.innerHTML = ":اتصل بنا على منصات التواصل الاجتماعي";
                break;
            case "Seenne":
                footerLink.innerHTML = "سين";
                break;            
            case "Educational platform made to people for free, our goal is to change the world to a better place with knowledge we get stronger.":
                footerLink.innerHTML = ".منصة تعليمية صنعت لجعل العالم مكاناً أفضل, هدفنا هو توفير العلم للناس حتى يصبح العالم أفضل, بالعلم نرتقي" ; 
                break;
            case "Categories":
                footerLink.innerHTML= "التصنيفات";
                break;
            case "Support Us":
                footerLink.innerHTML= "ادعمنا";
                break;
            case "Settings":
                footerLink.innerHTML="الاعدادات";
                break;
            case "Help educate":
                footerLink.innerHTML ="ساهم في التعليم";
                break;
            case "Contact":
                footerLink.innerHTML ="التواصل";
                break;
            case "Amman, Jordan":
                footerLink.innerHTML ="عمان, الأردن";
                break;            
        }
        });
    text1.innerHTML = "!تعلم و غيِّر العالم الآن مجاناً";
    startBtn.innerHTML = "!انطلق";

    currentLanguage = "ar";
    localStorage.setItem("currentLanguage", currentLanguage);
}

function changeToEnglish() {
    navbarBrand.innerText = "Seenne";

    // Reset innerHTML of all nav links
    navLinks.forEach(function(navLink) {
        switch (navLink.innerText) {
            case "الرئيسية":
                navLink.innerHTML = "Home";
                break;
            case "الأقسام":
                navLink.innerHTML = "Categories";
                break;
            case "اتصل بنا":
                navLink.innerHTML = "Contact Us";
                break;
            case "المدونات":
                navLink.innerHTML = "Blogs";
                break;
            case "تسجيل":
                navLink.innerHTML = "Sign Up";
                break;
        }
    });


    footerText.forEach(function(footerLink) {
        switch (footerLink.innerText) {
            case ":اتصل بنا على منصات التواصل الاجتماعي":
                footerLink.innerHTML = "Get connected with us on social networks:";
                break;
            case "سين":
                footerLink.innerHTML = "Seenne";
                break;            
            case ".منصة تعليمية صنعت لجعل العالم مكاناً أفضل, هدفنا هو توفير العلم للناس حتى يصبح العالم أفضل, بالعلم نرتقي" :
                footerLink.innerHTML = "Educational platform made to people for free, our goal is to change the world to a better place with knowledge we get stronger."; 
                break;
            case "التصنيفات":
                footerLink.innerHTML= "Categories";
                break;
            case "ادعمنا":
                footerLink.innerHTML= "Support Us";
                break;
            case "الاعدادات":
                footerLink.innerHTML="Settings";
                break;
            case "ساهم في التعليم":
                footerLink.innerHTML ="Help educate";
                break;
            case "التواصل":
                footerLink.innerHTML ="Contact";
                break;
            case "عمان, الأردن":
                footerLink.innerHTML ="Amman, Jordan" ;
                break;            
        }
        });

    text1.innerHTML = "Learn and change the future now and for free!";
    startBtn.innerHTML = "Start!";

    currentLanguage = "en";
    localStorage.setItem("currentLanguage", currentLanguage);
}

ar.addEventListener("click", changeToArabic);
eng.addEventListener("click", changeToEnglish);

// Set initial language based on stored value or default to English
if (currentLanguage === "ar") {
    changeToArabic();
} else {
    changeToEnglish();
}


