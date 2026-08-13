import './App.css';
import {
  AboutSection,
  CoverageSection,
  CtaSection,
  Footer,
  Header,
  HeroSection,
  LocationSection,
  ServicesSection,
  TeamSection,
  Testimonies,
} from './components/layout';
import { dataKinesiologo } from './data/dataKinesiologo';

function App() {
  const {
    header,
    hero,
    about,
    clinicName,
    ctaSection,
    footer,
    location,
    logo,
    whatsAppNumber,
    services,
    testimonies,
    team,
    coverages,
  } = dataKinesiologo;

  return (
    <div className='App'>
      <Header data={header} logo={logo} clinicName={clinicName} />
      <HeroSection data={hero} />
      <TeamSection data={team} />
      <CoverageSection data={coverages} />
      <ServicesSection data={services} />
      <AboutSection data={about} />
      <Testimonies data={testimonies} />
      <LocationSection data={location} />
      <CtaSection data={ctaSection} />
      <Footer name={'Kinesis'} logo={logo} clinicName={clinicName} />
    </div>
  );
}

export default App;
