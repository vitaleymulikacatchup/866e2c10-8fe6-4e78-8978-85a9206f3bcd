"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarStyleApple navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]} logoSrc='/images/logo.svg' logoAlt='MemeMoon' brandName='MemeMoon' />
      <div id="hero" data-section="hero">
        <FrameHero title="Welcome to MemeMoon!" description="Join the fun and start your voyage into the memecoin universe!" primaryButtonText="Buy MemeMoon" secondaryButtonText="Learn More" />
      </div>
      <div id="about" data-section="about">
        <CtaAbout title="What is MemeMoon?" descriptions={["MemeMoon is a playful memecoin built on community and fun.", "Join us and enjoy unique DeFi experiences!"]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant='simple' />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics title="Tokenomics Overview" description="Understanding the essential metrics of MemeMoon." cardItems={[]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase logoSrc='/images/logo.svg' logoWidth={128} logoHeight={40} columns={[{ title: 'Quick Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }] }, { title: 'Support', items: [{ label: 'Contact Us', onClick: () => {} }, { label: 'Privacy Policy', onClick: () => {} }] }]} copyrightText="© 2023 MemeMoon. All rights reserved." onPrivacyClick={() => {}} />
      </div>
    </SiteThemeProvider>
  );
}