import React from 'react'

export const CustomContainer = ({ children }) => {
  return (
    <div className="p-6 py-12 md:p-24 md:py-12 min-h-dvh flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        {children}
      </div>
    </div>
  )
}
