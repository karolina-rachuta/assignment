import { Poppins, Open_Sans } from 'next/font/google'
import '@/globals.css'
import '@mdi/font/css/materialdesignicons.min.css'

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

const open_sans = Open_Sans({
    variable: '--font-open_sans',
    subsets: ['latin'],
    weight: ['700']
})

export const metadata = {
    title: 'Du Prepaid Plans',
    description: 'Du prepaid plans'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={` ${open_sans.className}${poppins.className} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
