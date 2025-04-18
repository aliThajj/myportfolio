import React, {  memo, useMemo } from "react";
import { Code, Award, Globe } from "lucide-react";
import Header from "../../components/ui/Header";
import ProfileImage from "./ProfileImage";
import StatCard from "./StatCard";

const AboutPage = () => {
    const { YearExperience } = useMemo(() => {
        const startDate = new Date("2021-9-1");
        const today = new Date();
        const experience = today.getFullYear() - startDate.getFullYear() -
            (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

        return {
            YearExperience: experience
        };
    }, []);


    // Memoized stats data
    const statsData = useMemo(() => [
        {
            icon: Code,
            color: "from-[#6366f1] to-[#a855f7]",
            value: '+15',
            label: "Total Projects",
            description: "Innovative web solutions crafted",
            animation: "fade-right",
        },
        {
            icon: Award,
            color: "from-[#a855f7] to-[#6366f1]",
            value: 3,
            label: "Core IT Certifications",
            description: "Focused on web development & systems",
            animation: "fade-up",
        },
        {
            icon: Globe,
            color: "from-[#6366f1] to-[#a855f7]",
            value: YearExperience,
            label: "Years of Experience",
            description: "Continuous learning journey",
            animation: "fade-left",
        },
    ], [YearExperience]);

    return (
        <div
            className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
            id="About">

            <Header title={"About Me"} subTitle={"Turning Coffee Into Code Since 2022"} />
            <div className="w-full mx-auto pt-8 sm:pt-12 relative">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                            data-aos="fade-right"
                            data-aos-duration="1000">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                                Hello, I'm
                            </span>
                            <span
                                className="block mt-3 text-gray-200"
                                data-aos="fade-right"
                                data-aos-duration="1300">
                                Ali Hajj Hussein
                            </span>
                        </h2>

                        <p
                            className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
                            data-aos="fade-right"
                            data-aos-duration="1500">
                            Front-End Developer specializing in clean, responsive web applications with a focus on modern UI/UX design, performance, and scalability. Skilled in Vue.js, React.js (Vite), Tailwind CSS, Bootstrap, Firebase, database management, and API integration. Currently freelancing while expanding expertise in React.js and taking on dynamic new projects.                        </p>

                        <a href="#Portofolio" className="w-full lg:w-auto block">
                            <button
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200">
                                <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                            </button>
                        </a>
                    </div>

                    <ProfileImage />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
                    {statsData.map((stat) => (
                        <StatCard key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(AboutPage);