import { locales } from '../i18n';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}