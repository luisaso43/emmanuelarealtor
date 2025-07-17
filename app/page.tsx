'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xldnrvjz', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      setError(true);
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
            <button onClick={() => scrollToSection('inicio')} className="text-black hover:text-gray-600 transition-colors duration-300 font-light">Inicio</button>
            <button onClick={() => scrollToSection('sobre-mi')} className="text-black hover:text-gray-600 transition-colors duration-300 font-light">Sobre Mí</button>
            <button onClick={() => scrollToSection('servicios')} className="text-black hover:text-gray-600 transition-colors duration-300 font-light">Servicios</button>
            <button onClick={() => scrollToSection('contacto')} className="text-black hover:text-gray-600 transition-colors duration-300 font-light">Contacto</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20luxury%20house%20interior&width=1920&height=1080')` }} />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light text-white transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Emmanuela Suarez</h1>
          <button onClick={() => scrollToSection('contacto')} className={`mt-8 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium transition-all duration-500 delay-500 transform hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Comienza Ahora</button>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">Haciendo Realidad Tus Sueños Inmobiliarios</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Con experiencia, dedicación y un enfoque personalizado, te acompaño en cada paso hacia encontrar tu hogar ideal en Miami.</p>
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
              <img src="https://static.readdy.ai/image/154b0c3a2702e68f558f904b94fd50b0/9b0a16e3609579e300c259376aab2a4b.jfif" alt="Emmanuela Suarez" className="w-full h-80 object-cover rounded-lg shadow-xl object-top" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">Con más de 2 años de experiencia en el mercado inmobiliario de Miami, me especializo en ayudar a familias a encontrar su hogar ideal. Mi enfoque se basa en brindar un servicio personalizado, transparente y centrado en las necesidades específicas de cada cliente.</p>
              <p className="text-lg text-gray-700 leading-relaxed">Mi enfoque personalizado y conocimiento profundo del mercado de Miami me permite ofrecer un servicio excepcional, desde la búsqueda inicial hasta el cierre de la transacción.</p>
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
            {/* Tarjetas de servicio aquí... */}
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
              {/* Info de contacto aquí... */}
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="nombre" placeholder="Tu nombre completo" required className="w-full p-4 bg-white border border-gray-300 rounded-lg" />
                <input type="email" name="email" placeholder="Tu correo electrónico" required className="w-full p-4 bg-white border border-gray-300 rounded-lg" />
                <input type="tel" name="telefono" placeholder="Tu número de teléfono" className="w-full p-4 bg-white border border-gray-300 rounded-lg" />
                <select name="tipo_servicio" required className="w-full p-4 bg-white border border-gray-300 rounded-lg">
                  <option value="">Selecciona el tipo de servicio</option>
                  <option value="compra">Compra de propiedad</option>
                  <option value="venta">Venta de propiedad</option>
                  <option value="consultoria">Consultoría inmobiliaria</option>
                  <option value="otro">Otro</option>
                </select>
                <textarea name="mensaje" placeholder="Cuéntame más sobre lo que necesitas..." rows={4} maxLength={500} className="w-full p-4 bg-white border border-gray-300 rounded-lg"></textarea>
                <div className="text-sm text-gray-500 mt-2">Máximo 500 caracteres</div>
                <button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-lg font-semibold transition-colors duration-300">Enviar Mensaje</button>
                {submitted && <p className="text-green-600 font-medium mt-4">✅ Tu mensaje fue enviado correctamente.</p>}
                {error && <p className="text-red-600 font-medium mt-4">❌ Ocurrió un error. Inténtalo de nuevo.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-pacifico text-2xl mb-4 md:mb-0 text-gray-800">Emmanuela Suarez</div>
            <div className="flex items-center space-x-6">
              <p className="text-gray-600">Sígueme en mis redes sociales:</p>
              <a href="https://www.instagram.com/emmanuelasuarezrealtor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <i className="ri-instagram-line text-white text-lg"></i>
              </a>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">2024 Emmanuela Suarez. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
