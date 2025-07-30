import { Check, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

interface PricingSectionProps {
  onGetStarted: () => void;
}

export function PricingSection({ onGetStarted }: PricingSectionProps) {
  const plans = [
    {
      name: "Basic",
      price: "₦50,000",
      period: "/month",
      description: "Perfect for small residential estates",
      features: [
        "Up to 50 houses",
        "2 admin users",
        "Basic visitor registration",
        "QR code pre-admits",
        "Mobile app access",
        "Email support"
      ],
      limitations: "50 houses max",
      popular: false
    },
    {
      name: "Professional",
      price: "₦120,000",
      period: "/month",
      description: "Ideal for medium to large estates",
      features: [
        "Up to 200 houses",
        "5 admin users",
        "Advanced visitor management",
        "OTP exit validation",
        "Analytics & reporting",
        "SMS notifications",
        "Priority support",
        "Custom branding"
      ],
      limitations: "200 houses max",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large estates and property groups",
      features: [
        "Unlimited houses",
        "Unlimited admin users",
        "Advanced security features",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "White-label solution",
        "API access",
        "Custom training"
      ],
      limitations: "No limits",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing options designed to grow with your estate. Start with a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-2">{plan.limitations}</div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={onGetStarted} 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80 text-foreground'}`}
                  size="lg"
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <span>✓ No credit card required</span>
            <span>✓ Setup in under 15 minutes</span>
            <span>✓ Dedicated onboarding support</span>
          </div>
        </div>
      </div>
    </section>
  );
}