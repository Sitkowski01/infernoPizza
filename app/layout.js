import './globals.css'

export const metadata = {
  title: 'INFERNO Neapolitana',
  description: 'Bezwzględny kult ciasta i ognia.',
  openGraph: {
    title: 'INFERNO Neapolitana',
    description: 'Bezwzględny kult ciasta i ognia.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'INFERNO Neapolitana - pizza',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="antialiased">{children}</body>
    </html>
  )
}
