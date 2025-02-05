import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const metadata = {
    title: 'Du prepaid plans',
    description: 'Du prepaid plans',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
