import { Plus_Jakarta_Sans } from 'next/font/google'
import '@/public/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/*
 * Root Layout
 * -----------
 * Amaç: Tüm sayfalar için temel HTML yapısını ve global bileşenleri sağlar.
 * Header ve Footer burada render edilir, children sayfa içeriğini temsil eder.
 * Font: Plus Jakarta Sans — modern, okunabilir, premium görünümlü.
 */

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  title: 'Sanayide — Saniyeler İçinde Usta Bul',
  description:
    'Türkiye\'nin en büyük usta bulma platformu. Elektrikçi, tesisatçı, boyacı ve daha fazlasını swipe ederek bul. Hızlı, güvenli, doğrulanmış ustalar.',
  keywords: ['usta bul', 'elektrikçi', 'tesisatçı', 'boyacı', 'marangoz', 'usta uygulaması'],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif' }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
