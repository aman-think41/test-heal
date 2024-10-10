import React from 'react'
import Founders from "./Founders"
import AboutUsHeroSection from './Aboutushero'
import Aboutusservices from './Aboutusservices'
import Aboutusinfo from './Aboutusinfo'
import Header from "./Header"
import { headerData } from '../data/componentData'
import Footer from './Footer'
import { footerData } from '../data/componentData'

function Aboutus() {
  return (
    <>

        <Header data={headerData}/>
        <AboutUsHeroSection />
        <Aboutusinfo/>
        <Aboutusservices />
        <Founders/>
        <Footer data={footerData} />
    </>
  )
}

export default Aboutus