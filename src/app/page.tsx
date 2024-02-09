'use client'
import React from 'react'
import Navbar from '@/components/main/Navbar'
import HeroSection from '@/components/main/HeroSection'
import HowItWorks from '@/components/main/HowItWorks'
import Benefits from '@/components/main/Benefits'
import CTABanner from '@/components/main/CTABanner'
import Footer from '@/components/main/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <CTABanner />
      <Footer />
    </>
  )
}

export default page