'use client';

import { Button } from '@/components/ui/button';
import { Share2, MessageCircle, Twitter } from 'lucide-react'; // Using MessageCircle for WhatsApp/Telegram like icon
import { useEffect, useState } from 'react';

const ShareButtons: React.FC = () => {
  const [pageUrl, setPageUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    setPageUrl(window.location.href);
    setPageTitle(document.title);
  }, []);

  const shareText = `موقع رائع للأذكار والأدعية: ${pageTitle}`;

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-primary">شارك الموقع لتعم الفائدة</h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Button 
            variant="outline" 
            className="gap-2 bg-green-500 hover:bg-green-600 text-white"
            onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + pageUrl)}`, '_blank')}
          >
            <MessageCircle className="h-5 w-5" />
            واتساب
          </Button>
          <Button 
            variant="outline" 
            className="gap-2 bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => window.open(`https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`, '_blank')}
          >
            <MessageCircle className="h-5 w-5" /> {/* Using generic message icon */}
            تليجرام
          </Button>
          <Button 
            variant="outline" 
            className="gap-2 bg-sky-500 hover:bg-sky-600 text-white"
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`, '_blank')}
          >
            <Twitter className="h-5 w-5" />
            تويتر
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShareButtons;
