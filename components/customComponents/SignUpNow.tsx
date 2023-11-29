"use client"

import HomeImage1 from "../../public/home/1.webp"
import GetReferral from "./GetReferral/ViralLoopsForm"

export default function SignUpNow () {

    return (
        <div className="flex flex-col gap-5 p-3 md:p-6 rounded-md shadow-md items-center justify-center w-[20.875rem] xl:w-[66.875rem] max-h-[30rem] xl:h-[45rem]"
            style={{
                backgroundImage: `url(${HomeImage1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <p className="text-[#192033] text-[1.5rem] xl:text-[2.5rem] font-medium leading-normal text-center max-w-[50.75rem] max-h-[6.73569rem]">
                Ready to be a part of AI's next (d)evolution?
                <br />
                Sign up now.
            </p>
            <div className="flex">
                <GetReferral />
            </div>
        </div>
    );
}