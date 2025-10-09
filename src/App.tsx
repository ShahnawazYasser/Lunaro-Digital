import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Navigation />

      <Routes>
        {/* ✅ Route for your one-page layout */}
        <Route
          path="/"
          element={
            <main className="h-screen lg:snap-y lg:snap-mandatory overflow-y-scroll scroll-smooth">
              <section className="min-h-screen snap-start">
                <Hero />
              </section>
              <section className="min-h-screen snap-start">
                <About />
              </section>
              <section className="min-h-screen snap-start">
                <Services />
              </section>
              <section className="min-h-screen snap-start">
                <Team />
              </section>
              <section className="min-h-screen snap-start">
                <Portfolio />
              </section>
              <section className="min-h-screen snap-start">
                <Contact />
              </section>
            </main>
          }
        />
        {/* ✅ Route for the Team page */}
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
