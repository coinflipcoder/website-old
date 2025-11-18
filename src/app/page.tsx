'use client'

import Magic8Ball from '@/components/8ballCard'
import QuoteCard from '@/components/QuoteCard'
import MainPageTextCard from '@/components/MainPageTextCard'
import CounterCard from '@/components/CounterCard'
import MicroButtonCard from '@/components/88x31Card'

export default function Page() {
  return (
    <div>
      <MainPageTextCard />

      <noscript>
        <div className='mt-8 text-center text-red-500'>
          JavaScript is disabled. Due to this website being deployed statically, some functions will not work correctly.
        </div>
      </noscript>

      <QuoteCard />

      <div className='flex flex-col md:flex-row md:space-x-4'>
        <Magic8Ball />
        <CounterCard />
      </div>

      <MicroButtonCard />
    </div>
  )
}
