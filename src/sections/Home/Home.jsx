import React, { useState, useEffect, memo } from "react"
import { Mail, ExternalLink } from "lucide-react"
import LottieAnimation from "./LottieAnimation";
import MainTitle from "./MainTitle";
import StatusBadge from "./StatusBadge";
import SocialMedia from "./SocialMedia";
import TypingEffect from "./TypingEffect";

// Memoized Components
const TechStack = memo(({ tech }) => (
    <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
        {tech}
    </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
    <a href={href}>
        <button className="group relative w-[160px]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
            <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                    <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                        {text}
                    </span>
                    <Icon className={`w-4 h-4 text-gray-200 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
                </span>
            </div>
        </button>
    </a>
));

const TECH_STACK = ["React", "Javascript", "Vue.js", "Tailwind"];

const Home = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);


    return (
        <div className="min-h-screen bg-[#030014] overflow-hidden sm:mt-6 md:mt-10" id="Home">
            <div className={`relative z-10 lg:pl-24 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <div className="container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen">
                    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
                        {/* Left Column */}
                        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
                            data-aos="fade-right"
                            data-aos-delay="200">
                            <div className="space-y-4 sm:space-y-6">
                                <StatusBadge />
                                <MainTitle />

                                {/* Typing Effect */}
                                <TypingEffect />

                                {/* Description */}
                                <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                                    data-aos="fade-up"
                                    data-aos-delay="1000">
                                    Designing intuitive, responsive, and visually appealing websites for seamless digital experiences.
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="1200">
                                    {TECH_STACK.map((tech, index) => (
                                        <TechStack key={index} tech={tech} />
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                                    <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                                    <CTAButton href="#Contact" text="Contact" icon={Mail} />
                                </div>

                                {/* Social Media */}
                                <SocialMedia />
                            </div>
                        </div>

                        {/* Right Column - Lottie Animation */}
                        <LottieAnimation />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Home);