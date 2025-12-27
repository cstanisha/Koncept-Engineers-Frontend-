import React, { useState } from "react";
import { Link } from "react-router-dom";

// Auto-import images (Vite-safe)
const mediaImages = Object.values(
  import.meta.glob("../assets/media/*.{png,jpg,jpeg,webp}", { eager: true })
);

const Media = () => {
  const featured = mediaImages.slice(0, 3);
  const gallery = mediaImages.slice(3);

  const filters = ["All", "Events", "Media", "Team"];
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[300px] bg-gradient-to-r from-[#0a1128] to-[#101f2e] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Media</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Highlights, events, recognitions, and moments that define our journey.
          </p>
        </div>
      </section>


      {/* ================= FEATURED ================= */}
      <section className="py-20 bg-[#0a1128]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-white font-semibold mb-10">
            Featured Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-[#101f2e] shadow-lg"
              >
                {/* IMAGE */}
                <div className="w-full h-[260px] bg-black flex items-center justify-center">
                  <img
                    src={img.default}
                    alt={`Featured ${i + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* TEXT */}
                <div className="p-4 text-white">
                  <p className="text-sm text-teal-400">Media Highlight</p>
                  <p className="font-semibold mt-1">
                    Koncept Engineers – Industry Engagement
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="bg-[#0a1128] py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex gap-6 text-white/70">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`pb-2 transition-all ${activeFilter === filter
                  ? "text-teal-400 border-b-2 border-teal-400"
                  : "hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 bg-[#0a1128]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-[#101f2e] shadow-md"
              >
                <div className="w-full h-[220px] bg-black flex items-center justify-center">
                  <img
                    src={img.default}
                    alt={`Gallery ${i + 1}`}
                    className="
                      w-full h-full
                      object-contain
                      transition-transform duration-300
                      hover:scale-[1.03]
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
