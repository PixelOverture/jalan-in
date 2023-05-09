import React from 'react'

interface Button {
  children: string
  variant: 'primary' | 'secondary'
}

export default function Button({ children, variant }: Button) {
  let variantClass

  if (variant === 'primary') {
    variantClass = 'bg-primary hover:bg-primary/80'
  } else if (variant === 'secondary') {
    variantClass = 'border-2 hover:text-primary hover:border-primary'
  }

  return (
    <div
      className={`py-3 px-7 w-fit rounded-md cursor-pointer duration-75 text-lg ${variantClass}`}
    >
      {children}
    </div>
  )
}
