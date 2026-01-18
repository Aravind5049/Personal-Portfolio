import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'

const jost = Jost({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Aravind - UI/UX Designer & Frontend Engineer | Personal Portfolio',
  description: 'UI/UX Designer and Frontend Engineer specializing in intuitive digital experiences, web, mobile, and AI-powered interfaces. Professional musician with 12+ years of experience.',
  keywords: 'UI/UX Designer, Frontend Engineer, Web Developer, React Developer, Flutter Developer, User Experience Design, Interface Design, Portfolio, Aravind',
  authors: [{ name: 'Aravind' }],
  openGraph: {
    type: 'website',
    url: 'https://yourdomain.com/',
    title: 'Aravind - UI/UX Designer & Frontend Engineer',
    description: 'UI/UX Designer and Frontend Engineer specializing in intuitive digital experiences, web, mobile, and AI-powered interfaces.',
    images: [{ url: 'https://yourdomain.com/img/thumb/profile-pic.png', width: 1200, height: 630 }],
    siteName: 'Aravind Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aravind - UI/UX Designer & Frontend Engineer',
    description: 'UI/UX Designer and Frontend Engineer specializing in intuitive digital experiences, web, mobile, and AI-powered interfaces.',
    images: ['https://yourdomain.com/img/thumb/profile-pic.png'],
  },
  robots: 'index, follow',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/Person">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
                document.body.classList.add(theme);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aravind",
              "jobTitle": "UI/UX Designer & Frontend Engineer",
              "description": "UI/UX Designer and Frontend Engineer specializing in intuitive digital experiences, web, mobile, and AI-powered interfaces. Professional musician with 12+ years of performance experience.",
              "url": "https://yourdomain.com/",
              "image": "https://yourdomain.com/img/thumb/profile-pic.png",
              "sameAs": [
                "https://www.linkedin.com/in/aravind-kanaparthi-515421bb/"
              ],
              "knowsAbout": [
                "UI/UX Design",
                "Frontend Development",
                "React",
                "Flutter",
                "User Experience Design",
                "Interface Design",
                "Web Development",
                "Mobile Development",
                "AI-powered Interfaces"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "UI/UX Designer & Frontend Engineer",
                "occupationLocation": {
                  "@type": "Place"
                },
                "skills": [
                  "UI/UX Design",
                  "Frontend Development",
                  "React",
                  "Flutter",
                  "User Experience",
                  "Interface Design"
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${jost.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

