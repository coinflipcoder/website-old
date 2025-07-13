import React from 'react'

type ContactCardProps = {
  platform: string
  url: string
  name: string
  icon: string // Icon is the Unicode character for the Nerd Font icon
}

const ContactCard: React.FC<ContactCardProps> = ({ platform, url, icon, name }) => {
  return (
    <div className='flex items-center justify-between space-x-4 rounded-lg bg-neutral-800 p-4 shadow-lg'>
      <div>
        <h3 className='text-xl font-semibold'>{platform}</h3>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 transition-colors hover:text-blue-600'
        >
          {name}
        </a>
      </div>
      {/* Nerd Font Icon */}
      <div className={`text-4xl text-blue-500 ${icon === '[m]' ? '' : 'pr-4'}`}>{icon}</div>
    </div>
  )
}

export default ContactCard
