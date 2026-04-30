import Link from "next/link";
import { topics } from "../data/safetyData";

export default function TopicsPage() {
  return (
    <section className="py-10">
      <div className="page-container">
        {/* Hero Section */}
        <div className="glass-strong mb-10 overflow-hidden rounded-[3rem] p-6 md:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:[direction:ltr]">
            {/* الصورة على اليسار */}
            <div className="lg:[direction:rtl]">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white/50 p-5 shadow-xl dark:bg-white/10">
                <div className="absolute right-5 top-5 z-10 rounded-full bg-white/80 px-4 py-2 text-sm font-black shadow-md dark:bg-white/15">
                  📖 أتعلم بهدوء
                </div>

                <div className="grid min-h-80 place-items-center rounded-3xl bg-blue-500/5 p-5">
                  <img
                    src="/images/student-reading.png"
                    alt="طالب يقرأ محتوى"
                    className="max-h-72 w-full object-contain"
                  />
                </div>

                <div className="mt-5 rounded-3xl bg-white/70 p-4 text-center shadow-sm dark:bg-white/10">
                  <p className="text-lg font-black leading-8">
                    أختار الدرس المناسب ثم أتعلم خطوة بخطوة
                  </p>
                </div>
              </div>
            </div>

            {/* النص على اليمين */}
            <div className="text-center lg:text-right lg:[direction:rtl]">
              <div className="badge mx-auto lg:mx-0">📚 الدروس التعليمية</div>

              <h1 className="section-title mt-4">دروس السلامة</h1>

              <p className="mt-5 max-w-3xl text-lg font-bold leading-9 text-muted">
                اختاري الدرس المناسب، ثم شاهدي محتواه بطريقة بسيطة وواضحة تساعد
                على فهم السلوك الصحيح والآمن.
              </p>
            </div>
          </div>
        </div>

        {/* Topics Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="card-hover glass rounded-[2.5rem] p-6"
            >
              <div className="mb-5 grid h-20 w-20 place-items-center rounded-3xl bg-linear-to-br from-blue-600 to-violet-600 text-4xl text-white shadow-lg">
                {topic.icon}
              </div>

              <h2 className="text-3xl font-black">{topic.title}</h2>

              <p className="mt-3 text-base font-bold leading-8 text-muted">
                {topic.intro}
              </p>

              <div className="mt-5 rounded-2xl bg-blue-600/10 p-4 text-sm font-black text-blue-700 dark:text-blue-200">
                اضغط لفتح الدرس ⬅️
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}