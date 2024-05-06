import type { Metadata } from "next";
import { ReactNode, FC } from "react";

import { BaseLayout } from "@/widgets";

import "@styles/styles.scss";

export const metadata: Metadata = {
	title: "Blog preview card",
	description: "Blog preview card"
};

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<BaseLayout>{children}</BaseLayout>
			</body>
		</html>
	);
};

export default RootLayout;
