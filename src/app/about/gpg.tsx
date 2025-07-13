import React from 'react'

const GPGCard = () => {
  return (
    <div className='flex items-center justify-between space-x-4 rounded-lg bg-neutral-800 p-4 shadow-lg'>
      <div>
        <h3 className='text-xl font-semibold'>GPG Key</h3>
        <a
          href={`/cdn/gpg_key.asc`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 transition-all hover:text-blue-600'
        >
          Download Key
        </a>
        <span className='mx-2 text-gray-400'>|</span>
        <a
          href={`/cdn/gpg_fingerprint.txt`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 transition-all hover:text-blue-600'
        >
          Fingerprint
        </a>
      </div>
      {/* Nerd Font Icon */}
      <div className='pr-4 text-4xl text-blue-500'>󱕵</div>
    </div>
  )
}

export default GPGCard
