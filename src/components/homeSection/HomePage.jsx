import React from 'react'
import { HomeHero } from './HomeHero'
import { AboutPage } from '../sections/AboutPage'
import { ServicesPage } from './ServicesPage'
import { CountingPage } from '../sections/CountingPage'
import { Testimonials } from '../sections/Testimonials'
import { BlogPage } from '../sections/BlogPage'
import { PortfolioPage } from '../sections/PortfolioPage'

export const HomePage = () => {
  return (
    <>
    <HomeHero />
    <AboutPage />
    <ServicesPage />
    <CountingPage />
    <PortfolioPage />
    <Testimonials />
    <BlogPage />
    </>
  )
}
