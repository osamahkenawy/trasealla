import { Manrope, Work_Sans, Kalam } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Turmet - Travel & Tour Agency NextJS Template',
    template: '%s | Turmet - Travel & Tour Agency NextJS Template',
  },
  description: 'Turmet - Travel & Tour Agency NextJS Template',
  openGraph: {
    title: 'Turmet - Travel & Tour Agency NextJS Template',
    description: 'Turmet - Travel & Tour Agency NextJS Template',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${manrope.variable} ${work_sans.variable} ${kalam.variable}`}>
        {children}
      </body>
    </html>
  );
}
