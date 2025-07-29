const Banner = () => {
  return (
    <div className="w-full mt-20">
      {/* Section Heading - OVERSIZED */}
     <div className="flex items-center justify-center my-6 sm:my-8">
        <div className="h-px bg-gray-400 w-1/3 sm:w-1/5"></div>
        <h1 className="mx-3 text-lg sm:text-2xl font-bold text-center tracking-widest">
          OVERSIZED T-SHIRT
        </h1>
        <div className="h-px bg-gray-400 w-1/3 sm:w-1/5"></div>
      </div>


      {/* OVERSIZED Image Scroll */}
      <div className="relative flex items-center justify-center w-full px-2 sm:px-4">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x pb-4">
          {[
            "https://i.ibb.co/gFdhS281/photo-6334699560848447682-y.jpg",
            "https://i.ibb.co/TqcZ7CVH/photo-6334699560848447680-y.jpg",
            "https://i.ibb.co/GvKq44M4/photo-6334699560848447684-y.jpg",
            "https://i.ibb.co/84zTkCqc/photo-6334699560848447681-y.jpg",
            "https://i.ibb.co/70FVH6B/photo-6334699560848447679-y.jpg",
            "https://i.ibb.co/2wWQ0z3/photo-6334699560848447683-y.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 sm:w-80 snap-center"
            >
              <img
                className="h-80 sm:h-96 w-full object-cover rounded-lg"
                src={src}
                alt={`Image ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section Heading - ZIPPER */}
      <div className="flex items-center justify-center my-6 sm:my-8">
        <div className="h-px bg-gray-400 w-1/3 sm:w-1/5"></div>
        <h1 className="mx-3 text-lg sm:text-2xl font-bold text-center tracking-widest">
          HALF ZIPPER POLO
        </h1>
        <div className="h-px bg-gray-400 w-1/3 sm:w-1/5"></div>
      </div>

      {/* ZIPPER Image Scroll */}
      <div className="relative flex items-center justify-center w-full px-2 sm:px-4">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x pb-4">
          {[
            "https://i.ibb.co/7JjH35bm/Untitled-Project-6.jpg",
            "https://i.ibb.co/zYG4RBQ/Untitled-Project-8.jpg",
            "https://i.ibb.co/Nnf21fW4/Untitled-Project-7.jpg",
            "https://i.ibb.co/NgBwFt6b/Chat-GPT-Image-Jul-16-2025-10-13-33-PM.png",
            "https://i.ibb.co/bMNJZDyC/De-Watermark-ai-1752682935030.jpg",
            "https://i.ibb.co/zTw5YGZr/De-Watermark-ai-1752682915280.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 sm:w-80 snap-center"
            >
              <img
                className="h-80 sm:h-96 w-full object-cover rounded-lg"
                src={src}
                alt={`Image ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
