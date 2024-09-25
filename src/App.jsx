import React from 'react'
import Navbar from './components/Navbar' //components Navbar
import Hero from './components/Hero' //components Hero
import Choosing from './components/Choosing' //components Chosing
import Product from './components/Product'  //components Product
import Experiences from './components/Experiences' //components Experiences 
import Materials from './components/Materials' //components Materials
import Testimonials from './components/Testimonials' //component Testimonials
import Footer from './components/Footer' // components Footer
import "bootstrap-icons/font/bootstrap-icons.css" // icon bootstrap

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Choosing />
        <Product />
        <Experiences />
        <Materials />
        <Testimonials />
        </main>
        <Footer />
    </>
  )
}

export default App