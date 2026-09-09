"use client";

import { useState } from "react";
import Link from "next/link";

const cvHref = "/my-cv.pdf";

export default function ResumePage() {
  const [language, setLanguage] = useState("en");
  const ar = language === "ar";

  const t = {
    portfolio: ar ? "الملف الشخصي" : "Portfolio",
    resume: ar ? "السيرة الذاتية" : "Resume",
    download: ar ? "تحميل السيرة الذاتية" : "Download CV",
    available: ar
      ? "متاح لفرص العمل بدوام كامل"
      : "Open to Full-Time Opportunities",
    name: ar ? "عدنان دويري " : "Adnan Dwere",
    role: ar ? "مطور واجهات أمامية" : "Frontend Developer",
    summaryTitle: ar ? "نبذة مهنية" : "Professional Summary",
    summary: ar
      ? "مطور واجهات أمامية أركز على بناء تطبيقات ويب حديثة ومتجاوبة باستخدام React وNext.js. أعمل على بناء مكونات قابلة لإعادة الاستخدام وتحسين تجربة المستخدم، مع تطوير معرفتي بالـBackend بشكل مستمر."
      : "Frontend Developer focused on building modern, responsive web applications with React and Next.js. I build reusable components, care about user experience, and continuously expand my backend knowledge.",
    projectsTitle: ar ? "أهم المشاريع" : "Selected Projects",
    skillsTitle: ar ? "المهارات التقنية" : "Technical Skills",
    educationTitle: ar ? "التعليم" : "Education",
    languagesTitle: ar ? "اللغات" : "Languages",
    frontend: ar ? "Frontend" : "Frontend",
    backend: ar ? "أساسيات Backend" : "Backend Fundamentals",
    tools: ar ? "أدوات التطوير" : "Development Tools",
    project1: ar
      ? "منصة Portfolio تفاعلية مع مساعد AI"
      : "Interactive Portfolio Platform with an AI Assistant",
    project1Desc: ar
      ? "Portfolio تفاعلي مبني باستخدام Next.js وGemini API مع محادثات متعددة وسجل محادثات محفوظ ومعالجة آمنة لطلبات الـAPI."
      : "An interactive portfolio built with Next.js and Gemini API, featuring multiple conversations, persistent chat history, and secure API request handling.",
    project2: "AdnanBucks",
    project2Desc: ar
      ? "تجربة ويب حديثة لمقهى تتيح استعراض القائمة والمنتجات وإدارة السلة والوصول إلى قائمة QR."
      : "A modern coffee shop web experience for browsing menus, viewing products, managing a cart, and accessing a QR menu.",
    project3: ar ? "متجر إلكتروني" : "E-Commerce Store",
    project3Desc: ar
      ? "متجر متجاوب يجلب بيانات المنتجات ديناميكيًا من API مع تفاصيل المنتجات وإدارة سلة المشتريات."
      : "A responsive e-commerce store that fetches product data dynamically through an API, with product details and cart management.",
    education: ar
      ? "معهد نيو هرايزن — دراسات برمجية"
      : "New Horizons Institute — Programming Studies",
    selfLearning: ar
      ? "تعلم ذاتي مستمر من خلال التوثيق الرسمي والمشاريع العملية."
      : "Self-directed learning through official documentation and hands-on projects.",
    arabic: ar ? "العربية" : "Arabic",
    english: ar ? "الإنجليزية" : "English",
    native: ar ? "اللغة الأم" : "Native",
    intermediate: ar ? "متوسط" : "Intermediate",
    contact: ar ? "لنتحدث" : "Let’s Talk",
    contactDesc: ar
      ? "متاح لفرص العمل والمشاريع المناسبة. يمكنك التواصل معي عبر البريد الإلكتروني."
      : "Open to suitable opportunities and projects. You can reach me by email.",
    email: ar ? "التواصل عبر البريد" : "Email Me",
  };

  const direction = ar ? "rtl" : "ltr";

  return (
    <div dir={direction} className="min-h-screen bg-background text-on-surface">
      <header className="bg-surface/3 backdrop-blur-xl sticky top-0 w-full border-b border-white/8 shadow-sm z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 h-20 gap-4">
          <Link
            href="/"
            className="font-headline-sm text-headline-sm font-bold text-on-surface"
          >
            Adnan.dev
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              className="text-on-surface-variant/80 hover:text-on-surface transition-colors font-label-md"
              href="/"
            >
              {t.portfolio}
            </Link>
            <span className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md">
              {t.resume}
            </span>
          </nav>
          <div className="flex gap-2 sm:gap-4 items-center">
            <button
              type="button"
              onClick={() => setLanguage(ar ? "en" : "ar")}
              className="btn-secondary px-3 sm:px-4 py-2 rounded-lg font-label-md hover:bg-white/5 transition-all"
              aria-label="Toggle resume language"
            >
              {ar ? "EN" : "AR"}
            </button>
            <a
              href={cvHref}
              download
              className="btn-primary px-3 sm:px-4 py-2 rounded-lg font-label-md hover:bg-white/5 transition-all"
            >
              {t.download}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-16 md:pt-32 md:pb-20 border-b border-white/5">
          <div className="flex flex-col items-start max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-label-md mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.available}
            </div>
            <h1 className="font-display text-[48px] md:text-[64px] lg:text-[72px] text-on-surface mb-6 leading-tight">
              {t.name}
            </h1>
            <h2 className="font-headline-lg text-headline-lg text-on-surface-variant mb-8 md:mb-10">
              {t.role}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant/80 max-w-3xl mb-10 md:mb-12 leading-relaxed">
              {t.summary}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <a
                href={cvHref}
                download
                className="btn-primary  bg-linear-to-r  from-primary to-secondary px-6 py-3 rounded-lg font-label-md text-gray-500 flex items-center justify-center gap-2 hover:shadow-lgtransition-all"
              >
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                {t.download}
              </a>
              <button
                type="button"
                onClick={() => setLanguage(ar ? "en" : "ar")}
                className="btn-secondary px-6 py-3 rounded-lg font-label-md hover:bg-white/5 transition-all"
              >
                {ar ? "English" : "العربية"}
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2 flex flex-col gap-14 md:gap-16">
              <section>
                <div className="flex items-center gap-3 mb-10">
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    code
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {t.projectsTitle}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
                  {[
                    [
                      t.project1,
                      t.project1Desc,
                      "Next.js · React · Gemini API",
                    ],
                    [
                      t.project2,
                      t.project2Desc,
                      "Next.js · React · Tailwind CSS",
                    ],
                    [t.project3, t.project3Desc, "React · API · JavaScript"],
                  ].map(([title, desc, stack]) => (
                    <div
                      key={title}
                      className="glass-card p-6 md:p-8 flex flex-col h-full border-primary/80 rounded-3xl border-2 hover:border-primary/40 hover:shadow-lg transition-all"
                    >
                      <h4 className="font-headline-sm text-[18px] md:text-[20px] text-on-surface font-semibold mb-4">
                        {title}
                      </h4>
                      <p className="text-on-surface-variant/80 mb-6 grow leading-relaxed text-[14px] md:text-[15px]">
                        {desc}
                      </p>
                      <div className="pt-4 border-t border-white/5 text-xs text-primary">
                        {stack}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="h-px bg-linear-to-r from-white/0 via-white/10 to-white/0" />

              <section>
                <div className="flex items-center gap-3 mb-10">
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    school
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {t.educationTitle}
                  </h3>
                </div>
                <div className="glass-card p-6 md:p-8">
                  <h4 className="font-headline-sm text-[18px] text-on-surface font-semibold">
                    {t.education}
                  </h4>
                  <p className="text-on-surface-variant mt-3 leading-relaxed">
                    {t.selfLearning}
                  </p>
                </div>
              </section>
            </div>

            <aside className="flex flex-col gap-8">
              <section className="glass-card p-6 md:p-8  lg:top-32">
                <h3 className="font-headline-sm text-[18px] text-on-surface mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    terminal
                  </span>
                  {t.skillsTitle}
                </h3>
                <div className="space-y-7">
                  <div>
                    <div className="font-label-md text-[11px] text-on-surface-variant/60 mb-4 uppercase tracking-wider">
                      {t.frontend}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "React",
                        "Next.js",
                        "Tailwind CSS",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="chip px-3 py-1.5 text-xs text-on-surface bg-white/5 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-label-md text-[11px] text-on-surface-variant/60 mb-4 uppercase tracking-wider">
                      {t.backend}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js API Routes", "PHP", "MySQL", "REST APIs"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="chip px-3 py-1.5 text-xs text-on-surface bg-primary/10 border border-primary/20 rounded-md"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-label-md text-[11px] text-on-surface-variant/60 mb-4 uppercase tracking-wider">
                      AI
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Gemini API", "API Integration"].map((skill) => (
                        <span
                          key={skill}
                          className="chip px-3 py-1.5 text-xs text-on-surface bg-white/5 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-label-md text-[11px] text-on-surface-variant/60 mb-4 uppercase tracking-wider">
                      {t.tools}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "VS Code", "Postman"].map((skill) => (
                        <span
                          key={skill}
                          className="chip px-3 py-1.5 text-xs text-on-surface bg-white/5 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="glass-card p-6 md:p-8">
                <h3 className="font-headline-sm text-[18px] text-on-surface mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    translate
                  </span>
                  {t.languagesTitle}
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span>{t.arabic}</span>
                    <span className="text-primary text-xs font-semibold">
                      {t.native}
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>{t.english}</span>
                    <span className="text-primary text-xs font-semibold">
                      {t.intermediate}
                    </span>
                  </li>
                </ul>
              </section>
            </aside>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 lg:py-24 border-t border-white/5">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 md:mb-8">
              {t.contact}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant/80 mb-10 leading-relaxed">
              {t.contactDesc}
            </p>
            <a
              href="mailto:adnandwere1@gmail.com"
              className="btn-primary px-8 py-4 rounded-lg font-label-md text-lg hover:shadow-lg transition-all"
            >
              {t.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-background w-full py-10 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 md:px-8 gap-4">
          <div className="font-headline-sm text-headline-sm text-on-surface">
            Adnan.dev
          </div>
          <div className="text-on-surface-variant text-sm">
            © 2026 Adnan Dwere
          </div>
          <Link
            className="font-label-md text-on-surface-variant hover:text-primary transition-colors"
            href="/"
          >
            {t.portfolio}
          </Link>
        </div>
      </footer>
    </div>
  );
}
