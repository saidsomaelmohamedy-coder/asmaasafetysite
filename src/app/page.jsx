import Link from "next/link";
import { homeMedia, topics } from "./data/safetyData";

export default function HomePage() {
  return (
    <section className="py-10">
      <div className="page-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* النص على اليمين */}
          <div className="space-y-7 lg:order-1">
            <div className="badge">🛡️ تعلم السلامة بطريقة مبسطة</div>

            <div>
              <h1 className="hero-title">
                احمِ نفسك
                <span className="block bg-linear-to-l from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  من الخطر
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-bold leading-10 text-muted">
                موقع تعليمي يساعد الطالب على معرفة المخاطر داخل المنزل وخارجه
                باستخدام الصور الواضحة والأنشطة التفاعلية.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/instructions" className="main-btn">
                ابدأ التعلم الآن
                <span>⬅️</span>
              </Link>

              <Link href="/topics" className="soft-btn">
                مشاهدة الدروس
                <span>📚</span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
            </div>
          </div>

          {/* الصورة على الشمال */}
          <div className="lg:order-2">
            <div className="glass relative overflow-hidden rounded-[3rem] p-5 shadow-2xl">
              <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-violet-400/20 blur-3xl"></div>

              <div className="relative grid min-h-96 place-items-center rounded-[2.5rem] bg-white/40 p-6 dark:bg-white/5">
                <img
                  src={homeMedia.image}
                  alt="طفل يتعلم السلامة"
                  className="max-h-100 w-full object-contain"
                />
              </div>

              <div className="mt-5 rounded-4xl bg-white/60 p-4 text-center shadow-sm dark:bg-white/10">
                <p className="text-lg font-black">
                  تعلم المخاطر بطريقة آمنة ومبسطة
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
                </div>
      </div>
    </section>
  );
}

