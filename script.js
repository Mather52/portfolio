/* =====================================================================
   هذا الملف فيه كل محتوى الموقع. عدّل النصوص والروابط من هنا فقط،
   وباقي الملفات (HTML و CSS) ما تحتاج تلمسها.
   ===================================================================== */

/* ---------- 1) الروابط ---------- */
// تظهر كأزرار في قسم التواصل بأسماء المنصات فقط، بدون كتابة الروابط على الشاشة
const LINKS = {
  email: "mailto:mather.allahyani@gmail.com",
  linkedin: "https://www.linkedin.com/in/mather-al-lihyani-96a0aa30a",
  github: "https://github.com/Mather52",
  x: "https://x.com/i9iws"
};

// رابط موقع مشروع التخرج. إذا تركته فاضي ما يظهر الزر
const PROJECT_SITE = "https://www.athlight.net";
// رابط كود المشروع على GitHub. إذا تركته فاضي ما يظهر الزر
const PROJECT_CODE = "";
// ملف السيرة الذاتية PDF: حطيه في مجلد assets واكتبي مساره مثل "assets/cv.pdf"
// إذا تركتيه فاضي ما يظهر زر التحميل
const CV_FILE = "";

/* ---------- 2) النصوص باللغتين ---------- */
// en = الإنجليزي، ar = العربي. المفاتيح (مثل name و role) نفسها في اللغتين
const TEXTS = {
  en: {
    pageTitle: "Mather Al-lihyani | Software Engineering Student",   // عنوان التبويب
    nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_journey: "Journey", nav_contact: "Contact",
    roles: ["Software Engineering Student", "Web Application Developer", "Interested in AI and UI/UX"],   // تُكتب بالتناوب       // المسمى فوق الاسم
    name: "Mather Shaher Al-lihyani",                                  // الاسم الكبير
    tagline: "I turn operational challenges into practical digital solutions.",
    skip: "Skip to content", splash_hi: "Welcome", badge: "Welcome to my portfolio", btn_cv: "Download CV", cta_work: "View my work", cta_contact: "Get in touch",           // زرّا القسم الأول
    h_about: "About me",
    about: "Software Engineering student with a strong foundation in systems analysis and software design, focused on full-stack development. I have led team projects with a focus on quality and modern methodologies. Interested in UI/UX, QA, project management, and AI. Aligned with Saudi Vision 2030.",
    h_skills: "Skills", h_tech: "Technical skills", h_soft: "Personal skills",
    technicalSkills: ["Java", "JavaScript", "HTML", "Web Application Development", "Full-Stack Development", "Artificial Intelligence", "Computer Vision", "Systems Analysis and Design", "SDLC", "Agile Methodologies", "UI/UX", "QA"],
    personalSkills: ["Leadership", "Teamwork", "Problem solving", "Communication", "Event organization", "Content creation"],
    h_projects: "Projects",
    project: {
      title: "AthLight: AI-Powered Sports Talent Discovery and Performance Evaluation Platform",
      period: "Graduation project, 2025 - 2026",
      description: "A sports networking platform that connects athletes, coaches, and scouts. Athletes upload training or match videos, which are analyzed with AI and computer vision to extract performance metrics such as speed, agility, and distance. Results appear on interactive dashboards with automated monthly reports.",
      tags: ["AI", "Computer Vision", "Web Platform", "Dashboards"]
    },
    btn_site: "Visit project site", btn_code: "Source code",
    h_journey: "Journey",
    journey: [   // when = التاريخ، title = المسمى، org = الجهة، desc = وصف قصير
      { when: "2025 - Present", title: "Committee Member", org: "Computer Club, Umm Al-Qura University", desc: "Served on the Media Committee, then the Organizing Committee. Currently on the Competitions and Sports Activities Committee." },
      { when: "28/06/2026 - 12/11/2026", title: "Cooperative Training", org: "King Abdullah Medical City",
        desc: "Full-stack development on two platforms:",
        points: [
          { name: "Legal Affairs and Compliance Management Platform", text: "Work was spread across paper, email and separate files, with no unified tracking of each case. We built one platform that brings administrative investigations, compliance, contracts, consultations and cases together, with clear workflows, precise permissions for each user, and an audit log for sensitive actions." },
          { name: "Irtiqa Internal Audit Platform", text: "Audit tasks moved between email and Excel files with no record linking their stages. We built a platform that manages a task from planning and document requests to the risk matrix, meetings and observations, through to final report approval." }
        ] },
      { when: "", title: "Software Engineering", org: "Umm Al-Qura University", desc: "" }
    ],
    h_certs: "Certifications",
    certificates: [
      { when: "2026", title: "EYOUTH Learning Plan", org: "IBM SkillsBuild", desc: "" },
      { when: "Sep 2025", title: "Fundamentals of Artificial Intelligence", org: "SDAIA", desc: "" },
      { when: "Sep 2025", title: "Artificial Intelligence Concepts and Advanced Applications", org: "SDAIA", desc: "" }
    ],
    h_contact: "Contact",
    footer: "© 2026 Mather Al-lihyani"
  },

  ar: {
    pageTitle: "مآثر اللحياني | طالب هندسة برمجيات",
    nav_about: "نبذة", nav_skills: "المهارات", nav_projects: "المشاريع", nav_journey: "المسيرة", nav_contact: "تواصل",
    roles: ["طالب هندسة برمجيات", "مطوّر تطبيقات ويب", "مهتم بالذكاء الاصطناعي وUI/UX"],
    name: "مآثر شاهر اللحياني",
    tagline: "أحوّل التحديات التشغيلية إلى حلول رقمية عملية.",
    skip: "تخطَّ إلى المحتوى", splash_hi: "أهلاً وسهلاً", badge: "أهلاً بك في موقعي", btn_cv: "تحميل السيرة الذاتية", cta_work: "شاهد أعمالي", cta_contact: "تواصل معي",
    h_about: "نبذة عني",
    about: "طالب هندسة برمجيات لديه أساس قوي في تحليل النظم وتصميم البرمجيات، مع تركيز على التطوير المتكامل (Full-Stack). قدت مشاريع جماعية بتركيز على الجودة والمنهجيات الحديثة. مهتم بتجربة المستخدم UI/UX وضمان الجودة QA وإدارة المشاريع والذكاء الاصطناعي، ومتوافق مع رؤية السعودية 2030.",
    h_skills: "المهارات", h_tech: "المهارات المهنية", h_soft: "المهارات الشخصية",
    technicalSkills: ["Java", "JavaScript", "HTML", "تطوير تطبيقات الويب", "التطوير المتكامل Full-Stack", "الذكاء الاصطناعي", "رؤية الحاسب", "تحليل وتصميم النظم", "دورة حياة تطوير البرمجيات SDLC", "المنهجيات الرشيقة Agile", "UI/UX", "ضمان الجودة QA"],
    personalSkills: ["القيادة", "العمل الجماعي", "حل المشكلات", "التواصل", "تنظيم الفعاليات", "صناعة المحتوى"],
    h_projects: "المشاريع",
    project: {
      title: "AthLight: منصة مدعومة بالذكاء الاصطناعي لاكتشاف المواهب الرياضية وتقييم الأداء",
      period: "مشروع التخرج، 2025 - 2026",
      description: "منصة تواصل رياضية تربط اللاعبين والمدربين والكشّافين. يرفع اللاعب فيديوهات تدريب أو مباريات، وتُحلَّل بالذكاء الاصطناعي ورؤية الحاسب لاستخراج مؤشرات الأداء مثل السرعة والرشاقة والمسافة. تظهر النتائج في لوحات تفاعلية مع تقارير شهرية تلقائية.",
      tags: ["الذكاء الاصطناعي", "رؤية الحاسب", "منصة ويب", "لوحات تفاعلية"]
    },
    btn_site: "زيارة موقع المشروع", btn_code: "الكود المصدري",
    h_journey: "المسيرة",
    journey: [
      { when: "2025 - الآن", title: "عضو لجنة", org: "نادي الحاسب، جامعة أم القرى", desc: "ساهمت في اللجنة الإعلامية ثم اللجنة التنظيمية، وحالياً في لجنة المسابقات والأنشطة الرياضية." },
      { when: "28/06/2026 - 12/11/2026", title: "التدريب التعاوني", org: "مدينة الملك عبدالله الطبية",
        desc: "تطوير متكامل (Full-Stack) لمنصتين:",
        points: [
          { name: "منصة إدارة الشؤون القانونية والالتزام", text: "كانت أعمال الإدارة موزعة بين الورق والبريد الإلكتروني وملفات منفصلة، دون تتبع موحد للمعاملة. بنينا منصة تجمع التحقيق الإداري والالتزام والعقود والاستشارات والقضايا في مكان واحد، بمسارات واضحة، وصلاحيات دقيقة لكل مستخدم، وسجل تدقيق للإجراءات الحساسة." },
          { name: "منصة ارتقاء للمراجعة الداخلية", text: "كانت مهام المراجعة تنتقل بين البريد وملفات Excel دون سجل يربط مراحلها. بنينا منصة تدير المهمة من التخطيط وطلب المستندات إلى مصفوفة المخاطر والاجتماعات والملاحظات، وصولاً إلى اعتماد التقرير النهائي." }
        ] },
      { when: "", title: "هندسة البرمجيات", org: "جامعة أم القرى", desc: "" }
    ],
    h_certs: "الشهادات",
    certificates: [
      { when: "2026", title: "EYOUTH Learning Plan", org: "IBM SkillsBuild", desc: "" },
      { when: "سبتمبر 2025", title: "أساسيات الذكاء الاصطناعي", org: "سدايا SDAIA", desc: "" },
      { when: "سبتمبر 2025", title: "مفاهيم الذكاء الاصطناعي وتطبيقاته المتقدمة", org: "سدايا SDAIA", desc: "" }
    ],
    h_contact: "تواصل",
    footer: "© 2026 مآثر اللحياني"
  }
};

