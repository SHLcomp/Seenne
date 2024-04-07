
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
const sideBarText = document.querySelectorAll(".side-bar-text");

// Retrieve language from local storage if it exists, otherwise default to English
let currentLanguage = localStorage.getItem("currentLanguage") || "en";

function changeToArabic() {
    navbarBrand.innerText = "سين";


    sideBarText.forEach(function(text){
        switch (text.innerHTML){
            case "Profile":
                text.innerHTML ="الحساب";
            break;
            case "Home":
                text.innerHTML ="الرئيسية";
            break;
            case "Tasks":
                text.innerHTML ="المهام";
            break;
            case "My courses":
                text.innerHTML ="دوراتي";
            break;
            case "Community":
                text.innerHTML ="المجتمع";
            break;
            case "FAQ":
                text.innerHTML ="اسئلة";
            break;
            case "About Us":
                text.innerHTML ="عنا";
            break;
            case "Contact":
                text.innerHTML ="التواصل";
            break;


            case "Settings":
                text.innerHTML ="الاعدادات";
            break;
            case "Logout":
                text.innerHTML ="سجل خروج";
            break;

            // courses
            case "Popular Courses":
                text.innerHTML ="الدورات المشهورة";
            break;
            case "Learn about Html, build your first web app!":
                text.innerHTML ="تعلم و اصنع أول موقع الكتروني";
            break;
            case "No previous coding knowledge required.":
                text.innerHTML ="لا يتطلب معرفة سابقة";
            break;
            case "Start Course":
                text.innerHTML ="ابدأ الدورة";
            break;
            case "Basic HTML knowledge needed.":
                text.innerHTML =" HTML تطلب معرفة بسيطة ب  ";
            break;


            //to do lidt            
            case "To Do List:":
                text.innerHTML ="...قائمة المهام";
            break;
            case "add":
                text.innerHTML ="أضف";
            break;
            case "There's no tasks to do...":
                text.innerHTML ="...لا توجد لديك مهام";
            break;


            // track
            case "Track Progress":
                text.innerHTML ="تتبع نشاطك";
            break;
            case "Redo Task":
                text.innerHTML ="اعد الدورة";
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
        

    currentLanguage = "ar";
    localStorage.setItem("currentLanguage", currentLanguage);
}

function changeToEnglish() {
    navbarBrand.innerText = "Seenne";

    sideBarText.forEach(function(text){
        switch (text.innerHTML){
            case "الحساب":
                text.innerHTML ="Profile";
            break;
            case "الرئيسية":
                text.innerHTML ="Home";
            break;
            case "المهام":
                text.innerHTML ="Tasks";
            break;
            case "دوراتي":
                text.innerHTML ="My courses";
            break;
            case "المجتمع":
                text.innerHTML ="Community";
            break;
            case "اسئلة":
                text.innerHTML ="FAQ";
            break;
            case "عنا":
                text.innerHTML ="About Us";
            break;
            case "التواصل":
                text.innerHTML ="Contact";
            break;


            case "الاعدادات":
                text.innerHTML ="Settings";
            break;
            case "سجل خروج":
                text.innerHTML ="Logout";
            break;

            // courses
            case "الدورات المشهورة":
                text.innerHTML ="Popular Courses";
            break;
            case "تعلم و اصنع أول موقع الكتروني":
                text.innerHTML ="Learn about Html, build your first web app!";
            break;
            case "لا يتطلب معرفة سابقة":
                text.innerHTML ="No previous coding knowledge required.";
            break;
            case "ابدأ الدورة":
                text.innerHTML ="Start Course";
            break;
            case " HTMLتطلب معرفة بسيطة ب  ":
                text.innerHTML ="Basic HTML knowledge needed.";
            break;


            //to do lidt            
            case "...قائمة المهام":
                text.innerHTML ="To Do List:";
            break;
            case "أضف":
                text.innerHTML ="add";
            break;
            case "...لا توجد لديك مهام":
                text.innerHTML ="There's no tasks to do...";
            break;


            // track
            case "تتبع نشاطك":
                text.innerHTML ="Track Progress";
            break;
            case "اعد الدورة":
                text.innerHTML ="Redo Task";
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


