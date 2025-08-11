import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Particles } from "../components/Particles";

const Hero = () => {
    return (
        <section  id="home" className="flex items-start justify-center min-h-screen overflow-hidden c-space">
             <Particles
                    className="absolute inset-0 -z-50"
                    quantity={100}
                    ease={80}
                    color={"#ffffff"}
                    refresh
                  />
            <HeroText />
            <ParallaxBackground />
            <figure className="absolute inset-0" style={{ width: '100vw', height: '100vw' }}>
        </section>
    );
};
export default Hero;
