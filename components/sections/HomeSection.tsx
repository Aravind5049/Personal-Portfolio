import Image from 'next/image'

export default function HomeSection() {
  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Introduction</h3>
            <h3 className="title">UI/UX & Frontend Engineer</h3>
            <p className="desc">
              I&apos;m Aravind a UI/UX Designer and Frontend Engineer who builds intuitive, scalable digital experiences across web, mobile, and AI-powered interfaces. I focus on clarity, usability, and clean implementation—turning complex ideas into products that feel simple and purposeful.
            </p>
            <Image 
              src="/img/signature.png" 
              alt="Aravind Signature"
              width={200}
              height={60}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

