import Image from 'next/image';
import Link from 'next/link';
import { locations } from '@/data/locations';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-12 lg:p-24 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          寻找你的下一个栖息地
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          探索国内那些风景优美、生活成本低廉的“躺平”圣地，找到最适合你的向往生活。
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location) => (
          <Link
            key={location.id}
            href={`/locations/${location.slug}`}
            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative">
              <Image src={location.image} alt={location.name} width={400} height={200} className="w-full h-48 object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {location.name}
              </h2>
              <p className="text-gray-600">
                {location.highlight}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
