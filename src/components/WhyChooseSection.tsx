import { CheckCircle, Clock, Shield, Zap, Users, Award } from 'lucide-react';
import { Badge } from './ui/badge';

export function WhyChooseSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get your visitor management system up and running in under 15 minutes."
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Military-grade encryption and security protocols protect your data."
    },
    {
      icon: Clock,
      title: "99.9% Uptime Guarantee",
      description: "Reliable service you can count on, backed by our uptime guarantee."
    },
    {
      icon: Users,
      title: "24/7 Expert Support",
      description: "Our dedicated support team is always available to help you succeed."
    }
  ];

  const trustBadges = [
    "Trusted by 10+ Estates",
    "500K+ Visitors Processed",
    "99.9% Customer Satisfaction",
    "ISO 27001 Certified"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Why Choose GuestPass?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join hundreds of satisfied estates who trust GuestPass for their visitor management needs.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Trusted by Industry Leaders</h4>
                <div className="flex flex-wrap gap-3">
                  {trustBadges.map((badge, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <Award className="w-4 h-4 mr-2" />
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">847,532</div>
                    <div className="text-muted-foreground">Visitors Successfully Managed</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-primary">10+</div>
                      <div className="text-sm text-muted-foreground">Estates</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-accent">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-accent">5⭐</div>
                      <div className="text-sm text-muted-foreground">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}