import { BannerCta } from '@/(core)/widgets/landing/landing/BannerCta';
import { CalculatorSection } from '@/(core)/widgets/landing/landing/CalculatorSection';
import { HeroArckat } from '@/(core)/widgets/landing/landing/HeroArckat';
import { MissionCta } from '@/(core)/widgets/landing/landing/MissionCta';
import { PlatformFuture } from '@/(core)/widgets/landing/landing/PlatformFuture';
import { SiteFooter } from '@/(core)/widgets/landing/landing/SiteFooter';
import { StandardsSplit } from '@/(core)/widgets/landing/landing/StandardsSplit';
import { TariffsSection } from '@/(core)/widgets/landing/landing/TariffsSection';
import { ValuesFour } from '@/(core)/widgets/landing/landing/ValuesFour';

const Landing = () => {
  return (
    <div>
      <HeroArckat />
      <ValuesFour />
      <CalculatorSection />
      <MissionCta />
      <PlatformFuture />
      <TariffsSection />
      <StandardsSplit />
      <BannerCta />
      <SiteFooter />
    </div>
  );
};

export default Landing;
