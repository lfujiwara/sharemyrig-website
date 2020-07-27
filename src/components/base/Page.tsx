import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Page() {
  return (
    <div className="min-h-screen min-w-screen bg-custom-whitesmoke flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col justify-end">
        <Footer />
      </div>
    </div>
  );
}
