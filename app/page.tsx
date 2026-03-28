'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import CursorEffect from '@/components/CursorEffect';
import ScrollToTop from '@/components/ScrollToTop';
import TopologyBg from '@/components/TopologyBg';
import HeroSection from '@/components/sections/HeroSection';
import QuickAccessSection from '@/components/sections/QuickAccessSection';
import EventsSection from '@/components/sections/EventsSection';
import LeaderboardSection from '@/components/sections/LeaderboardSection';
import RegistrationSection from '@/components/sections/RegistrationSection';
import CommunitySection from '@/components/sections/CommunitySection';
import FAQSection from '@/components/sections/FAQSection';
import ContactFooterSection from '@/components/sections/ContactFooterSection';

export default function Home() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden relative cursor-none">
      {/* Cursor effect */}
      <CursorEffect />

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* Topology background */}
      <TopologyBg />

      {/* Content */}
      <div className="relative z-20">
        {/* Hero */}
        <HeroSection />

        {/* Quick Access Grid */}
        <QuickAccessSection />

        {/* Upcoming Events */}
        <EventsSection />

        {/* Leaderboard */}
        <LeaderboardSection />

        {/* Registration Flow */}
        <RegistrationSection />

        {/* Community */}
        <CommunitySection />

        {/* FAQ */}
        <FAQSection />

        {/* Contact & Footer */}
        <ContactFooterSection />
      </div>
    </main>
  );
}
