import React from 'react'
import HeaderSection from '../Components/Layouts/HeaderSection'
import FooterSection from '../Components/Layouts/FooterSection'
import HeroSection from '../Components/HomePage/HeroSection'
import AdventureSection from '../Components/HomePage/AdventureSection'
import WorkSection from '../Components/HomePage/WorkSection'
import FeautureSection from '../Components/HomePage/FeautureSection'
import PlaceSection from '../Components/HomePage/PlaceSection'
import HeroSectionTwo from '../Components/HomePage/HeroSectionTwo'
import CategorySection from '../Components/HomePage/CategorySection'

const HomePage = () => {
  return (
    <div>
        <HeaderSection/>
        <HeroSection/>
        <AdventureSection/>
        <WorkSection/>
        <FeautureSection/>
        <PlaceSection/>
        <HeroSectionTwo/>
        <CategorySection/>
        <FooterSection/>
    </div>
  )
}

export default HomePage