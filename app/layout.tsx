import '@/app/ui/global.css';
import { inter, rubikWetPaint } from '@/app/ui/fonts';

type RootLayoutProps = {
  children: React.ReactNode;
};


export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>Hi App{children}</body>
    </html>
  );
}

