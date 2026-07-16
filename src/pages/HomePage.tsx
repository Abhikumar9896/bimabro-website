import { CategoriesSection } from '../components/home/CategoriesSection'
import { CtaBanner } from '../components/home/CtaBanner'
import { HeroSection } from '../components/home/HeroSection'
import { HowItWorksSection } from '../components/home/HowItWorksSection'
import { TestimonialsSection } from '../components/home/TestimonialsSection'
import { WhySection } from '../components/home/WhySection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <WhySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}
