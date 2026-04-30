import Link from "next/link";
import { instructions } from "../data/safetyData";

export default function InstructionsPage() {
  return (
    <section className="py-10">
      <div className="page-container">
        {/* Hero Section */}
        <div className="glass-strong relative overflow-hidden rounded-[3rem] p-6 md:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl"></div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:[direction:ltr]">
            {/* الصورة على الشمال */}
            <div className="lg:[direction:rtl]">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white/45 p-5 shadow-xl dark:bg-white/10">
                <div className="absolute right-6 top-6 z-10 rounded-full bg-white/80 px-4 py-2 text-sm font-black shadow-md dark:bg-white/15">
                  📌 تعليمات مهمة
                </div>

                <img
                  src="/images/instructions.png"
                  alt="تعليمات التعلم"
                  className="mx-auto h-80 w-full object-contain"
                />
              </div>
            </div>

            {/* النص على اليمين */}
            <div className="text-right lg:[direction:rtl]">
              <div className="badge">🛡️ قبل أن نبدأ</div>

              <h1 className="section-title mt-5">
                تعليمات التعلم
              </h1>

              <p className="mt-6 max-w-3xl text-xl font-bold leading-10 text-muted">
                اقرأ التعليمات بهدوء، وانظر إلى الصورة جيدًا، ثم اختر التصرف
                الصحيح الذي يساعدك على حماية نفسك من الخطر.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="glass rounded-3xl p-4 text-center">
                  <div className="text-3xl">👀</div>
                  <p className="mt-2 font-black">انظر جيدًا</p>
                </div>

                <div className="glass rounded-3xl p-4 text-center">
                  <div className="text-3xl">🧠</div>
                  <p className="mt-2 font-black">فكر بهدوء</p>
                </div>

                <div className="glass rounded-3xl p-4 text-center">
                  <div className="text-3xl">✅</div>
                  <p className="mt-2 font-black">اختر الصحيح</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instruction Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {instructions.map((item, index) => (
            <div
              key={item.title}
              className="card-hover glass group relative overflow-hidden rounded-[2.5rem] p-6"
            >
              <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl transition group-hover:bg-blue-400/20"></div>

              <div className="relative mb-5 flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-linear-to-br from-blue-600 to-violet-600 text-3xl text-white shadow-lg">
                  {item.icon}
                </div>

                <div>
                  <p className="mb-1 w-fit rounded-full bg-blue-50 px-4 py-1 text-sm font-black text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                    خطوة {index + 1}
                  </p>

                  <h2 className="text-2xl font-black">
                    {item.title}
                  </h2>
                </div>
              </div>

              <p className="relative text-lg font-bold leading-9 text-muted">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/topics" className="main-btn">
            ابدأ الدروس
            <span>📚</span>
          </Link>

          <Link href="/" className="soft-btn">
            الرجوع للرئيسية
            <span>🏠</span>
          </Link>
        </div>
      </div>
    </section>
  );
}