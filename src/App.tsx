import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import About from './components/About';
import Facilities from './components/Facilities';
import Stats from './components/Stats';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Team from './components/Team';
import AppointmentForm from './components/AppointmentForm';
import Testimonials from './components/Testimonials';
import Logos from './components/Logos';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <QuickInfo />
        <About />
        <Facilities />
        <Stats />
        <Services />
        <Gallery />
        <Process />
        <Team />
        <AppointmentForm />
        <Testimonials />
        <Logos />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
