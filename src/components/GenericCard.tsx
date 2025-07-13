import React from 'react'

type GenericCardProps = {
  children: React.ReactNode
  className?: string // To add any custom classes
}

const GenericCard = ({ children, className }: GenericCardProps) => {
  return <div className={`mt-4 overflow-x-hidden rounded-lg bg-neutral-800 p-4 shadow-lg ${className}`}>{children}</div>
}

export default GenericCard
