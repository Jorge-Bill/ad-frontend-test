export default function Banner() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h1 className="text-5xl sm:text-5xl max-w-2xl font-semibold tracking-tight text-gray-900">
          Top Sellers
        </h1>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <a
            href="#"
            className="text-sm rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
