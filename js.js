
  function setLanguage(language) {
    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function(element) {
        var key = element.getAttribute('data-lang');
        element.innerText = translations[language][key];
    });
}


  var translations = {
  "ar": {
      "title": "تطبيقك - منصة ترفيهية",
      "intro_title": "مقدمة حول التطبيق",
      "intro_text": "تطبيقك هو منصة شبه ترفيهية تقوم بنشر جميع الأعمال الجديدة أو التي سيتم إصدارها مع معلومات أو عروض تشويق أو تلميحات حول عمل كيفما كان: ألعاب فيديو، أنمي، مانغا، مسلسلات، أفلام أجنبية أو محلية، مع جميع الفنون أو المعارض المقامة في العالم العربي خاصة أو في العالم عامة.",
      "install_title": "طريقة التثبيت",
      "install_text": "يمكنك تحميل التطبيق من Google Play أو App Store عبر الروابط التالية:",
      "download_google": "تحميل من Google Play",
      "download_apple": "تحميل من App Store",
      "company_title": "معلومات حول الشركة",
      "company_text": "تم إنشاء شركة تطبيقك في تاريخ [تاريخ الإنشاء]، وهدفها تقديم خدمات ترفيهية متنوعة لجمهور العالم العربي والعالمي.",
      "services_title": "خدمات إضافية",
      "service1": "نشر مقالات نقدية حول الأعمال الفنية",
      "service2": "تقديم توصيات مخصصة للمستخدمين",
      "service3": "متابعة أحدث الأخبار في عالم الترفيه",
      "subscribe_title": "ابق على اطلاع",
      "subscribe_text": "للحصول على أحدث الأخبار والعروض، يرجى إدخال بريدك الإلكتروني أدناه:",
      "subscribe_button": "اشترك",
      "footer_text": "2024 تطبيقك. جميع الحقوق محفوظة."
  },
  "fr": {
      "title": "Votre App - Plateforme de Divertissement",
      "intro_title": "Introduction sur l'application",
      "intro_text": "Votre App est une plateforme de divertissement qui publie toutes les nouvelles œuvres ou celles à venir avec des informations, des teasers ou des indices sur n'importe quel type de travail : jeux vidéo, anime, manga, séries, films étrangers ou locaux, ainsi que toutes les formes d'art ou d'expositions organisées dans le monde arabe en particulier ou dans le monde en général.",
      "install_title": "Comment installer",
      "install_text": "Vous pouvez télécharger l'application depuis Google Play ou App Store via les liens suivants :",
      "download_google": "Télécharger depuis Google Play",
      "download_apple": "Télécharger depuis App Store",
      "company_title": "À propos de l'entreprise",
      "company_text": "Votre entreprise a été créée le [date de création], avec pour objectif de fournir divers services de divertissement au public arabe et mondial.",
      "services_title": "Services supplémentaires ",
      "service1": "Publication d'articles critiques sur les œuvres artistiques",
      "service2": "Fournir des recommandations personnalisées aux utilisateurs",
      "service3": "Suivre les dernières nouvelles dans le monde du divertissement",
      "subscribe_title": "Restez informé",
      "subscribe_text": "Pour recevoir les dernières nouvelles et offres, veuillez entrer votre adresse e-mail ci-dessous :",
      "subscribe_button": "S'abonner",
      "footer_text": "  2024 Votre App. Tous droits réservés."
  },
  "en": {
      "title": "Your App - Entertainment Platform",
      "intro_title": "Introduction to the App",
      "intro_text": "Your App is an entertainment platform that publishes all new or upcoming works with information, teasers, or hints about any type of work: video games, anime, manga, series, foreign or local films, along with all forms of art or exhibitions held in the Arab world in particular or in the world in general.",
      "install_title": "How to Install",
      "install_text": "You can download the app from Google Play or App Store via the following links:",
      "download_google": "Download from Google Play",
      "download_apple": "Download from App Store",
      "company_title": "About the Company",
      "company_text": "Your company was established on [establishment date], with the goal of providing various entertainment services to the Arab and global audience.",
      "services_title": "Additional Services",
      "service1": "Publishing critical articles about artistic works",
      "service2": "Providing personalized recommendations to users",
      "service3": "Following the latest news in the entertainment world",
      "subscribe_title": "Stay Updated",
      "subscribe_text": "To receive the latest news and offers, please enter your email address below:",
      "subscribe_button": "Subscribe",
      "footer_text": " 2024 Your App All rights reserved"
  }

};

document.addEventListener("DOMContentLoaded", function() {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("fr")) {
        setLanguage("fr");
    } else if (userLang.startsWith("en")) {
        setLanguage("en");
    } else {
        setLanguage("ar");
    }
});



// تهيئة Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC9w5vjNMBo9mG1ke0lEadzgGVkB7Ex8-U",
    authDomain: "command-93e18.firebaseapp.com",
    projectId: "command-93e18",
    storageBucket: "command-93e18.appspot.com",
    messagingSenderId: "1002951082955",
    appId: "1:1002951082955:web:56fa975330a791c43a2c4e"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
    // استرجاع أحدث 3 تعليقات
    db.collection('comments')
        .orderBy('timestamp', 'desc')
        .limit(3)
        .onSnapshot((snapshot) => {
            const commentsContainer = document.querySelector('.comments .comment-list');
            commentsContainer.innerHTML = ''; // تفريغ التعليقات القديمة
            snapshot.forEach((doc) => {
                const comment = doc.data();
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.innerHTML = `<p><strong>${comment.name}:</strong> ${comment.text}</p>`;
                commentsContainer.appendChild(commentElement);
            });
        });

    // إرسال تعليق جديد
    document.querySelector('.comments form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = this.querySelector('input[name="name"]').value;
        const commentText = this.querySelector('textarea').value;
        if (name.trim() !== "" && commentText.trim() !== "") {
            await db.collection('comments').add({
                name: name,
                text: commentText,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            this.querySelector('input[name="name"]').value = '';
            this.querySelector('textarea').value = '';
        }
    });

    // إرسال البريد الإلكتروني للاشتراك
    document.querySelector('.subscribe-form form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email.trim() !== "") {
            await db.collection('subscriptions').add({ email });
            alert('تم الاشتراك بنجاح!');
            this.querySelector('input[type="email"]').value = '';
        }
    });
});