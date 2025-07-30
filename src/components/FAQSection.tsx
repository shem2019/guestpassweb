import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: "How quickly can we get GuestPass set up for our estate?",
      answer: "GuestPass can be set up in under 15 minutes. Our team provides guided onboarding, and you'll receive access to your dashboard immediately after signup. The mobile app can be downloaded and configured the same day."
    },
    {
      question: "What happens if a visitor doesn't have a smartphone for QR codes?",
      answer: "GuestPass supports multiple entry methods. Visitors can use traditional registration at the gate, or hosts can pre-register them manually. Our system is designed to be inclusive and accommodate all types of visitors."
    },
    {
      question: "How secure is our visitor data?",
      answer: "We use bank-grade encryption and follow ISO 27001 security standards. All data is encrypted in transit and at rest. We're GDPR compliant and regularly undergo security audits to ensure your data remains protected."
    },
    {
      question: "Can we customize GuestPass to match our estate's branding?",
      answer: "Yes! Professional and Enterprise plans include custom branding options. You can add your logo, customize colors, and even use your own domain for the guest registration portal."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 support for all plans. Basic plans include email support, Professional plans get priority support, and Enterprise customers have access to phone support and a dedicated account manager."
    },
    {
      question: "How does the OTP exit validation work?",
      answer: "When a visitor is ready to leave, the host receives an OTP (One-Time Password) via SMS or the mobile app. The visitor presents this code at the exit point for verification, ensuring secure and authorized departures."
    },
    {
      question: "Can we integrate GuestPass with existing security systems?",
      answer: "Yes, Enterprise plans include API access and custom integrations. We can work with your existing access control systems, CCTV systems, and other security infrastructure."
    },
    {
      question: "What if we need to cancel our subscription?",
      answer: "You can cancel anytime with no penalties. We offer a 14-day free trial, and if you're not satisfied, we provide a 30-day money-back guarantee. Your data remains accessible for 90 days after cancellation."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about GuestPass. Can't find what you're looking for? 
              <a href="#" className="text-primary hover:underline ml-1">Contact our support team</a>.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help you get the most out of GuestPass.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="font-semibold">Email Support</div>
                  <div className="text-primary">support@guestpass.com</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">Phone Support</div>
                  <div className="text-primary">+234 (0) 800 GUEST-PASS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}