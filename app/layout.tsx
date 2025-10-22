import '@/app/ui/global.css';
import { inter, rubikWetPaint } from '@/app/ui/fonts';
import { ThemeProvider } from '@/app/contexts/theme-context';

type RootLayoutProps = {
  children: React.ReactNode;
};


export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} `} suppressHydrationWarning>
        <ThemeProvider>
          Hi App{children}
        </ThemeProvider>
      </body>
    </html>
  );
}

