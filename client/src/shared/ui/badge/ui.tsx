import { FC, ReactNode } from "react";

type BadgeProps = {
	color?: string;
	children?: ReactNode;
};

export const Badge: FC<BadgeProps> = ({ color, children }) => {
	const badgeColorClass = color ? `bg-[${color}]` : "bg-dandelion-300";

	return (
		<p
			className={
				badgeColorClass +
				" rounded-[0.4rem] px-[1.2rem] py-[0.4rem] font-figtree font-extrabold text-[1.2rem] md:text-[1.4rem] text-codGray-950 text-left inline"
			}
		>
			{children}
		</p>
	);
};
