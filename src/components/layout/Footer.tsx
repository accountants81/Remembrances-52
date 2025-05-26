import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react'; // Example icons

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <div className="mb-4">
          <p className="text-sm">
            لو استفدت من هذا الموقع، فالرجاء الدعاء للفريق الذي عمل عليه بدعوة طيبة.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-sm">
            تم التطوير بواسطة: فريق AAAMO
          </p>
        </div>
        <div className="flex justify-center space-x-4 rtl:space-x-reverse mb-4">
           {/* Replace with actual social links */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} روضة الذكر. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
