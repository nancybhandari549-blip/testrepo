import Image from "next/image";

type BannerProps = {
  title: string;
  subtitle: string;
};

export default function Banner({ title, subtitle }: BannerProps) {
  return (
    <section className="relative flex items-center justify-center text-center min-h-200">
      
      {/* Background Image */}
      <Image
        src="/photos/img1.jpg"
        alt="Banner Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <h1 className="text-4xl font-bold text-[#00e5ff]">
          {title}
        </h1>
        <p className="text-white mt-4">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
