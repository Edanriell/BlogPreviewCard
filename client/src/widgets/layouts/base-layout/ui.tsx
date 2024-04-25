import { FC, ReactNode } from "react";

type BaseLayoutProps = {
	children?: ReactNode;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
	return (
		<main className={"bg-dandelion-300 min-w-full min-h-[100vh] flex items-center justify-center"}>
			{children}
		</main>
	);
};
