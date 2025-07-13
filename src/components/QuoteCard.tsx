import { useEffect, useState } from 'react'
import GenericCard from '@/components/GenericCard'

const QuoteCard = () => {
  const [quote, setQuote] = useState("Fetching today's fact...")
  const [permalink, setPermalink] = useState('')

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/today?language=en')
      const data = await res.json()
      setQuote(data.text)
      setPermalink(data.permalink)
    } catch {
      setQuote("Could not fetch today's fact. Please try again later.")
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <GenericCard className='text-center'>
      <h2 className='text-2xl font-semibold whitespace-nowrap'>Fact of the day</h2>
      <div className='mt-6 flex items-center justify-center text-lg italic'>
        <span className='mr-2 text-4xl text-indigo-500'>&ldquo;</span>
        <span>{quote}</span>
        <span className='ml-2 text-4xl text-indigo-500'>&rdquo;</span>
      </div>
      <div className='mt-4'>
        <a
          href={permalink}
          target='_blank'
          rel='noopener noreferrer'
          className='text-indigo-500 transition-colors hover:text-indigo-600'
        >
          Source
        </a>
      </div>
    </GenericCard>
  )
}

export default QuoteCard
