'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import styles from '../app/page.module.css'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio Web',
  description: 'Esta página es un portafolio web de Luis Fernando Rodriguez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <><Navbar /><div className={inter.className}>
      {children}
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    </div></>
  )
}

