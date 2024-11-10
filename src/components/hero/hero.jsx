import HeroIntro from "./hero-intro";
import HeroIntroImg from "./hero-intro-img";

const Hero = () => {
  return (
    <div className="flex items-center justify-between px-20 py-24">
      <HeroIntro />
      <HeroIntroImg />
    </div>
  );
};
export default Hero;
