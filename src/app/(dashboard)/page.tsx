import { Areachart } from '@/components/chart/Area'
import { Barchart } from '@/components/chart/Barchart'
import { Dbarchart } from '@/components/chart/Dbarchart'
import React from 'react'


export default function Home() {
  return (
    <main className='main'>
      <section className="area">
        <Areachart/>
      </section>
      <section className="barchart">
        <div className='bar_one' >
          <Barchart/>
        </div>
        <div className='bar_two'>
          <Dbarchart/>
        </div>
      </section>
    </main>
  )
}
