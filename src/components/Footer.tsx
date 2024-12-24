import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './FadeIn';

export default function Footer() {
  return (
    <FadeIn delay={0.2}>
      <footer className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-center lg:px-10">
          <div className="align-center flex justify-center">
            <Link href={'/'} className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Home</span>
              <Image
                src="/apply.svg"
                alt="Apply Digital Logo"
                width={170}
                height={50}
              />
            </Link>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
}
