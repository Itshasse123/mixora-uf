export const ImageCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <div className="relative w-full h-full">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`product-${i}`}
            className={`
              absolute top-0 left-0 w-full h-full object-cover transition-all duration-500
              ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          />
        ))}
      </div>

      {/* Pilknappar */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
};