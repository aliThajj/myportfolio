import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottieAnimation() {
    const [animationUrl, setAnimationUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLottie = async () => {
            try {
                const response = await fetch(
                    "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie"
                );
                if (!response.ok) throw new Error("Network error");

                const blob = await response.blob();
                const objectUrl = URL.createObjectURL(blob);
                setAnimationUrl(objectUrl);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch Lottie:", error);
                setLoading(false);
            }
        };

        fetchLottie();
    }, []);

    return (
        <div
            className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="600">
            <div className="relative w-full opacity-90">
                {/* Background gradient blur */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out opacity-20 scale-100" />

                <div className="relative z-10 w-full opacity-90 transform transition-transform duration-500 scale-100">
                    {loading || !animationUrl ? (
                        //  Skeleton
                        <div className="w-full h-[200px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-indigo-400/10 animate-pulse rounded-3xl" />
                    ) : (
                        <DotLottieReact
                            src={animationUrl}
                            loop
                            autoplay
                            style={{ width: "100%", height: "100%" }}
                            className="w-full h-full transition-all duration-500 scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
                        />
                    )}
                </div>

                {/* Extra blurred background animation */}
                <div className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 scale-100" />
                </div>
            </div>
        </div>
    );
}
