import React, {memo} from "react";

import {  Sparkles } from "lucide-react";

const Header = memo(({title , subTitle}) => (
    <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <div className="inline-block relative group">
            <h2
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                data-aos="zoom-in-up"
                data-aos-duration="600">
                    {title}
            </h2>
        </div>
        <p
            className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="800">
            <Sparkles className="w-5 h-5 text-purple-400" />
            {subTitle}
            <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
    </div>
));

export default Header