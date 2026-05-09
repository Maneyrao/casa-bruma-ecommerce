import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ScrollToTop } from '../components/ScrollToTop';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#fbf6ee] text-[#231c18] flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
