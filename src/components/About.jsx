import { siteData } from '../data/siteData'

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-800 mb-6">
            {siteData.sobre.titulo}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {siteData.sobre.texto}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-medium">
              {siteData.cidade}
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-primary-800 font-medium">
              {siteData.servicoPrincipal}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
