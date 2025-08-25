import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hi, I&apos;m <span className="text-blue-600">Omar Adan</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              A passionate developer specializing in modern web technologies.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/projects" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                View My Work
              </Link>
              <Link 
                href="/contact" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/vercel.svg"
                alt="Profile Picture"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}