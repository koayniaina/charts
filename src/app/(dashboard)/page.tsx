import { Areachart } from '@/components/chart/Area'
import { Barchart } from '@/components/chart/Barchart'
import { Dbarchart } from '@/components/chart/Dbarchart'
import React from 'react'
import styles from '@/styles/Home.module.css'
import Cards from '@/components/Cards'


export default function Home() {
  return (
    <main className={styles.mains}>
      <section className={styles.area}>
        <Areachart/>
      </section>
      <section className={styles.barchart}>
        <div className={styles.bar_one}>
          <Barchart/>
        </div>
        <div className={styles.bar_two}>
          <Dbarchart/>
        </div>
        <div className={styles.card}>
          <Cards/>
        </div>
      </section>
    </main>
  )
}
