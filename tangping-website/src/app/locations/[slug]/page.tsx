'use client';

import { locations } from '@/data/locations';

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export default async function LocationPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Location: {params.slug}</h1>
    </div>
  );
}