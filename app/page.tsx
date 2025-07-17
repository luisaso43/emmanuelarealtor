'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    const form = e.currentTarget;
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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-black font-pacifico text-2xl">Emmanuela Suarez</div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-black hover:text-gray-600 font-light">Inicio</button>
            <button onClick={() => scrollToSection('sobre-mi')} className="text-black hover:text-gray-600 font-light">Sobre Mí</button>
            <button onClick={() => scrollToSection('servicios')} className="text-black hover:text-gray-600 font-light">Servicios</button>
            <button onClick={() => scrollToSection('contacto')} className="text-black hover:text-gray-600 font-light">Contacto</button>
          </div>
        </div>
      </nav>

      <section id="inicio" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20luxury%20house%20interior&width=1920&height=1080')` }} />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center">
          <h1 className={`text-5xl md:text-7xl font-light text-white ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Emmanuela Suarez</h1>
          <button onClick={() => scrollToSection('contacto')} className={`mt-8 px-8 py-4 bg-gray-800 text-white rounded-full ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Comienza Ahora</button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-light text-gray-800 mb-6">Haciendo Realidad Tus Sueños Inmobiliarios</h2>
            <p className="text-xl text-gray-600">Con experiencia, dedicación y un enfoque personalizado, te acompaño en cada paso hacia encontrar tu hogar ideal en Miami.</p>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 text-gray-800">Sobre Mí</h2>
            <div className="w-24 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="https://static.readdy.ai/image/154b0c3a2702e68f558f904b94fd50b0/9b0a16e3609579e300c259376aab2a4b.jfif" alt="Emmanuela Suarez" className="w-full h-80 object-cover rounded-lg shadow-xl object-top" />
            <div className="space-y-6">
              <p className="text-lg text-gray-700">Con más de 2 años de experiencia en el mercado inmobiliario de Miami, me especializo en ayudar a familias a encontrar su hogar ideal.</p>
              <p className="text-lg text-gray-700">Mi enfoque personalizado y conocimiento profundo del mercado de Miami me permite ofrecer un servicio excepcional.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 text-gray-800">Mis Servicios</h2>
            <div className="w-24 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg shadow-md">
              <i className="ri-home-4-line text-2xl text-white bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"></i>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Compra de Propiedades</h3>
              <p className="text-gray-600">Te ayudo a encontrar la propiedad perfecta que se adapte a tus necesidades.</p>
            </div>
            <div className="text-center p-8 bg-gray-100 rounded-lg shadow-md">
              <i className="ri-money-dollar-circle-line text-2xl text-white bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"></i>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Venta de Propiedades</h3>
              <p className="text-gray-600">Estrategias de marketing personalizadas para vender tu propiedad al mejor precio.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg shadow-md">
              <i className="ri-user-star-line text-2xl text-white bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"></i>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Consultoría Inmobiliaria</h3>
              <p className="text-gray-600">Asesoramiento experto en inversiones inmobiliarias y análisis de mercado.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 text-gray-800">Contacto</h2>
            <div className="w-24 h-1 bg-gray-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Hablemos de tu próximo hogar</h3>
              <p className="text-gray-700 mb-8">Estoy aquí para ayudarte. Contáctame hoy mismo para una consulta gratuita.</p>
              <div className="space-y-4">
                <p className="text-gray-700"><i className="ri-phone-line mr-2"></i>+1 (954) 818-5739</p>
                <p className="text-gray-700"><i className="ri-mail-line mr-2"></i>emmanuelarealtor@outlook.com</p>
                <p className="text-gray-700"><i className="ri-map-pin-line mr-2"></i>10200 NW 25th St Suite: A100, Doral, FL 33172</p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="nombre" placeholder="Tu nombre completo" required className="w-full p-4 border rounded-lg" />
                <input type="email" name="email" placeholder="Tu correo electrónico" required className="w-full p-4 border rounded-lg" />
                <input type="tel" name="telefono" placeholder="Tu número de teléfono" className="w-full p-4 border rounded-lg" />
                <select name="tipo_servicio" required className="w-full p-4 border rounded-lg">
                  <option value="">Selecciona el tipo de servicio</option>
                  <option value="compra">Compra de propiedad</option>
                  <option value="venta">Venta de propiedad</option>
                  <option value="consultoria">Consultoría inmobiliaria</option>
                  <option value="otro">Otro</option>
                </select>
                <textarea name="mensaje" placeholder="Cuéntame más sobre lo que necesitas..." rows={4} maxLength={500} className="w-full p-4 border rounded-lg"></textarea>
                <button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-lg font-semibold">Enviar Mensaje</button>
                {submitted && <p className="text-green-600 font-medium mt-4">✅ Tu mensaje fue enviado correctamente.</p>}
                {error && <p className="text-red-600 font-medium mt-4">❌ Ocurrió un error. Inténtalo de nuevo.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 text-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-pacifico text-2xl mb-4 md:mb-0">Emmanuela Suarez</div>
            <div className="flex items-center space-x-6">
              <p className="text-gray-600">Sígueme:</p>
              <a href="https://www.instagram.com/emmanuelasuarezrealtor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center">
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

