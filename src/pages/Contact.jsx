import { useState } from 'react';
import { Mail, MessageSquare, MapPin, Send, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/joelasb99@gmail.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-1/2 h-full bg-gradient-to-r from-accent-purple/5 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-64 bg-accent-purple/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan mb-6 drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            Ponte en Contacto
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestros assets, necesitas soporte técnico o quieres discutir un proyecto personalizado? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-orbitron text-2xl font-semibold text-text-primary mb-8">Información de Contacto</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center border border-text-muted/20 text-accent-cyan shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-text-primary font-medium mb-1">Email</h4>
                  <p className="text-text-muted">soporte@trvstudio.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center border border-text-muted/20 text-accent-purple shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-text-primary font-medium mb-1">Discord / Comunidad</h4>
                  <p className="text-text-muted">Únete a nuestro servidor</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center border border-text-muted/20 text-accent-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-text-primary font-medium mb-1">Ubicación</h4>
                  <p className="text-text-muted">Trabajando globalmente desde remoto</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 border border-white/5 backdrop-blur-sm">
              <h4 className="text-text-primary font-semibold mb-2 flex items-center gap-2">
                <ExternalLink size={18} className="text-accent-cyan" />
                Tienda Oficial
              </h4>
              <p className="text-text-muted text-sm mb-4">
                Descubre todos nuestros productos y licencias directamente en nuestra tienda de Fab.
              </p>
              <a 
                href="https://www.fab.com/sellers/Jasb-DV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-surface border border-text-muted/20 text-text-primary hover:border-accent-cyan hover:text-accent-cyan transition-colors text-sm font-medium"
              >
                Visitar Fab
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
            {/* Form Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <h3 className="font-orbitron text-2xl font-semibold text-text-primary mb-8 relative z-10">Envíanos un Mensaje</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-muted">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-primary/50 border border-text-muted/20 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-primary/50 border border-text-muted/20 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-text-muted">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="_subject"
                  required
                  className="w-full bg-primary/50 border border-text-muted/20 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                  placeholder="¿En qué te podemos ayudar?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-muted">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-primary/50 border border-text-muted/20 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">¡Mensaje enviado con éxito! Te responderemos pronto.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3">
                  <AlertCircle size={20} />
                  <p className="text-sm font-medium">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all flex items-center justify-center gap-2 group/btn disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                {!isSubmitting && <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
