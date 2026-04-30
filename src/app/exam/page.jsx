"use client";

import { useState } from "react";
import Link from "next/link";
import { examQuestions } from "../data/safetyData";

export default function ExamPage() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  function chooseAnswer(questionIndex, answerIndex) {
    setAnswers({
      ...answers,
      [questionIndex]: answerIndex,
    });

    if (showResult) {
      setShowResult(false);
    }
  }

  const score = examQuestions.reduce((total, question, index) => {
    return answers[index] === question.correct ? total + 1 : total;
  }, 0);

  function submitExam() {
    setShowResult(true);
  }

  return (
    <section className="py-10">
      <div className="page-container">
        {/* Hero */}
        <div className="glass-strong mb-10 overflow-hidden rounded-[3rem] p-6 md:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:[direction:ltr]">
            {/* الصورة على الشمال */}
            <div className="lg:[direction:rtl]">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white/50 p-5 shadow-xl dark:bg-white/10">
                <div className="absolute right-5 top-5 rounded-full bg-white/80 px-4 py-2 text-sm font-black shadow-md dark:bg-white/15">
                  🧠 فكر جيدًا
                </div>

                <img
                  src="/images/thinking-child.png"
                  alt="طفل يفكر"
                  className="mx-auto h-72 w-full object-contain"
                />

                <div className="mt-5 rounded-3xl bg-white/70 p-4 text-center shadow-sm dark:bg-white/10">
                  <p className="text-lg font-black leading-8">
                    اقرأ السؤال، فكر، ثم اختر الإجابة الصحيحة
                  </p>
                </div>
              </div>
            </div>

            {/* النص على اليمين */}
            <div className="text-center lg:text-right lg:[direction:rtl]">
              <div className="badge mx-auto lg:mx-0">📝 اختبار قصير</div>

              <h1 className="section-title mt-4">اختبار السلامة</h1>

              <p className="mt-5 max-w-3xl text-lg font-bold leading-9 text-muted">
                اختر إجابة واحدة لكل سؤال، ثم اضغط على إرسال الإجابات لعرض
                النتيجة.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {examQuestions.map((question, questionIndex) => (
            <div key={question.question} className="glass rounded-[2.5rem] p-6">
              <div className="mb-5 flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-600 font-black text-white">
                  {questionIndex + 1}
                </div>

                <h2 className="text-2xl font-black leading-10">
                  {question.question}
                </h2>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {question.options.map((option, optionIndex) => {
                  const selected = answers[questionIndex] === optionIndex;
                  const correct = question.correct === optionIndex;
                  const showCorrect = showResult && correct;
                  const showWrong = showResult && selected && !correct;

                  return (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-center gap-4 rounded-3xl border p-4 text-lg font-black transition hover:bg-blue-600 hover:text-white ${
                        selected
                          ? "border-blue-500 bg-blue-500/15"
                          : "border-white/20 bg-white/60 dark:bg-white/5"
                      } ${
                        showCorrect
                          ? "border-green-500 bg-green-500/15 text-green-700 dark:text-green-300"
                          : ""
                      } ${
                        showWrong
                          ? "border-red-500 bg-red-500/15 text-red-700 dark:text-red-300"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${questionIndex}`}
                        checked={selected}
                        onChange={() => chooseAnswer(questionIndex, optionIndex)}
                        className="h-5 w-5 accent-blue-600"
                      />

                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[3rem] border border-blue-400/25 bg-blue-500/10 p-7 text-center">
          <p className="text-lg font-black text-muted">
            تم حل {Object.keys(answers).length} من {examQuestions.length} أسئلة
          </p>

          <button type="button" onClick={submitExam} className="main-btn mt-5">
            إرسال الإجابات
            <span>✅</span>
          </button>

          {showResult && (
            <div className="mx-auto mt-6 max-w-xl rounded-[2.5rem] border border-green-500/30 bg-green-500/10 p-7">
              <div className="text-6xl">🎉</div>

              <h2 className="mt-4 text-3xl font-black">
                درجتك {score} من {examQuestions.length}
              </h2>

              <p className="mt-3 text-lg font-bold leading-8 text-muted">
                {score >= 4
                  ? "ممتاز! أنت تعرف كيف تحافظ على سلامتك."
                  : "راجع الدروس مرة أخرى، ثم حاول حل الاختبار من جديد."}
              </p>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/activities" className="soft-btn">
            الرجوع للنشاط
          </Link>

          <Link href="/about" className="main-btn">
            عن الموقع
            <span>ℹ️</span>
          </Link>
        </div>
      </div>
    </section>
  );
}