import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { AnimatedScrollingFeatures } from './AnimatedScrollingFeatures';
import { WhyChooseSection } from './WhyChooseSection';
import { TestimonialsSection } from './TestimonialsSection';
import { PricingSection } from './PricingSection';
import { FAQSection } from './FAQSection';
import { HowToGetSection } from './HowToGetSection';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

type UserRole = 'admin' | 'host' | null;
type CurrentPage = 'home' | 'features' | 'pricing' | 'faq';

interface LandingPageLayoutProps {
  currentPage: CurrentPage;
  onLogin: (role: UserRole) => void;
  onNavigate: (section: string) => void;
  onGetStarted: () => void;
}

export function LandingPageLayout({ currentPage, onLogin, onNavigate, onGetStarted }: LandingPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header onLogin={onLogin} onNavigate={onNavigate} />
      
      {/* Home page content */}
      {currentPage === 'home' && (
        <>
          <HeroSection onGetStarted={onGetStarted} />
          <FeaturesSection />
          <AnimatedScrollingFeatures />
          <WhyChooseSection />
          <TestimonialsSection />
          <PricingSection onGetStarted={onGetStarted} />
          <HowToGetSection onGetStarted={onGetStarted} />
          <FAQSection />
        </>
      )}

      {/* Individual sections */}
      {currentPage === 'features' && (
        <div className="pt-16">
          <FeaturesSection />
          <AnimatedScrollingFeatures />
          <WhyChooseSection />
        </div>
      )}

      {currentPage === 'pricing' && (
        <div className="pt-16">
          <PricingSection onGetStarted={onGetStarted} />
          <HowToGetSection onGetStarted={onGetStarted} />
        </div>
      )}

      {currentPage === 'faq' && (
        <div className="pt-16">
          <FAQSection />
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
}