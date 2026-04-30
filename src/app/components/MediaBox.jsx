"use client";

import { useState } from "react";

export default function MediaBox({
  image = "",
  video = "",
  title = "وسائط تعليمية",
  icon = "🖼️",
  imageNote = "ضعي صورة الدرس هنا",
  videoNote = "ضعي فيديو الدرس هنا",
}) {
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const showImage = image && !imageError;
  const showVideo = video && !videoError;

  return (
    <div className="space-y-5">
      {/* Image */}
      <div className="media-box">
        {showImage ? (
          <img
            src={image}
            alt={title}
            onError={() => setImageError(true)}
            className="h-80 w-full object-contain p-6"
          />
        ) : (
          <div className="media-placeholder">
            <div className="media-placeholder-inner">
              <div className="text-6xl">{icon}</div>

              <h3 className="mt-4 text-2xl font-black">{title}</h3>

              <p className="mt-3 text-sm font-bold leading-7 text-muted">
                {imageNote}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Video */}
      <div className="glass rounded-3xl p-5">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl">🎬</span>
          <h3 className="text-xl font-black">الفيديو التعليمي</h3>
        </div>

        {showVideo ? (
          <video
            controls
            className="max-h-96 w-full rounded-2xl bg-black"
            onError={() => setVideoError(true)}
          >
            <source src={video} type="video/mp4" />
            المتصفح لا يدعم تشغيل الفيديو.
          </video>
        ) : (
          <div className="rounded-2xl border border-dashed border-violet-400/30 p-5 text-center">
            <div className="text-4xl">🎥</div>

            <p className="mt-3 text-sm font-bold leading-7 text-muted">
              {videoNote}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}