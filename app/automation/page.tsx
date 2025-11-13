"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, RefreshCw, TrendingUp, Check, Clock, DollarSign } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AutomationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-primary-50 pt-20 md:pt-24 px-4 sm:px-6">
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
              className="inline-block mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-primary-50 to-emerald-50 rounded-full text-primary-700 font-semibold text-xs md:text-sm"
            >
              🤖 Notion × N8n
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary-600 via-emerald-600 to-primary-600 bg-clip-text text-transparent leading-tight px-4">
              Notion + N8n :
              <br />Automatisez tout
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-4">
              Connectez Notion à +400 applications et automatisez 80% de vos tâches
              <br className="hidden sm:block" />
              <strong className="text-gray-900">Un système qui travaille pour vous 24/7</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 md:mb-12 px-4 max-w-2xl mx-auto">
              <Button href="#contact" variant="primary" className="text-sm bg-gradient-to-r from-emerald-600 to-primary-600 w-full sm:w-auto">
                Audit gratuit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button href="#use-cases" variant="secondary" className="text-sm w-full sm:w-auto">
                Nos exemples
              </Button>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-600 px-4"
            >
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 md:w-4 md:h-4 text-emerald-600 flex-shrink-0" />
                <span>Sans code</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 md:w-4 md:h-4 text-emerald-600 flex-shrink-0" />
                <span>ROI immédiat</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 md:w-4 md:h-4 text-emerald-600 flex-shrink-0" />
                <span>Support inclus</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <Section className="bg-white">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4"
          >
            Le problème avec Notion seul
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Notion est puissant, mais limité sans automatisation
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: "📋",
              title: "Saisie manuelle répétitive",
              description: "Copier-coller entre Notion et vos outils. Mise à jour manuelle des statuts.",
            },
            {
              icon: "🔗",
              title: "Outils isolés",
              description: "Notion ne communique pas avec Gmail, Slack, votre CRM... Pas de synchro.",
            },
            {
              icon: "⏰",
              title: "Temps perdu",
              description: "Des heures sur des tâches admin qui pourraient être automatisées.",
            },
          ].map((item, index) => (
            <Card key={index} className="p-8 border-orange-100 bg-gradient-to-br from-white to-orange-50/20">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Solution Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4"
          >
            Notion × N8n : le combo parfait
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Transformez Notion en machine automatisée
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Automatisations intelligentes",
              description: "Workflows N8n qui connectent Notion à tous vos outils et automatisent vos process.",
              color: "from-amber-600 to-orange-500",
            },
            {
              icon: <RefreshCw className="w-8 h-8" />,
              title: "Synchronisation temps réel",
              description: "Les modifications se répercutent automatiquement dans Notion et vice-versa.",
              color: "from-emerald-600 to-teal-500",
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Workflows sur-mesure",
              description: "De la gestion de leads à la facturation, j'automatise ce qui vous fait perdre du temps.",
              color: "from-blue-600 to-indigo-500",
            },
          ].map((item, index) => (
            <Card key={index} className="p-8 group">
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section id="use-cases" className="bg-white">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4"
          >
            Ce que je peux automatiser
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 px-4"
          >
            Exemples concrets d'automatisations
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "🎯 Pipeline Commercial / CRM",
              items: [
                "Nouveau lead → Création auto dans Notion",
                "Email reçu → Extraction infos + ajout CRM",
                "Deal gagné → Projet créé + notif Slack",
                "Relance auto des prospects inactifs",
              ],
            },
            {
              title: "📧 Gestion Email & Communication",
              items: [
                "Email important → Sauvegarde auto dans Notion",
                "Nouvelle tâche → Email notif personnalisé",
                "Statut changé → Message Slack auto",
                "Synthèse quotidienne envoyée par email",
              ],
            },
            {
              title: "💼 Gestion de Projets",
              items: [
                "Nouveau client → Workspace projet généré",
                "Tâche terminée → MAJ statut + notif équipe",
                "Deadline proche → Rappels auto",
                "Projet fini → Rapport généré + archivage",
              ],
            },
            {
              title: "💰 Finance & Facturation",
              items: [
                "Facture payée → MAJ auto dans Notion",
                "Nouveau projet → Génération devis",
                "Fin mois → Calcul CA automatique",
                "Budget dépassé → Alerte auto",
              ],
            },
          ].map((useCase, index) => (
            <Card key={index} className="p-6 md:p-8 hover:shadow-2xl h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary-700">{useCase.title}</h3>
              <ul className="space-y-3">
                {useCase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Results Section */}
      <Section className="bg-gradient-to-br from-primary-600 to-emerald-600 text-white py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {[
            { icon: <Clock className="w-12 h-12" />, number: "80%", label: "Tâches manuelles éliminées" },
            { icon: <RefreshCw className="w-12 h-12" />, number: "24/7", label: "Système qui travaille" },
            { icon: <DollarSign className="w-12 h-12" />, number: "0", label: "Erreur humaine" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4 opacity-80">{stat.icon}</div>
              <div className="text-6xl font-bold mb-2">{stat.number}</div>
              <div className="text-emerald-100 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="contact" className="bg-gradient-to-br from-gray-900 via-primary-900 to-emerald-900 text-white py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Prêt à automatiser ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            <strong className="text-white">Audit gratuit de 30 minutes</strong> : je vous montre exactement quelles automatisations peuvent transformer votre business.
          </p>
          <Button href="mailto:contact@notion-consulting.com" variant="primary" className="text-base md:text-lg bg-gradient-to-r from-emerald-600 to-primary-600 w-full sm:w-auto">
            Réserver mon audit gratuit
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </Button>
          <p className="text-xs md:text-sm text-gray-400 mt-4 md:mt-6">
            Sans engagement • Réponse sous 24h • Devis personnalisé
          </p>
        </motion.div>
      </Section>
    </>
  );
}

