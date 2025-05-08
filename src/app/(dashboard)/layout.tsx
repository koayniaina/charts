import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react'

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main>
            <section className='flex w-full'>
                <div>
                 <Navbar/>
                </div>
            </section>
            {children}
        </main>
    );
  }