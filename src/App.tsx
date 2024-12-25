import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { ChefHat, Cake, Coffee, Gift } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80"
            alt="Bakery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Sweet Delights Bakery</h1>
          <p className="text-xl md:text-2xl mb-8">Where Every Bite Tells a Story</p>
          <a
            href="#contact"
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 1995, Sweet Delights has been serving the community with freshly baked goods
              made from traditional recipes passed down through generations. Our passion for baking
              and dedication to quality ingredients makes every creation special.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=600&h=600"
                  alt="Baker working"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600&h=600"
                  alt="Fresh pastries"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cake className="h-10 w-10 text-rose-600" />,
                title: 'Custom Cakes',
                description: 'Personalized cakes for all your special occasions'
              },
              {
                icon: <ChefHat className="h-10 w-10 text-rose-600" />,
                title: 'Fresh Pastries',
                description: 'Daily baked pastries using premium ingredients'
              },
              {
                icon: <Coffee className="h-10 w-10 text-rose-600" />,
                title: 'Coffee & Tea',
                description: 'Perfect companions for your sweet treats'
              },
              {
                icon: <Gift className="h-10 w-10 text-rose-600" />,
                title: 'Gift Boxes',
                description: 'Curated gift boxes for any celebration'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-1 transition-transform"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;