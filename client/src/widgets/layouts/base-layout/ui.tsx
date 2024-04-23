import { FC, PropsWithChildren } from "react";

export const BaseLayout: FC = ({ children }: PropsWithChildren) => {
	return (
		<>
			<main>{children}</main>
		</>
	);
};
