'use client'

import { useState } from 'react'

export default function ReadMore({ children, lines = 3, className = '' }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={className}>
      <div
        style={!expanded ? {
          display: '-webkit-box',
          WebkitLineClamp: lines,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        } : undefined}
      >
        {children}
      </div>
      <button
        onClick={() => setExpanded(prev => !prev)}
        className="mt-2 text-sm font-semibold text-[#c9a84c] hover:underline transition-colors duration-200"
      >
        {expanded ? 'Read less' : 'Read more'}
      </button>
    </div>
  )
}
