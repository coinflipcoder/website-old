import React from 'react'

const SSHCard = () => {
  return (
    <div className='flex items-center justify-between space-x-4 rounded-lg bg-neutral-800 p-4 shadow-lg'>
      <div>
        <h3 className='text-xl font-semibold'>SSH Key</h3>
        <span className='text-gray-400'>Private as of now.</span>
      </div>
      {/* Nerd Font Icon */}
      <div className='pr-4 text-4xl text-blue-500'>󰣀</div>
    </div>
  )
}

export default SSHCard
