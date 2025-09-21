import { MetadataRoute } from 'next/server';
import { Hero } from '../../components/organisms/Hero/Hero';
import { Features } from '../../components/organisms/Features/Features';
import { Team } from '../../components/organisms/Team/Team';
import { Pricing } from '../../components/organisms/Pricing/Pricing';
import { Cta } from '../../components/organisms/Cta/Cta';
import { Footer } from '../../components/organisms/Footer/Footer';
import { Header } from '../../components/organisms/Header/Header';
import { LogoCloud } from '../../components/organisms/LogoCloud/LogoCloud';


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header 
        logoSrc="/greengarden-logo.svg" // Sostituisci con il tuo logo
        links={[
          { label: 'Servizi', href: '/servizi' },
          { label: 'Testimonianze', href: '/testimonianze' },
          { label: 'Contatti', href: '/contatti' },
        ]}
        activeLink="/"
      />
      <Hero 
        title="Il tuo giardino, la nostra cura."
        subtitle="Servizi di giardinaggio professionali per privati e aziende."
        backgroundImage="/hero-image.jpg" // Sostituisci con la tua immagine di sfondo
      />
      <Features 
        title="I nostri servizi"
        subtitle="Manutenzione accurata e progettazione creativa per il tuo spazio verde."
        features={[
          { iconName: 'check', title: 'Manutenzione Giardini', text: 'Cura regolare del tuo giardino.' },
          { iconName: 'check', title: 'Progettazione Giardini', text: 'Creazione di giardini su misura.' },
        ]}
      />
      <Team 
        title="Il nostro team"
        subtitle="Esperienza e professionalità al tuo servizio."
        members={[
          { name: 'Mario Rossi', role: 'Giardiniere esperto', imageUrl: '/team-member-1.jpg', socialLinks: [] },
          { name: 'Maria Bianchi', role: 'Architetto paesaggista', imageUrl: '/team-member-2.jpg', socialLinks: [] },
        ]}
      />
      <Pricing 
        title="I nostri piani"
        subtitle="Scegli il piano più adatto alle tue esigenze."
        plans={[
          { name: 'Base', price: '€50', description: 'Pacchetto base per la manutenzione del giardino.', features: [], ctaLabel: 'Scopri di più' },
          { name: 'Premium', price: '€100', description: 'Pacchetto premium con servizi aggiuntivi.', features: [], ctaLabel: 'Scopri di più' },
        ]}
      />
      <Cta 
        title="Pronto a iniziare?"
        subtitle="Richiedi un preventivo gratuito e senza impegno."
      />
      <LogoCloud 
        title="Partner"
        logos={[
          { src: '/partner-logo-1.svg', alt: 'Partner 1' },
          { src: '/partner-logo-2.svg', alt: 'Partner 2' },
        ]}
      />
      <Footer 
        data={{
          brand: {
            name: 'GreenGarden',
            logoSrc: '/greengarden-logo.svg',
            description: 'Servizi di giardinaggio di alta qualità.',
          },
          linkGroups: [
            { title: 'Servizi', links: [{ label: 'Manutenzione', href: '#' }, { label: 'Progettazione', href: '#' }] },
            { title: 'Azienda', links: [{ label: 'Chi siamo', href: '#' }, { label: 'Contatti', href: '#' }] },
          ],
          socialLinks: [],
        }}
      />
    </main>
  )
}

export const metadata: MetadataRoute = {
  title: 'GreenGarden - Servizi di Giardinaggio',
  description: 'Servizi di giardinaggio professionali per privati e aziende.',
}