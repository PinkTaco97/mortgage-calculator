'use client';

// Components.
import { Header, Footer, Form } from '@/components';

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="bg-background min-h-screen p-10">
        <Form/>
      </div>
      <Footer/>
    </div>
  );
}