wget https://defense-arab.com/vb/attachments/670328/ -O public/preview.jpg 
شارك ذكرياتك مع من تحب!
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Open Graph Tags */}
        <meta property="og:title" content="Remembrances - موقع الذكريات" />
        <meta property="og:description" content="شارك ذكرياتك مع من تحب!" />
        <meta property="og:image" content="https://defense-arab.com/vb/attachments/670328/ -O public/preview.jpg " />
        <meta property="og:url" content="https://defense-arab.com/vb/attachments/670328/ -O public/preview.jpg " />
        <meta property="og:type" content="website" />
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Remembrances - موقع الذكريات" />
        <meta name="twitter:description" content="شارك ذكرياتك مع من تحب!" />
        <meta name="twitter:image" content="https://remembrances-1.vercel.app/preview.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
