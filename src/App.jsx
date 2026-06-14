import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Portfolio from './components/Portfolio'
import About from './components/About'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#060B18]">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <WhyUs />
        <Portfolio />
        <About />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
