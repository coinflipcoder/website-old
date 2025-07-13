import GenericCard from '@/components/GenericCard'
import Link from 'next/link'

const WebringCard = () => {
  return (
    <GenericCard className='mx-auto w-fit px-6 text-center'>
      <div className='flex items-center justify-center'>
        <Link href={'https://ring.ssi.fyi/previous?host=devlencio.net'} className='mr-2'>
          {''}
        </Link>
        <Link href={'https://ring.ssi.fyi'}>
          <h2 className='mx-2 text-2xl font-semibold'>SSI Webring</h2>
        </Link>
        <Link href={'https://ring.ssi.fyi/next?host=devlencio.net'} className='ml-2'>
          {''}
        </Link>
      </div>
    </GenericCard>
  )
}

export default WebringCard
