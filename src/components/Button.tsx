import React from 'react'

interface Button {
  children: string
  variant: 'primary' | 'secondary'
  className?: string
}

export default function Button({ children, variant, className }: Button) {
  let variantClass

  if (variant === 'primary') {
    variantClass = 'text-white bg-primary hover:bg-primary/90'
  } else if (variant === 'secondary') {
    variantClass = 'border-2 hover:text-primary hover:border-primary'
  }

  return (
    <div
      className={`py-3 px-7 w-fit rounded-md cursor-pointer duration-75 text-lg ${variantClass} ${className}`}
    >
      {children}
    </div>
  )
}
