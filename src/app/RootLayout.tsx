import { anton, inter } from "../../utils/fonts";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${anton.className}`}>
                {children}
            </body>
        </html>
    );
}

