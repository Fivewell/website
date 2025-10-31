"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type MediaItem = {
  id: string;
  title: string;
  type: "publication" | "video" | "article";
  thumbnail: string;
  date: string;
  url: string;
  category?: string;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  source: string;
};

const router = useRouter();

const getTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      );
    case "publication":
    case "article":
      return (
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

export default function MediaGrid({ mediaItems }: { mediaItems: MediaItem[] }) {
  const [openItem, setOpenItem] = useState<MediaItem | null>(null);

  const isVideo = (item: MediaItem) => item.type === "video";
  const isYouTube = (url: string) => /youtube\.com|youtu\.be/.test(url);
  const isVimeo = (url: string) => /vimeo\.com/.test(url);
  const isMp4 = (url: string) => /\.mp4($|\?)/i.test(url);

  const getYouTubeEmbedSrc = (url: string) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) {
        return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
      }
      const v = u.searchParams.get("v");
      return v ? `https://www.youtube.com/embed/${v}` : url;
    } catch {
      return url;
    }
  };

  const getVimeoEmbedSrc = (url: string) => {
    try {
      const u = new URL(url);
      const id = u.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : url;
    } catch {
      return url;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {mediaItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
        >
          <button
            type="button"
            className="relative h-48 text-left"
            onClick={() => router.push(`/media/${item.id}`)}
          >
            <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
            {getTypeIcon(item.type)}
            <span className="sr-only">Open {item.type === "video" ? "video" : "image"} preview for {item.title}</span>
          </button>
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-[#0D2543] uppercase tracking-wider">
              {item.category}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 flex-grow">
              {item.title}
            </h3>
            <div className="text-sm text-gray-500 mb-4">
              <span>
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
              <span className="mx-2">•</span>
              <span>{item.source}</span>
            </div>
            {item.type === "video" ? (
              <button
                type="button"
                onClick={() => setOpenItem(item)}
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mt-auto"
              >
                Watch Now
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            ) : (
              (() => {
                const isPdf = /\.pdf($|\?)/i.test(item.url);
                return (
                  <a
                    href={item.url}
                    {...(isPdf ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-auto"
                  >
                    Read More
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                );
              })()
            )}
          </div>
        </motion.div>
      ))}
      {/* Modal Dialog */}
      {openItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenItem(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow p-2"
              aria-label="Close"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-black">
              {isVideo(openItem) ? (
                isYouTube(openItem.url) ? (
                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={getYouTubeEmbedSrc(openItem.url)}
                      title={openItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : isVimeo(openItem.url) ? (
                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={getVimeoEmbedSrc(openItem.url)}
                      title={openItem.title}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : isMp4(openItem.url) ? (
                  <video controls className="w-full h-auto">
                    <source src={openItem.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="relative">
                    <Image
                      src={openItem.thumbnail}
                      alt={openItem.title}
                      width={1280}
                      height={720}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )
              ) : (
                <Image
                  src={openItem.thumbnail}
                  alt={openItem.title}
                  width={1280}
                  height={720}
                  className="w-full h-auto object-contain"
                />
              )}
            </div>
            <div className="p-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{openItem.title}</h3>
                <p className="text-sm text-gray-500">{openItem.source}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
