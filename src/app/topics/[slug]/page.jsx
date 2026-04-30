import Link from "next/link";
import { notFound } from "next/navigation";
import MediaBox from "../../components/MediaBox";
import { getTopicBySlug, topics } from "../../data/safetyData";

export function generateStaticParams() {
  return topics.map((topic) => ({
    slug: topic.slug,
  }));
}

export default async function TopicDetailsPage({ params }) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return (
    <section className="py-10">
      <div className="page-container">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/topics" className="soft-btn">
            رجوع للدروس
          </Link>
        </div>

        {/* 
          على الشاشات الكبيرة:
          الشمال = الصورة والفيديو بمساحة أكبر
          اليمين = محتوى الدرس
        */}
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:[direction:ltr]">
          {/* الشمال: الصورة والفيديو */}
          <div className="lg:[direction:rtl]">
            <div className="glass-strong rounded-[3rem] p-5">
              <MediaBox
                image={topic.image}
                video={topic.video}
                title={topic.title}
                icon={topic.icon}
                imageNote={`ضعي صورة درس ${topic.title} هنا.`}
                videoNote={`ضعي فيديو تعليمي لدرس ${topic.title} هنا.`}
              />
            </div>
          </div>

          {/* اليمين: الكلام */}
          <div className="space-y-6 lg:[direction:rtl]">
            <div className="glass-strong rounded-[3rem] p-8">
              <div className="badge">درس السلامة</div>

              <h1 className="section-title mt-4">{topic.title}</h1>

              <p className="mt-5 text-xl font-bold leading-10 text-muted">
                {topic.intro}
              </p>
            </div>

            <div className="grid gap-5">
              <div className="bad-box rounded-3xl p-6">
                <div className="text-4xl">⚠️</div>

                <h2 className="mt-3 text-2xl font-black">ما الخطر؟</h2>

                <p className="mt-3 text-lg font-bold leading-9 text-muted">
                  {topic.danger}
                </p>
              </div>

              <div className="good-box rounded-3xl p-6">
                <div className="text-4xl">✅</div>

                <h2 className="mt-3 text-2xl font-black">ماذا أفعل؟</h2>

                <p className="mt-3 text-lg font-bold leading-9 text-muted">
                  {topic.safety}
                </p>
              </div>
            </div>

            <div className="glass rounded-[2.5rem] p-7">
              <h2 className="text-2xl font-black">خطوات بسيطة</h2>

              <div className="mt-5 space-y-4">
                {topic.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-2xl bg-white/60 p-4 dark:bg-white/5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-600 font-black text-white">
                      {index + 1}
                    </span>

                    <p className="text-lg font-black leading-8">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/topics" className="soft-btn">
                مشاهدة باقي الدروس
              </Link>

                       </div>
          </div>
        </div>
      </div>
    </section>
  );
}