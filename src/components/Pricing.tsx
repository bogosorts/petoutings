import { experiences, addOns } from '../data/experiences'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sunset-600 font-semibold text-sm uppercase tracking-wider mb-4">Simple Pricing</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-sand-900 mb-6">Adventures for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-500 to-forest-500">Every Pup</span></h2>
          <p className="text-lg text-sand-600 leading-relaxed">Per-pet pricing with everything included. No hidden fees, no surprises.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${index === 0 ? 'bg-gradient-to-br from-ocean-500 to-ocean-600 text-white shadow-xl' : 'bg-white border-2 border-sand-200 hover:shadow-xl'}`}>
              {index === 0 && <div className="absolute -top-3 right-4"><span className="bg-sunset-500 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</span></div>}
              <div className="mb-4"><h3 className={`font-heading text-lg font-bold ${index === 0 ? 'text-white' : 'text-sand-900'}`}>{exp.name}</h3><p className={`text-sm ${index === 0 ? 'text-white/80' : 'text-sand-500'}`}>{exp.duration}</p></div>
              <div className="mb-4"><div className="flex items-baseline gap-1"><span className={`text-3xl font-heading font-bold ${index === 0 ? 'text-white' : 'text-sand-900'}`}>${exp.price}</span><span className={`text-sm ${index === 0 ? 'text-white/70' : 'text-sand-500'}`}>/pet</span></div></div>
              <ul className={`space-y-2 text-sm mb-6 ${index === 0 ? 'text-white/90' : 'text-sand-600'}`}>
                {['Door-to-door pickup', 'Treats & water', 'Post-trip cleanup', 'Photo updates'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className={`w-4 h-4 ${index === 0 ? 'text-white' : 'text-forest-500'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#book" className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${index === 0 ? 'bg-white text-ocean-600 hover:bg-sand-50' : 'bg-gradient-to-r from-forest-500 to-forest-600 text-white hover:shadow-lg'}`}>Book Now</a>
            </div>
          ))}
        </div>
        <div className="bg-sand-50 rounded-2xl p-8 mb-16">
          <h3 className="font-heading text-xl font-bold text-sand-900 mb-6 text-center">Optional Add-Ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {addOns.map((addon) => (
              <div key={addon.id} className="bg-white rounded-xl p-6 border border-sand-200">
                <div className="flex items-start justify-between mb-3"><h4 className="font-semibold text-sand-900">{addon.name}</h4><span className="font-bold text-sunset-600">+${addon.price}</span></div>
                <p className="text-sm text-sand-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-forest-500 to-ocean-500 rounded-2xl p-8 text-white text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Multi-Pet Discount</h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">Bringing more than one furry friend? Get 10% off each additional pet on the same booking!</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['Free cancellation 24hrs before', 'Same pickup for multiple pets', 'Temperament-matched groups'].map((item, i) => (
              <div key={i} className="flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
