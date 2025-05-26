import Link from 'next/link';

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
        {/* Social media icons removed as per user request */}
        <p className="text-xs">
          &copy; {new Date().getFullYear()} نَجَاتُكَ بِيَدِكَ. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
