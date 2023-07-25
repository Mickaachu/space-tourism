import Header from '../components/Header'
import './globals.css'

export const metadata = {
  title: 'Cosmic Odyssey',
  description: 'Discover the wonders of space travel with Cosmic Odyssey - your ultimate space tourism destination. Experience suborbital and orbital missions, witness Earth from above, and explore the mysteries of the cosmos. Stay informed with the latest space news, immerse yourself in our stellar gallery, and access educational resources. Your cosmic journey awaits! Book now.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        
      </body>
    </html>
  )
}
