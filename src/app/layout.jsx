import './globals.css';

export const metadata = {
  title: 'Sujal - UI/UX Designer',
  description: 'Portfolio of Sujal, a data-driven daredevil riding the novelty rollercoaster.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}