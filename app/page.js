/*
 * Home Page (Landing Page)
 * ------------------------
 * Amaç: Sanayide uygulamasının tanıtım (landing) sayfasının ana içeriği.
 * Tüm section bileşenleri sırasıyla burada bir araya getirilir.
 * Header ve Footer layout.js üzerinden render edildiği için burada yoktur.
 *
 * Bileşen Sırası:
 *  1. Hero          - İlk izlenim, başlık, CTA
 *  2. HowItWorks    - 3 adımlı süreç anlatımı
 *  3. Features      - Öne çıkan özellikler grid'i
 *  4. MasterShowcase - İnteraktif Tinder tarzı kart demosu
 *  5. Stats         - Platform istatistikleri
 *  6. Testimonials  - Kullanıcı yorumları marquee
 *  7. CTA           - Son çağrı aksiyonu
 */

import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import MasterShowcase from '@/components/MasterShowcase'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <MasterShowcase />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}