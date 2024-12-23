import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1F1D17] text-[#F3E1B3] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">About IEEE SB CE Munnar</h3>
            <p className="text-xs sm:text-sm leading-relaxed opacity-80">
              Established in 2005, IEEE SB College of Engineering Munnar hosts four IEEE technical society student chapters and a women in engineering affinity group. With active participation from students across CSE, ECE, EEE, and ME departments, we are committed to fostering technical and creative skills among students.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Evensia 5</h3>
            <p className="text-xs sm:text-sm leading-relaxed opacity-80">
              Evensia 5 continues the legacy of innovation and impact, bringing together technology, culture, and humanity. Join us for this celebrated technical symposium that promises learning, innovation, and collaboration.
            </p>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 place-items-center">
            <div className="w-40 lg:w-32">
              <Image
                src="/IEEE-CS_LogoTM-white (3).png"
                alt="IEEE CS Logo"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <div className="w-40 lg:w-32">
              <Image
                src="/logo-white.png"
                alt="IEEE Logo"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <div className="w-40 lg:w-32">
              <Image
                src="/SB logo color.png"
                alt="IEEE SB Logo"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 sm:pt-8 border-t border-[#F3E1B3]/20 text-center">
          <p className="text-xs sm:text-sm opacity-80">
            © {new Date().getFullYear()} Evensia 5. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}