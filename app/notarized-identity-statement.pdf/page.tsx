"use client";

import HeroImage from "@/public/contact/hero-image.webp";

export default function NotarizedIdentityStatement() {
    const pdfFilepath = '/pdf/NotarizedIdentityStatement.pdf'

  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden items-center justify-between p-0 md:p-0">
      <section
        className="w-full h-[25rem] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 mt-5">
          <div className="text-center">
            <h1 className="font-bold text-[2.25rem] xl:text-[4.8125rem] leading-normal mb-5 text-[#192033]">
                Notarized Identity Statement
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full xl:my-10 items-center bg-gray-100 3xl:container">
        <div className="flex flex-col items-center justify-center px-4 py-4 xl:px-8">
            <div style={{ width: '100%' }}>
                <object data= {pdfFilepath}
                    width="100%"
                    className="w-full h-[20rem] xl:h-[100rem]"> 
                </object>
            </div>
        </div>
      </section>

      <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
    </main>
  );
}
