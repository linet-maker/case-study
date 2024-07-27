import 'bootstrap/dist/css/bootstrap.css';
import '../globals.css';

export const metadata = {
  title: 'hello ⚡',
  description: 'My personal portfolio',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
