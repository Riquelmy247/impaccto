import { siteData } from '../data/siteData'

const icons = [
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-800 mb-4">
            Por que nos escolher?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nosso compromisso é com o seu bem-estar e desenvolvimento
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {siteData.diferenciais.map((diferencial, index) => (
            <div
              key={diferencial.id}
              className="relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100 hover:border-accent-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center mb-4 group-hover:bg-accent-500 group-hover:text-primary-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons[index] || icons[0]} />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-primary-800 mb-2">
                {diferencial.titulo}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {diferencial.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
