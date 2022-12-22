import '../styles/globals.css'
import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}