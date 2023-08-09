import React from "react";

export const metadata = {
    title: 'Sanity',
    description: 'Backend',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}

