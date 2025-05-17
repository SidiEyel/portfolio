  'use client'
  import Image from "next/image"
  import { Button } from "@/components/ui/button"
  import { Card } from "@/components/ui/card"
  import logo from "@/assets/Logo.jpeg"
  import react from "@/assets/react-2.svg"
  import next from "@/assets/next2.svg"
  import typescript from "@/assets/typescript.svg"
  import javascript from "@/assets/javascript.svg"
  import nodejs from "@/assets/nodejs.svg"
  import strapi from "@/assets/strapi.svg"
  import supabase from "@/assets/supabase.svg"
  import postgres from "@/assets/postgres.svg"
  import mysql from "@/assets/mysql.svg"
  import flutter from "@/assets/flutter.svg"
  import mongoDB from "@/assets/mongoDB.svg"

  export const WebsiteLandingPage = () => {
    return (
      <div className="min-h-screen bg-[#0c0414] text-white">
        {/* Header */}
        <header className="container mx-auto py-6">
          <span className="text-white text-2xl font-bold">S</span>
          {/* <nav className="flex justify-end gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Work
            </Link>
          </nav> */}
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 space-y-24">
          {/* Hero Section */}
          <section className="flex flex-col items-start gap-6 sm:max-w-2xl md:max-w-full">
            <div className="flex items-center justify-center mx-auto gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
                <Image
                  src={logo}
                  alt="Profile"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-medium">
                  <span className="text-purple-400">Sidi Eyel</span>
                </h1>
                <p className="text-sm text-gray-400">
                  <span className="text-purple-400">Software Engineer</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-center w-full gap-4">
              <h2 className="text-3xl font-bold">I'm a Software Engineer!</h2>

              <p className="text-gray-400 max-w-xl">
                I specialize in building exceptional digital experiences. Currently, I'm focused on creating accessible,
                human-centered products at a company where I help clients achieve their digital goals through innovative
                solutions while maintaining best practices.
              </p>

            </div>
          </section>

          {/* Work Experience */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold">Work Experience</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experience Card 1 */}
              <Card className="bg-[#1a0b2e] border-0 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-md bg-purple-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Ingénieur en Développement et Intégration</h3>
                    <p className="text-sm text-gray-400">2024 - Present</p>
                  </div>
                </div>
              </Card>

              {/* Experience Card 2 */}
              <Card className="bg-[#1a0b2e] border-0 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-md bg-purple-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Development and implementation of software projects (Remote)</h3>
                    <p className="text-sm text-gray-400">09/2024 - 11/2024</p>
                  </div>
                </div>
              </Card>

              {/* Experience Card 3 */}
              <Card className="bg-[#1a0b2e] border-0 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-md bg-purple-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Développeur Full-Stack (Remote)</h3>
                    <p className="text-sm text-gray-400">06/2024 - 08/2024</p>
                  </div>
                </div>
              </Card>

              {/* Experience Card 4 */}
              <Card className="bg-[#1a0b2e] border-0 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-md bg-purple-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Développeur Full-Stack                   </h3>
                    <p className="text-sm text-gray-400">05/2023 - 10/2023</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Featured Project / Skills Section */}
          <section className="space-y-8">
            <div className=" p-6 bg-[#0c0414] relative overflow-hidden">
              <div className="text-center mb-12 space-y-2">
                <p className="text-xl">
                  Here you'll find a selection of my key <span className="text-purple-400">skills </span>and areas of expertise.
                </p>
                <p className="text-gray-400">They represent the tools I use to turn ideas into meaningful user experiences.</p>
              </div>

              {/* Tech Icons - First Row */}
              <div className="flex justify-center gap-6 mb-4">

                 {/* HTML */}
                <div className="w-10 h-10 rounded-md bg-[#1a0b2e] flex items-center justify-center relative z-10">
                  <span className="text-[#E34F26] font-bold">HTML</span>
                </div>

                {/* CSS */}
                <div className="w-10 h-10 rounded-md bg-[#1a0b2e] flex items-center justify-center relative z-10">
                  <span className="text-[#1572B6] font-bold">CSS</span>
                </div>

                {/* JavaScript */}
                <div className="w-10 h-10 rounded-md bg-[#1a0b2e] flex items-center justify-center relative z-10">
                  <Image src={javascript} alt="javascript" color="white" width="24" height="24" />
                </div>

                {/* TypeScript */}
                <div className="w-10 h-10 rounded-md bg-[#1a0b2e] flex items-center justify-center relative z-10">
                  <Image src={typescript} alt="typescript" color="white" width="24" height="24" />
                </div>
                
                {/* React */}
                <div className="w-10 h-10 rounded-md bg-[#1a0b2e] flex items-center justify-center relative z-10">
                 <Image src={react} alt="react" width="24" height="24" />
                </div>

                {/* nextJs */}
                <div className="w-10 h-10 rounded-md z flex items-center justify-center relative z-10">
                  <Image src={next} alt="next" color="white" width="24" height="24" />
                </div>

                {/* nodejs */}
                <div className="w-10 h-10 rounded-md bg-[#1a0b2e] flex items-center justify-center relative z-10">
                  <Image src={nodejs} alt="nodejs" color="white" width="24" height="24" />
                </div>
              </div>

              {/* Tech Icons - Second Row */}
              <div className="flex justify-center gap-6 mb-16">
                {/* Flutter */}
                <div className="w-10 h-10 rounded-md bg-[#1a0b2e] flex items-center justify-center relative z-10">
                  <Image src={flutter} alt="flutter" color="white" width="24" height="24" />
                </div>
                {/* Strapi */}
                <div className="w-10 h-10 rounded-md bg-[#2B0B3F] flex items-center justify-center relative z-10">
                  <Image src={strapi} alt="strapi" color="white" width="24" height="24" />
                </div>

                {/* Supabse */}
                <div className="w-10 h-10 rounded-md bg-[#1a0b2e] flex items-center justify-center relative z-10">
                  <Image src={supabase} alt="supabase" color="white" width="24" height="24" />
                </div>

                {/* MongoBD */}
                <div className="w-10 h-10 rounded-md bg-[#1a0b2e] flex items-center justify-center relative z-10">
                  <Image src={mongoDB} alt="mongoDB" color="white" width="24" height="24" />
                </div>

                {/* PostgreSQL */}
                <div className="w-10 h-10 rounded-md bg-[#1a0b2e] flex items-center justify-center relative z-10">
                  <Image src={postgres} alt="postgres" color="white" width="24" height="24" />
                </div>

                {/* Mysql */}
                <div className="w-10 h-10 rounded-md bg-[#1a0b2e] flex items-center justify-center relative z-10">
                  <Image src={mysql} alt="mysql" color="white" width="40" height="40" />
                </div>
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full max-w-2xl relative">
                  {/* Vertical connection lines */}
                  <div className="absolute top-[100px] left-1/4 w-px h-32 bg-gradient-to-b from-purple-500/30 to-transparent"></div>
                  <div className="absolute top-[100px] left-1/3 w-px h-40 bg-gradient-to-b from-purple-500/30 to-transparent"></div>
                  <div className="absolute top-[100px] left-1/2 w-px h-48 bg-gradient-to-b from-purple-500/30 to-transparent"></div>
                  <div className="absolute top-[100px] right-1/3 w-px h-40 bg-gradient-to-b from-purple-500/30 to-transparent"></div>
                  <div className="absolute top-[100px] right-1/4 w-px h-32 bg-gradient-to-b from-purple-500/30 to-transparent"></div>
                </div>
              </div>

              {/* Sigma Symbol with Glow */}
              <div className="flex justify-center items-center py-16 relative">
                {/* Orbital Ring */}
                <div className="absolute w-[300px] h-[100px] border-2 border-purple-500/20 rounded-[100%] transform rotate-12"></div>

                {/* Glowing Circle */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute w-full h-full rounded-full bg-purple-600/20 animate-pulse"></div>
                  <div className="absolute w-20 h-20 rounded-full bg-purple-600/30 animate-pulse"></div>
                  <div className="absolute w-16 h-16 rounded-full bg-purple-600/40 animate-pulse"></div>

                  {/* Sigma Symbol */}
                  <div className="z-10 text-4xl font-bold text-white">
                    <span className="text-white text-4xl font-bold">S</span>
                
                  </div>
                </div>

                {/* Small Tech Icons around the orbit */}
                {/* <div className="absolute top-[220px] left-[30%] w-6 h-6 rounded-full bg-[#1a0b2e] flex items-center justify-center">
                  <span className="text-[#61DAFB] text-xs">R</span>
                </div>
                <div className="absolute top-[180px] right-[30%] w-6 h-6 rounded-full bg-[#1a0b2e] flex items-center justify-center">
                  <span className="text-[#F24E1E] text-xs">F</span>
                </div>
                <div className="absolute top-[250px] right-[35%] w-6 h-6 rounded-full bg-[#1a0b2e] flex items-center justify-center">
                  <span className="text-[#3178C6] text-xs">T</span>
                </div>
                <div className="absolute top-[250px] left-[35%] w-6 h-6 rounded-full bg-[#1a0b2e] flex items-center justify-center">
                  <span className="text-[#E34F26] text-xs">H</span>
                </div> */}
              </div>
            </div>
          </section>

          {/* <section>
          <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="bg-black">

            <defs>
              <radialGradient id="glow" r="80%">
                <stop offset="0%" stop-color="#a855f7" stop-opacity="1" />
                <stop offset="100%" stop-color="#000000" stop-opacity="0" />
              </radialGradient>
            </defs>
            <circle cx="400" cy="500" r="100" fill="url(#glow)" />

            <circle cx="400" cy="500" r="100" fill="none" stroke="#a855f7" stroke-width="2" stroke-opacity="0.7" />

            <text x="400" y="510" text-anchor="middle" font-size="60" fill="white" font-family="Arial" font-weight="bold">Σ</text>

            <text x="400" y="80" text-anchor="middle" font-size="24" fill="white" font-family="Arial">
              I'm currently looking to join a 
              <tspan fill="#a855f7">cross-functional</tspan> team
            </text>
            <text x="400" y="110" text-anchor="middle" font-size="16" fill="white" font-family="Arial">
              that values improving people's lives through accessible design
            </text>

            <ellipse cx="400" cy="500" rx="250" ry="100" fill="none" stroke="#a855f7" stroke-width="1" stroke-opacity="0.2" />
            <ellipse cx="400" cy="500" rx="300" ry="150" fill="none" stroke="#a855f7" stroke-width="1" stroke-opacity="0.1" />

            <circle cx="300" cy="150" r="20" fill="#ff6363" />
            <circle cx="350" cy="130" r="20" fill="#6fcf97" />
            <circle cx="400" cy="120" r="20" fill="#56ccf2" />
            <circle cx="450" cy="130" r="20" fill="#f2994a" />
            <circle cx="500" cy="150" r="20" fill="#bb6bd9" />

            <line x1="300" y1="50" x2="400" y2="100" stroke="#a855f7" stroke-width="1" stroke-dasharray="4" />
            <line x1="350" y1="130" x2="400" y2="500" stroke="#a855f7" stroke-width="1" stroke-dasharray="4" />
            <line x1="400" y1="120" x2="400" y2="500" stroke="#a855f7" stroke-width="1" stroke-dasharray="4" />
            <line x1="450" y1="130" x2="400" y2="500" stroke="#a855f7" stroke-width="1" stroke-dasharray="4" />
            <line x1="500" y1="150" x2="400" y2="500" stroke="#a855f7" stroke-width="1" stroke-dasharray="4" />

          </svg>

          </section> */}

          {/* Download Resume Section */}
          <section className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Download My Resume</h2>
            <p className="text-gray-400">Click the button below to download my resume in PDF format.</p>
            <a
              href="/assets/resume.pdf"
              download
              className="inline-block"
            >
              <Button className="bg-purple-600 hover:bg-purple-700 transition-colors">
                Download Resume
              </Button>
            </a>
          </section>
          {/* Projects */}
          {/* <section className="space-y-16"> */}
            {/* Project 1 */}
            {/* <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">Example Project</h3>
                <p className="text-gray-400">
                  A comprehensive project showcasing my skills in frontend development, responsive design, and modern
                  UI/UX principles. This application features a clean interface with intuitive navigation and seamless
                  user experience.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-purple-400 border-purple-400">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-purple-400 border-purple-400">
                    TypeScript
                  </Badge>
                </div>
              </div>
              <div className="flex-1 bg-white/5 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Project Screenshot"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div> */}

            {/* Project 2 */}
            {/* <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4 order-1 md:order-2">
                <h3 className="text-xl font-bold">Example Project</h3>
                <p className="text-gray-400">
                  An innovative solution that demonstrates my ability to solve complex problems through elegant code and
                  thoughtful architecture. This project incorporates the latest technologies and best practices in
                  software development.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-purple-400 border-purple-400">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-purple-400 border-purple-400">
                    Tailwind
                  </Badge>
                </div>
              </div>
              <div className="flex-1 bg-white/5 rounded-lg overflow-hidden order-2 md:order-1">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Project Screenshot"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div> */}
          {/* </section> */}

          {/* Contact */}
          <section className="space-y-6 pb-12">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="text-gray-400 max-w-xl">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my
              best to get back to you!
            </p>
            <div className="space-y-2">
              <p className="text-white">
                📧 Email: <a href="mailto:sidi@example.com" className="text-purple-400 hover:underline">sidi.eyel@gmail.com</a>
              </p>
              <p className="text-white">
                📞 Phone: <a href="tel:+1234567890" className="text-purple-400 hover:underline">+222 31314923</a>
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/20">
                Get In Touch
              </Button>
            </div>
          </section>
        </main>
      </div>
    )
  }

