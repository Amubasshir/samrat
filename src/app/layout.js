import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Nazmul Samrat | Premium Tax Services',
  description:
    'Expert Income Tax Lawyer offering tax filing, VAT services, NBR compliance, company registration, legal advisory, audit support & tax consultancy in Bangladesh.',
  keywords: [
    'Income Tax Lawyer Bangladesh',
    'VAT Lawyer Bangladesh',
    'NBR Tax Consultant',
    'Company Registration Services',
    'Tax Filing Bangladesh',
    'Corporate Tax Bangladesh',
    'Legal Tax Advisor Dhaka',
    'Tax Consultancy Bangladesh',
    'Tax Return Filing Bangladesh',
    'Tax Audit Support Bangladesh',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
