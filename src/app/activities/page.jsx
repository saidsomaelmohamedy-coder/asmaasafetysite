"use client";

import { useState } from "react";
import Link from "next/link";
import { activities } from "../data/safetyData";

export default function ActivitiesPage() {
  const [answers, setAnswers] = useState({});

  function chooseAnswer(questionIndex, option) {
    setAnswers({
      ...answers,
      [questionIndex]: option,
    });
  }

  const answeredCount = Object.keys(answers).length;
  const progress = Math.max((answeredCount / activities.length) * 100, 8);

  return (
    <section className="py-10">
      <div className="page-container">
        {/* Header */}
        <div className="glass-strong relative mb-10 overflow-hidden rounded-[3rem] p-6 text-center md:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl"></div>

          <div className="relative">
            <div className="badge mx-auto">🎯 نشاط تفاعلي</div>

            <h1 className="section-title mt-4">اختر التصرف الصحيح</h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-9 text-muted">
              شاهد الصورة جيدًا، ثم اختر الإجابة الآمنة التي تساعدك على حماية نفسك.
            </p>

            <div className="mx-auto mt-7 max-w-md rounded-full bg-white/60 p-2 shadow-sm dark:bg-white/10">
              <div
                className="rounded-full bg-linear-to-l from-blue-600 to-violet-600 py-2 text-center text-sm font-black text-white transition-all"
                style={{ width: `${progress}%` }}
              >
                {answeredCount} من {activities.length}
              </div>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="space-y-8">
          {activities.map((activity, questionIndex) => {
            const selectedAnswer = answers[questionIndex];

            return (
              <div
                key={activity.question}
                className="glass card-hover overflow-hidden rounded-[3rem] p-5 md:p-6"
              >
                <div className="grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:[direction:ltr]">
                  {/* الصورة على الشمال */}
                  <div className="lg:[direction:rtl]">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-white/55 p-5 shadow-xl dark:bg-white/10">
                      <div className="absolute right-5 top-5 z-10 rounded-full bg-white/85 px-4 py-2 text-sm font-black shadow-md dark:bg-white/15">
                        {activity.icon} نشاط {questionIndex + 1}
                      </div>

                      <div className="grid min-h-80 place-items-center rounded-3xl bg-blue-500/5 p-5">
                        <img
                          src={activity.image}
                          alt={`نشاط ${questionIndex + 1}`}
                          className="max-h-72 w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* السؤال والإجابات على اليمين */}
                  <div className="lg:[direction:rtl]">
                    <div className="mb-6 flex items-start gap-4">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[1.4rem] bg-linear-to-br from-blue-600 to-violet-600 text-xl font-black text-white shadow-lg">
                        {questionIndex + 1}
                      </div>

                      <div>
                        <p className="mb-2 text-sm font-black text-muted">
                          اختر الإجابة الصحيحة
                        </p>

                        <h2 className="text-2xl font-black leading-10 md:text-3xl">
                          {activity.question}
                        </h2>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {activity.options.map((option) => {
                        const isSelected = selectedAnswer?.text === option.text;

                        return (
                          <button
                            key={option.text}
                            type="button"
                            onClick={() => chooseAnswer(questionIndex, option)}
                            className={`group rounded-3xl border p-5 text-right text-xl font-black leading-9 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                              isSelected
                                ? option.correct
                                  ? "border-green-500 bg-green-500/15 text-green-700 dark:text-green-300"
                                  : "border-red-500 bg-red-500/15 text-red-700 dark:text-red-300"
                                : "border-white/20 bg-white/60 hover:bg-blue-600 hover:text-white dark:bg-white/5"
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-base ${
                                  isSelected
                                    ? option.correct
                                      ? "bg-green-500 text-white"
                                      : "bg-red-500 text-white"
                                    : "bg-blue-600/10 text-blue-700 group-hover:bg-white/20 group-hover:text-white dark:text-blue-200"
                                }`}
                              >
                                {isSelected ? (option.correct ? "✓" : "×") : "•"}
                              </span>

                              <span>{option.text}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {selectedAnswer && (
                      <div
                        className={`mt-5 rounded-3xl border p-5 text-xl font-black leading-9 ${
                          selectedAnswer.correct
                            ? "border-green-500/40 bg-green-500/10 text-green-700 dark:text-green-300"
                            : "border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300"
                        }`}
                      >
                        {selectedAnswer.correct ? "✅ " : "❌ "}
                        {selectedAnswer.feedback}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/exam" className="main-btn">
            الذهاب إلى الاختبار
            <span>📝</span>
          </Link>

          <Link href="/topics" className="soft-btn">
            مراجعة الدروس
            <span>📚</span>
          </Link>
        </div>
      </div>
    </section>
  );
}