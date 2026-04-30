import Link from "next/link";

const goals = [
  {
    icon: "🖼️",
    title: "تعلم بصري",
    text: "يعتمد الموقع على الصور الواضحة لتسهيل فهم المواقف الخطرة.",
  },
  {
    icon: "🧠",
    title: "فهم مبسط",
    text: "يقدم المعلومات بخطوات قصيرة وواضحة تناسب الطالب.",
  },
  {
    icon: "✅",
    title: "اختيار السلوك الصحيح",
    text: "يتدرب الطالب على التمييز بين التصرف الآمن والتصرف الخطر.",
  },
  {
    icon: "🛡️",
    title: "تعزيز السلامة",
    text: "يساعد الطالب على حماية نفسه داخل المنزل وخارجه.",
  },
];

const preparedBy = [
  "أسماء محمد سيد",
  "رنا محمد الأمير",
  "إسراء رجب رجب",
  "إسراء عماد الدين جاد",
];

export default function AboutPage() {
  return (
    <section className="py-10">
      <div className="page-container">
        {/* Hero */}
        <div className="glass-strong relative overflow-hidden rounded-[3rem] p-6 md:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl"></div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:[direction:ltr]">
            {/* الصورة على الشمال */}
            <div className="lg:[direction:rtl]">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white/45 p-5 shadow-xl dark:bg-white/10">
                <div className="absolute right-6 top-6 z-10 rounded-full bg-white/80 px-4 py-2 text-sm font-black shadow-md dark:bg-white/15">
                  🛡️ السلامة أولًا
                </div>

                <img
                  src="/images/about.png"
                  alt="فرق العمل"
                  className="mx-auto h-80 w-full object-contain"
                />

                <div className="mt-5 rounded-3xl bg-white/70 p-4 text-center shadow-sm dark:bg-white/10">
                  <p className="text-lg font-black leading-8">
                 فريق العمل
                  </p>
                </div>
              </div>
            </div>

            {/* النص على اليمين */}
            <div className="lg:[direction:rtl]">
              <div className="badge">ℹ️ عن الموقع</div>

              <h1 className="section-title mt-5">
                موقع تعليمي للتوعية بالمخاطر والسلامة
              </h1>

              <p className="mt-6 text-xl font-bold leading-10 text-muted">
                صُمم هذا الموقع لذوي الإعاقة العقلية البسيطة، بهدف مساعدتهم على
                معرفة المخاطر اليومية داخل المنزل وخارجه بطريقة بسيطة، واضحة،
                وتفاعلية تعتمد على الصور والأنشطة.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/instructions" className="main-btn">
                  ابدأ من التعليمات
                  <span>📌</span>
                </Link>

                <Link href="/topics" className="soft-btn">
                  عرض الدروس
                  <span>📚</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Prepared By */}
        <div className="glass mt-10 rounded-[3rem] p-7">
          <div className="mb-6 text-center">
            <div className="badge mx-auto">👩‍🏫 فريق الإعداد</div>
            <h2 className="section-title mt-4">إعداد الطالبات</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {preparedBy.map((name) => (
              <div
                key={name}
                className="card-hover rounded-3xl bg-white/60 p-5 text-center shadow-sm dark:bg-white/5"
              >
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-blue-600 to-violet-600 text-2xl text-white shadow-lg">
                  👩‍🎓
                </div>

                <h3 className="text-xl font-black leading-8">{name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="glass card-hover relative overflow-hidden rounded-[2.5rem] p-6 text-center"
            >
              <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl"></div>

              <div className="relative mx-auto mb-5 grid h-20 w-20 place-items-center rounded-3xl bg-linear-to-br from-blue-600 to-violet-600 text-4xl text-white shadow-lg">
                {goal.icon}
              </div>

              <h2 className="relative text-2xl font-black">{goal.title}</h2>

              <p className="relative mt-3 text-base font-bold leading-8 text-muted">
                {goal.text}
              </p>
            </div>
          ))}
        </div>

        {/* How To Use */}
        <div className="glass mt-10 rounded-[3rem] p-8">
          <div className="mb-7 text-center">
            <div className="badge mx-auto">🧭 تعليمات الموقع</div>
            <h2 className="section-title mt-4">كيف أستخدم الموقع؟</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["1️⃣", "أقرأ التعليمات بهدوء."],
              ["2️⃣", "أشاهد الصورة جيدًا."],
              ["3️⃣", "أفكر في التصرف الصحيح."],
              ["4️⃣", "أحل النشاط والاختبار."],
            ].map(([icon, text]) => (
              <div
                key={text}
                className="card-hover rounded-3xl bg-white/60 p-5 text-center shadow-sm dark:bg-white/5"
              >
                <div className="text-4xl">{icon}</div>
                <p className="mt-3 font-black leading-8">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}