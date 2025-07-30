import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 rounded-full w-12 h-12 p-0 shadow-lg"
      size="icon"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
}