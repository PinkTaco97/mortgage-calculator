'use client';

// Components.
import { Header, Footer, Card, ThemeSelector } from '@/components';

export default function Home() {
  return (
    <>
      <Header/>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <ul className="flex w-1/2 flex-col gap-5">
          <ThemeSelector/>
          <Card active />
        </ul>
      </main>
      <Footer/>
    </>
  );
}