import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://sidieyel.vercel.app'),
  title: {
    default: 'Sidi Eyel | Software Engineer',
    template: '%s | Sidi Eyel',
  },
  description:
    'Portfolio of Sidi Abdellah Mohamed Hassane Eyel, a software engineer focused on full-stack development, AI integration, automation, data-driven applications, backend systems, and digital transformation.',
  keywords: [
    'Sidi Eyel',
    'Software Engineer',
    'Full-stack Developer',
    'Next.js',
    'React',
    'Django REST Framework',
    'AI integration',
    'Automation',
    'Digital transformation',
  ],
  authors: [{ name: 'Sidi Abdellah Mohamed Hassane Eyel' }],
  openGraph: {
    title: 'Sidi Eyel | Software Engineer',
    description:
      'Full-stack software engineer building scalable web platforms, backend systems, dashboards, automation workflows, and AI-ready business applications.',
    url: 'https://sidieyel.vercel.app/en',
    siteName: 'Sidi Eyel Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/en',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
