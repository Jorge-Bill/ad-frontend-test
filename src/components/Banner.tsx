type BannerProps = {
  title: string;
  children: React.ReactNode;
};

export default function Banner({ title, children }: BannerProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl max-w-3xl font-semibold tracking-tight text-gray-900">
          {title}
        </h1>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}
