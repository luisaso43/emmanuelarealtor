
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-black font-pacifico text-2xl">
            Emmanuela Suarez
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-black hover:text-gray-600 transition-colors duration-300 font-light"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="text-black hover:text-gray-600 transition-colors duration-300 font-light"
            >
              Sobre Mí
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-black hover:text-gray-600 transition-colors duration-300 font-light"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-black hover:text-gray-600 transition-colors duration-300 font-light"
            >
              Contacto
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20luxury%20house%20interior%20with%20floor-to-ceiling%20windows%2C%20contemporary%20furniture%2C%20open%20space%20living%20room%20with%20natural%20lighting%2C%20minimalist%20design%2C%20neutral%20colors%2C%20high-end%20finishes%2C%20spacious%20layout%2C%20premium%20real%20estate%20photography%2C%20bright%20and%20airy%20atmosphere%2C%20sophisticated%20home%20decor&width=1920&height=1080&seq=modern-house-interior&orientation=landscape')`
          }}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Name and Button */}
        <div className="relative z-10 text-center">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light text-white transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ fontFamily: 'var(--font-poppins)' }}>
            Emmanuela Suarez
          </h1>
          <button
            onClick={() => scrollToSection('contacto')}
            className={`mt-8 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium transition-all duration-500 delay-500 transform hover:scale-105 cursor-pointer whitespace-nowrap ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Comienza Ahora
          </button>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
              Haciendo Realidad Tus Sueños Inmobiliarios
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Con experiencia, dedicación y un enfoque personalizado, te acompaño en cada paso 
              hacia encontrar tu hogar ideal en Miami.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">Sobre Mí</h2>
            <div className="w-24 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://static.readdy.ai/image/154b0c3a2702e68f558f904b94fd50b0/9b0a16e3609579e300c259376aab2a4b.jfif"
                alt="Emmanuela Suarez"
                className="w-full h-80 object-cover rounded-lg shadow-xl object-top"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
             Con más de 2 años de experiencia en el mercado inmobiliario de Miami, me especializo en ayudar a familias a encontrar su hogar ideal. Mi enfoque se basa en brindar un servicio personalizado, transparente y centrado en las necesidades específicas de cada cliente.


              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi enfoque personalizado y conocimiento profundo del mercado de Miami me permite ofrecer 
                un servicio excepcional, desde la búsqueda inicial hasta el cierre de la transacción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">Mis Servicios</h2>
            <div className="w-24 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-home-4-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Compra de Propiedades</h3>
              <p className="text-gray-600 leading-relaxed">
                Te ayudo a encontrar la propiedad perfecta que se adapte a tus necesidades y presupuesto 
                en las mejores zonas de Miami.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-money-dollar-circle-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Venta de Propiedades</h3>
              <p className="text-gray-600 leading-relaxed">
                Estrategias de marketing personalizadas para vender tu propiedad al mejor precio 
                y en el menor tiempo posible.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-star-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Consultoría Inmobiliaria</h3>
              <p className="text-gray-600 leading-relaxed">
                Asesoramiento experto en inversiones inmobiliarias y análisis de mercado 
                para maximizar tu retorno de inversión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">Contacto</h2>
            <div className="w-24 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Hablemos de tu próximo hogar</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Estoy aquí para ayudarte en cada paso del proceso. Contáctame hoy mismo para 
                una consulta gratuita y descubre cómo puedo hacer realidad tus sueños inmobiliarios.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-gray-700"></i>
                  </div>
                  <span className="text-gray-700">+1 (954) 818-5739</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-gray-700"></i>
                  </div>
                  <span className="text-gray-700">emmanuelarealtor@outlook.com</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mr-4 mt-1">
                    <i className="ri-map-pin-line text-gray-700"></i>
                  </div>
                  <div className="text-gray-700">
                    <div>10200 NW 25th St Suite: A100</div>
                    <div>Doral, FL 33172</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form 
                id="contact-form"
                action="https://formspree.io/f/xldnrvjz" 
                method="POST"
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre completo"
                    required
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:border-gray-700 focus:outline-none text-gray-800 placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    required
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:border-gray-700 focus:outline-none text-gray-800 placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Tu número de teléfono"
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:border-gray-700 focus:outline-none text-gray-800 placeholder-gray-500"
                  />
                </div>
                <div>
                  <select
                    name="tipo_servicio"
                    required
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:border-gray-700 focus:outline-none text-gray-800 pr-8"
                  >
                    <option value="">Selecciona el tipo de servicio</option>
                    <option value="compra">Compra de propiedad</option>
                    <option value="venta">Venta de propiedad</option>
                    <option value="consultoria">Consultoría inmobiliaria</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="mensaje"
                    placeholder="Cuéntame más sobre lo que necesitas..."
                    rows={4}
                    maxLength={500}
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:border-gray-700 focus:outline-none text-gray-800 placeholder-gray-500 resize-none"
                  ></textarea>
                  <div className="text-sm text-gray-500 mt-2">Máximo 500 caracteres</div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-pacifico text-2xl mb-4 md:mb-0 text-gray-800">
              Emmanuela Suarez
            </div>
            <div className="flex items-center space-x-6">
              <p className="text-gray-600">Sígueme en mis redes sociales:</p>
              <a
                href="https://www.instagram.com/emmanuelasuarezrealtor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <i className="ri-instagram-line text-white text-lg"></i>
              </a>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              2024 Emmanuela Suarez. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
