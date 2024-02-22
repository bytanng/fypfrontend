import React from 'react'
import Intro from '../components/Home/Intro/intro'
import HowItWorks from '../components/Home/HowItWorks/howitworks'
import TopPicks from '../components/Home/TopPicks/toppicks'
import Contact from '../components/Home/Contact/contact'

export default function Home() {
    return (
        <div>
        <Intro/>
        <TopPicks/>
        <HowItWorks/>
        <Contact/>
        </div>
    )
}