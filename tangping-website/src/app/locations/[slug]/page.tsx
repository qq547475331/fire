import Image from 'next/image';
import { locations } from '@/data/locations';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export default async function LocationPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const location = locations.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  const renderInfoCard = (title: string, data: { [key: string]: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">{title}</h3>
      <ul className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="text-gray-700">
            <span className="font-semibold">{key}:</span> {value}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="relative z-10 min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem]">
        <Image src={location.image} alt={location.name} fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
          <div className="text-center text-white w-full px-4">
            <h1 className="text-4xl md:text-6xl font-bold break-words">{location.name}</h1>
            <p className="text-xl md:text-2xl mt-4 break-words">{location.province}</p>
          </div>
        </div>
      </header>

      <main className="p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {renderInfoCard('生活成本', location.costOfLiving)}
            {renderInfoCard('住房信息', location.housing)}
            {renderInfoCard('环境与气候', location.environment)}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">"躺平"指数</h3>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-yellow-500 mr-2">{location.rating}</span>
                <span className="text-gray-600">/ 5</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600 border-b pb-2 mb-4">核心优势</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {location.advantages.map((adv) => <li key={adv}>{adv}</li>)}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-600 border-b pb-2 mb-4">潜在挑战</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {location.challenges.map((cha) => <li key={cha} className="break-words">{cha}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">风光图集</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {location.gallery.map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                        <Image src={img} alt={`${location.name} gallery image ${index + 1}`} width={400} height={300} style={{ objectFit: "cover" }} className="w-full h-full" />
                    </div>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}
