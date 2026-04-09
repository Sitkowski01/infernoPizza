import './globals.css'

export const metadata = {
  title: 'INFERNO Neapolitana',
  description: 'Bezwzględny kult ciasta i ognia.',
  openGraph: {
    title: 'INFERNO Neapolitana',
    description: 'Bezwzględny kult ciasta i ognia.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="antialiased">{children}</body>
    </html>
  )
}