/* ---------- 3) دوال مساعدة ---------- */
// اختصار: يجيب عنصراً من الصفحة بمعرّفه، مثل find("#tech")
const find = selector => document.querySelector(selector);

// يحفظ اختيار الزائر (اللغة أو الوضع) في المتصفح، عشان يرجع له نفس الاختيار
function saveChoice(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* إذا المتصفح منع الحفظ، نتجاهل */ }
}
function loadChoice(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

// يحوّل قائمة كلمات إلى أزرار صغيرة (المهارات والتقنيات)
function makeChips(words) {
  return words.map(word => `<li>${word}</li>`).join("");
}

// يحوّل قائمة عناصر (مسيرة أو شهادات) إلى خط زمني
// الحقل الفاضي (مثل when أو desc) ما يظهر
function makeTimeline(items) {
  return items.map(item => `
    <div class="item">
      ${item.when ? `<div class="when">${item.when}</div>` : ""}
      <strong>${item.title}</strong>
      <span class="org">${item.org}</span>
      ${item.desc ? `<p>${item.desc}</p>` : ""}
      ${item.points ? `<ul class="points">${item.points.map(point => `<li><b>${point.name}</b>${point.text}</li>`).join("")}</ul>` : ""}
    </div>`).join("");
}

/* ---------- 4) عرض الصفحة بلغة معيّنة ---------- */
// تُستدعى أول ما تفتح الصفحة، وكل ما تضغط زر تبديل اللغة
function showPage(lang) {
  const text = TEXTS[lang];
  const page = document.documentElement;

  // اللغة والاتجاه: العربي من اليمين لليسار، والإنجليزي بالعكس
  page.lang = lang;
  page.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = text.pageTitle;

  // كل عنصر في HTML عليه data-i18n="name" يأخذ النص المناسب من TEXTS
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = text[element.dataset.i18n];
  });

  // المهارات
  find("#tech").innerHTML = makeChips(text.technicalSkills);
  find("#soft").innerHTML = makeChips(text.personalSkills);

  // بطاقة المشروع (زر الموقع وزر الكود يظهرون فقط إذا فيه رابط)
  const project = text.project;
  find("#project").innerHTML = `
    <h3>${project.title}</h3>
    <p class="meta">${project.period}</p>
    <p>${project.description}</p>
    <ul class="chips">${makeChips(project.tags)}</ul>
    <div class="actions">
      ${PROJECT_SITE ? `<a class="btn primary" href="${PROJECT_SITE}" target="_blank" rel="noopener">${text.btn_site}</a>` : ""}
      ${PROJECT_CODE ? `<a class="btn" href="${PROJECT_CODE}" target="_blank" rel="noopener">${text.btn_code}</a>` : ""}
    </div>`;

  // المسيرة والشهادات
  find("#journeyList").innerHTML = makeTimeline(text.journey);
  find("#certList").innerHTML = makeTimeline(text.certificates);

  // أزرار التواصل: يظهر اسم المنصة فقط، والرابط مخفي خلف الزر
  const contactButtons = [
    ["Email", LINKS.email],
    ["LinkedIn", LINKS.linkedin],
    ["GitHub", LINKS.github],
    ["X", LINKS.x]
  ];
  find("#contactList").innerHTML = contactButtons
    .map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`)
    .join("");

  // زر اللغة يعرض اللغة اللي بتنتقل لها
  find("#lang").textContent = lang === "ar" ? "EN" : "عربي";
  startTyping(text.roles);   // المسمى فوق الاسم يُكتب حرف حرف
  saveChoice("lang", lang);
  setupReveal();   // نجهّز العناصر الجديدة للظهور عند التمرير
}

/* ---------- 5) الوضع الليلي والفاتح ---------- */
// الألوان نفسها في style.css، هنا بس نغيّر القيمة data-theme على الصفحة
function setTheme(mode) {
  document.documentElement.dataset.theme = mode;
  find("#theme").textContent = mode === "dark" ? "☀" : "☾";
  saveChoice("theme", mode);
}

/* ---------- 6) ظهور العناصر تدريجياً عند التمرير ---------- */
// كل عنصر (عنوان، مهارة، بطاقة، عنصر في المسيرة...) يطلع من تحت بالتتابع لما توصله بالتمرير
// إذا الزائر مفعّل "تقليل الحركة" في جهازه، نعرض كل شي مباشرة بدون حركة
const canAnimate = "IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealWatcher = canAnimate ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {                 // لما العنصر يدخل الشاشة
      entry.target.classList.add("shown");      // نظهره
      revealWatcher.unobserve(entry.target);    // ونوقف مراقبته
    }
  });
}, { threshold: 0.15 }) : null;

function setupReveal() {
  if (!canAnimate) return;
  document.documentElement.classList.add("js-reveal");
  const positionInGroup = new Map();            // ترتيب كل عنصر داخل مجموعته عشان التتابع
  document.querySelectorAll(".sec h2, .about, .card, .sub, .item, .chips li, .contact a").forEach(element => {
    if (element.classList.contains("rv")) return;   // مجهّز من قبل
    const count = positionInGroup.get(element.parentElement) || 0;
    positionInGroup.set(element.parentElement, count + 1);
    element.style.setProperty("--d", Math.min(count, 8) * 70 + "ms");   // تأخير بسيط لكل عنصر
    element.classList.add("rv");
    revealWatcher.observe(element);
  });
}

/* ---------- 6.5) الكتابة المتحركة للمسمى ---------- */
// يكتب العبارة حرف حرف، يوقف شوي، يمسحها، ثم ينتقل للعبارة التالية وهكذا
// إذا الزائر مفعّل "تقليل الحركة"، نعرض أول عبارة ثابتة
let typingTimer;
function startTyping(phrases) {
  clearTimeout(typingTimer);                    // نوقف أي كتابة سابقة (مثلاً عند تبديل اللغة)
  const target = find("#typed");
  if (!canAnimate) { target.textContent = phrases[0]; return; }

  let phraseIndex = 0, charIndex = 0, deleting = false;
  function tick() {
    const phrase = phrases[phraseIndex];
    charIndex += deleting ? -1 : 1;             // حرف للأمام عند الكتابة، وللخلف عند المسح
    target.textContent = phrase.slice(0, charIndex);

    let delay = deleting ? 35 : 80;             // سرعة المسح والكتابة
    if (!deleting && charIndex === phrase.length) { deleting = true; delay = 1600; }          // اكتملت: نوقف شوي
    else if (deleting && charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; delay = 400; }  // انمسحت: العبارة التالية
    typingTimer = setTimeout(tick, delay);
  }
  // نبدأ بعد شاشة الترحيب
  const splashDone = document.documentElement.classList.contains("no-splash");
  typingTimer = setTimeout(tick, splashDone ? 300 : 2900);
}

/* ---------- 7) تشغيل الموقع ---------- */
// ضغط زر اللغة: بدّل بين العربي والإنجليزي
find("#lang").addEventListener("click", () => {
  showPage(document.documentElement.lang === "ar" ? "en" : "ar");
});

// ضغط زر الثيم: بدّل بين الداكن والفاتح
find("#theme").addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

// أول فتح: الموقع يبدأ دائماً بالوضع الفاتح، والزائر يقدر يبدّل للداكن بالزر
setTheme("light");
showPage(loadChoice("lang") || "ar");


/* ---------- 8) شاشة الترحيب، زر السيرة الذاتية، إضاءة المؤشر ---------- */
// شاشة الترحيب: تختفي لحالها بعد ثلاث ثواني تقريباً، أو إذا ضغط الزائر عليها
const splash = find("#splash");
function closeSplash() {
  document.documentElement.classList.add("no-splash");
  try { sessionStorage.setItem("seen", "1"); } catch (e) { /* نتجاهل */ }   // ما نعيدها في نفس الجلسة
}
if (splash) {
  splash.addEventListener("click", closeSplash);
  setTimeout(closeSplash, 3600);
}

// زر السيرة الذاتية: يظهر فقط إذا حطيتي مسار الملف في CV_FILE
if (CV_FILE) {
  const cvButton = find("#cvBtn");
  cvButton.href = CV_FILE;
  cvButton.hidden = false;
}

// إضاءة ناعمة تتبع الماوس (بس على الكمبيوتر، وإذا ما فيه "تقليل الحركة")
if (canAnimate && matchMedia("(hover: hover) and (pointer: fine)").matches) {
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);
  addEventListener("pointermove", event => {
    glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    glow.classList.add("on");
  });
}

/* ---------- 9) إزالة الخلفية البيضاء من الصورة تلقائياً ---------- */
// نرسم الصورة على لوحة (canvas) ونمسح اللون الأبيض المتصل بحواف الصورة فقط،
// فيبقى بياض العيون وأي بياض داخل الصورة. النتيجة صورة شفافة تناسب الوضع الداكن والفاتح
function removeWhiteBackground(img) {
  const scale = Math.min(1, 900 / img.naturalWidth);            // نصغّرها لسرعة المعالجة
  const w = Math.round(img.naturalWidth * scale);
  const h = Math.round(img.naturalHeight * scale);
  const canvas = document.createElement("canvas");
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, w, h);

  let imageData;
  try { imageData = ctx.getImageData(0, 0, w, h); }
  catch (e) { return; }        // إذا فتحتي الملف مباشرة (file://) المتصفح يمنع، ونبقي الصورة كما هي

  const px = imageData.data;
  const isWhite = p => px[p * 4] > 232 && px[p * 4 + 1] > 232 && px[p * 4 + 2] > 232;
  const background = new Uint8Array(w * h);
  const stack = [];
  const visit = (x, y) => {
    const p = y * w + x;
    if (!background[p] && isWhite(p)) { background[p] = 1; stack.push(p); }
  };
  // نبدأ من حواف الصورة ونمتد داخلها طالما اللون أبيض
  for (let x = 0; x < w; x++) { visit(x, 0); visit(x, h - 1); }
  for (let y = 0; y < h; y++) { visit(0, y); visit(w - 1, y); }
  while (stack.length) {
    const p = stack.pop(), x = p % w, y = (p / w) | 0;
    if (x > 0) visit(x - 1, y);
    if (x < w - 1) visit(x + 1, y);
    if (y > 0) visit(x, y - 1);
    if (y < h - 1) visit(x, y + 1);
  }

  // نشفّف الخلفية، ونخفف حافة الجسم قليلاً عشان ما يبان إطار أبيض
  for (let p = 0; p < w * h; p++) {
    if (background[p]) { px[p * 4 + 3] = 0; continue; }
    const x = p % w, y = (p / w) | 0;
    const nearBackground = (x > 0 && background[p - 1]) || (x < w - 1 && background[p + 1]) ||
                           (y > 0 && background[p - w]) || (y < h - 1 && background[p + w]);
    if (nearBackground) {
      const brightness = (px[p * 4] + px[p * 4 + 1] + px[p * 4 + 2]) / 3;
      px[p * 4 + 3] = Math.max(0, Math.min(255, (255 - brightness) * 3));
    }
  }
  ctx.putImageData(imageData, 0, 0);
  canvas.toBlob(blob => {
    if (!blob) return;
    img.src = URL.createObjectURL(blob);                 // نستبدل الصورة بالنسخة الشفافة
    img.parentElement.classList.add("cutout");
  }, "image/png");
}

const profilePhoto = find(".avatar img");
if (profilePhoto) {
  const start = () => { if (profilePhoto.naturalWidth) removeWhiteBackground(profilePhoto); };
  if (profilePhoto.complete) start();
  else profilePhoto.addEventListener("load", start, { once: true });
}
