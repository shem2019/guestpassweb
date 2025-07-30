import { CheckCircle, CreditCard, Users, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface HowToGetSectionProps {
  onGetStarted: () => void;
}

export function HowToGetSection({ onGetStarted }: HowToGetSectionProps) {
  const steps = [
    {
      step: 1,
      icon: CreditCard,
      title: "Pick Your Plan",
      description: "Choose from Basic, Professional, or Enterprise plans based on your estate's needs.",
      details: ["Compare features and pricing", "No setup fees", "14-day free trial"]
    },
    {
      step: 2,
      icon: Users,
      title: "Register & Begin Trial",
      description: "Sign up for your free trial and get immediate access to your dashboard.",
      details: ["Instant account activation", "No credit card required", "Full feature access"]
    },
    {
      step: 3,
      icon: CheckCircle,
      title: "Contact Onboarding Team",
      description: "Our specialists will help you configure GuestPass for your specific requirements.",
      details: ["Dedicated setup assistance", "Custom configuration", "Training for your team"]
    },
    {
      step: 4,
      icon: Smartphone,
      title: "Download Android App",
      description: "Install the GuestPass mobile app for on-the-go visitor management.",
      details: ["Available on Google Play", "Real-time notifications", "Offline capability"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How to Get GuestPass
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started with GuestPass in just four simple steps. We'll guide you through the entire process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="h-full border-border hover:border-primary/20 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                    
                    <ul className="space-y-2 text-sm">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Estate?</h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of estates already using GuestPass for seamless visitor management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={onGetStarted} size="lg" className="bg-primary hover:bg-primary/90 px-8">
                  Start Your Free Trial
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                  Schedule a Demo
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                <span>✓ 14-day free trial</span>
                <span>✓ No credit card required</span>
                <span>✓ Setup in 15 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}