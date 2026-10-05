import './globals.css';

export const metadata = {
  title: 'Marydelle D. Rebarter | IT Portfolio',
  description: 'Portfolio of Marydelle D. Rebarter, BS Information Technology student and aspiring IT professional.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
