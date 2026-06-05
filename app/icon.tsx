import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#1A1814', // Obsidian
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FAF8F5', // Cream
          borderRadius: '50%',
          fontFamily: 'serif',
          fontStyle: 'italic',
        }}
      >
        F
      </div>
    ),
    { ...size }
  )
}
