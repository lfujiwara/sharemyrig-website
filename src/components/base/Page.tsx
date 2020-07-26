import React from 'react';
import Header from './Header';

export default function Page(props: React.ComponentProps<'div'>) {
  return (
    <div className="min-h-screen min-w-screen bg-custom-whitesmoke">
      <Header />
    </div>
  );
}
