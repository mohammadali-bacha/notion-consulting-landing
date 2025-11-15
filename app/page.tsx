"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, Users, Target, TrendingUp, MessageSquare } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 pt-20 md:pt-24 px-4 sm:px-6">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 bg-primary-50 rounded-full text-primary-700 font-semibold text-xs md:text-sm"
            >
              ✨ Solution complète Notion + Automatisation
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-primary-900 to-gray-900 bg-clip-text text-transparent leading-tight px-4">
              Transformez le chaos
              <br />en système performant
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-4">
              Votre équipe perd 40% de son temps à chercher l'information ?
              <br className="hidden sm:block" />
              <strong className="text-gray-900">Notion peut devenir votre avantage compétitif.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 md:mb-12 px-4 max-w-2xl mx-auto">
              <Button href="#contact" variant="primary" className="text-sm w-full sm:w-auto">
                Audit gratuit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button href="#services" variant="secondary" className="text-sm w-full sm:w-auto">
                Nos services
              </Button>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-600 px-4"
            >
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 md:w-4 md:h-4 text-primary-600 flex-shrink-0" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 md:w-4 md:h-4 text-primary-600 flex-shrink-0" />
                <span>ROI garanti</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 md:w-4 md:h-4 text-primary-600 flex-shrink-0" />
                <span>Support 3 mois inclus</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-primary-600 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Logo Trust Bar */}
      <Section className="py-16 bg-white border-y border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Ils nous font confiance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
            <a href="https://joinformal.com" target="_blank" rel="noopener noreferrer" className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/Group 32 (2).png" alt="Joinformal" className="h-10 object-contain" />
            </a>
            <a href="https://naali.fr/" target="_blank" rel="noopener noreferrer" className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/Sans_titre_2_svg_6c08ca81-193f-4186-8808-9e5abad40358.avif" alt="Naali" className="h-10 object-contain" />
            </a>
            <a href="https://www.sweal.fr/" target="_blank" rel="noopener noreferrer" className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/654b6d1148049e2a9407700d_logo-sweal.png" alt="Sweal" className="h-10 object-contain" />
            </a>
            <a href="https://idariliving.com/" target="_blank" rel="noopener noreferrer" className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/logo_iDARi_noir_transparent.png" alt="iDari" className="h-10 object-contain" />
            </a>
            <a href="https://www.smart-impulsion.com/" target="_blank" rel="noopener noreferrer" className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/Screenshot 2025-11-09 at 14.12.51.png" alt="Smart Impulsion" className="h-10 object-contain" />
            </a>
            <a href="https://entrepreneursdanslaville.com" target="_blank" rel="noopener noreferrer" className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/logoedlv2023-3.png.webp" alt="Entrepreneurs dans la ville" className="h-10 object-contain" />
            </a>
            <a href="https://em-lyon.com/fr" target="_blank" rel="noopener noreferrer" className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/emlyon-logo-seul-rvb-1.png" alt="emlyon business school" className="h-10 object-contain" />
            </a>
            <a href="https://leadpanda.fr" target="_blank" rel="noopener noreferrer" className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img src="/www.leadpanda.fr_.png" alt="LeadPanda" className="h-10 object-contain" />
            </a>
          </div>
        </motion.div>
      </Section>

      {/* Certification Section */}
      <Section className="bg-gradient-to-br from-primary-50/50 to-white py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications Notion
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expertise certifiée officiellement par Notion
            </p>
          </div>

          {/* Badges Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Badge 1: Academy Essentials */}
            <div className="bg-white rounded-2xl shadow-lg border border-primary-100 p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <img
                    src="/notion-academy-badge.png"
                    alt="Notion Academy Essentials"
                    className="w-32 md:w-40 h-auto object-contain"
                  />
                </div>
                
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-primary-50 rounded-full">
                  <span className="text-xl">✓</span>
                  <span className="text-xs font-semibold text-primary-700">Certifié</span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Academy Essentials
                </h4>
                
                <p className="text-sm text-gray-600 mb-4">
                  Maîtrise des fondamentaux Notion
                </p>
                
                <a
                  href="https://verify.skilljar.com/c/isxjdrsku599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors font-semibold text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Vérifier
                </a>
              </div>
            </div>

            {/* Badge 2: Workflows */}
            <div className="bg-white rounded-2xl shadow-lg border border-primary-100 p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <img
                    src="/badge-notion-workflows.png"
                    alt="Notion Workflows"
                    className="w-32 md:w-40 h-auto object-contain"
                  />
                </div>
                
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-primary-50 rounded-full">
                  <span className="text-xl">✓</span>
                  <span className="text-xs font-semibold text-primary-700">Certifié</span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Notion Workflows
                </h4>
                
                <p className="text-sm text-gray-600 mb-4">
                  Expert en automatisations Notion
                </p>
                
                <a
                  href="https://verify.skilljar.com/c/vu8xpf3m6qbb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors font-semibold text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Vérifier
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Problem Section */}
      <Section id="problemes" className="bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4"
          >
            Les symptômes d'un système défaillant
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
          >
            Ces problèmes vous coûtent des milliers d'euros par mois
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: "🔍",
              title: "Information introuvable",
              description: "Vos données sont dispersées dans 10 outils. Chaque recherche devient une perte de temps critique.",
              stat: "2h/jour perdues",
            },
            {
              icon: "⏱️",
              title: "Process chaotiques",
              description: "Aucune standardisation. Chaque membre travaille différemment. Impossible de scaler.",
              stat: "40% du temps perdu",
            },
            {
              icon: "💸",
              title: "Coûts exponentiels",
              description: "Multiples abonnements SaaS qui ne communiquent pas. Budget qui explose sans ROI clair.",
              stat: "800€+/mois gaspillés",
            },
          ].map((item, index) => (
            <Card key={index} className="p-8 border-red-100 bg-gradient-to-br from-white to-red-50/30">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
              <div className="inline-block px-4 py-2 bg-red-100 rounded-full text-red-700 font-semibold text-sm">
                {item.stat}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="services" className="bg-white">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4"
          >
            La solution : un système Notion sur-mesure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Transformez Notion en moteur de productivité pour votre organisation
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Architecture & Setup",
              description: "Je construis votre hub centralisé : bases de données liées, workflows optimisés, structure évolutive.",
              benefit: "Gagnez 15h/semaine par équipe",
              color: "from-purple-600 to-purple-500",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Formation & Adoption",
              description: "Formation interactive, documentation vivante et accompagnement personnalisé pour chaque membre.",
              benefit: "100% autonomes en 2 semaines",
              color: "from-blue-600 to-blue-500",
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "Automatisation N8n",
              description: "Intégrations avec vos outils (Slack, CRM, Google) et automatisations intelligentes.",
              benefit: "Éliminez 70% des tâches manuelles",
              color: "from-green-600 to-green-500",
            },
          ].map((item, index) => (
            <Card key={index} className="p-8 group">
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
              <div className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-700 font-semibold text-sm">
                {item.benefit}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-500 text-white py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
          {[
            { number: "15h", label: "Économisées par semaine" },
            { number: "95%", label: "Taux d'adoption" },
            { number: "2 mois", label: "ROI moyen" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-6xl font-bold mb-2">{stat.number}</div>
              <div className="text-primary-100 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4"
          >
            Résultats concrets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 px-4"
          >
            Ce que disent nos clients
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              quote: "Avant, 2h/jour perdues à chercher l'info. Maintenant, tout centralisé, accessible en 2 clics. ROI immédiat.",
              author: "Marie Chen",
              role: "CEO, Scale-up 50 pers.",
              avatar: "MC",
            },
            {
              quote: "Onboarding passé de 3 semaines à 5 jours. Notre doc technique est vivante et toujours à jour.",
              author: "Pierre Laurent",
              role: "CTO, SaaS B2B",
              avatar: "PL",
            },
            {
              quote: "6 outils fermés. Notion + N8n = 800€/mois économisés. Plus aucune synchro manuelle.",
              author: "Sophie Bernard",
              role: "Ops Manager",
              avatar: "SB",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="p-8" hover={false}>
              <MessageSquare className="w-10 h-10 text-primary-500 mb-4" />
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="contact" className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Prêt à reprendre le contrôle ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            <strong className="text-white">Audit gratuit de 30 minutes</strong> : j'analyse votre situation et vous montre exactement comment Notion peut transformer votre organisation.
          </p>
          <Button href="mailto:contact@notion-consulting.com" variant="primary" className="text-base md:text-lg w-full sm:w-auto">
            Réserver mon audit gratuit
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </Button>
          <p className="text-xs md:text-sm text-gray-400 mt-4 md:mt-6">
            Disponibilités limitées • Réponse sous 24h • Sans engagement
          </p>
        </motion.div>
      </Section>
    </>
  );
}

