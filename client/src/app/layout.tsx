import { ReactNode } from "react";
import type { Metadata } from "next";

import "@styles/styles.scss";

export const metadata: Metadata = {
	title: "Blog preview card",
	description: "Blog preview card"
};

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
