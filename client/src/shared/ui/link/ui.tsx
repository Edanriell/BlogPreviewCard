"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP);

type LinkProps = {
	href: string;
	color?: string;
	activeColor?: string;
	children?: ReactNode;
};

export const Link: FC<LinkProps> = ({
	href,
	color = "#111111",
	activeColor = "#f4d04e",
	children
}) => {
	const linkRef = useRef<HTMLAnchorElement>(null);
	const { contextSafe } = useGSAP();

	useGSAP(() => {
		gsap.set(linkRef.current, { color: color });
	});

	const handleLinkMouseEnter = contextSafe(() => {
		gsap.to(linkRef.current, { color: activeColor, ease: "power2.out", duration: 0.25 });
	});

	const handleLinkMouseLeave = contextSafe(() => {
		gsap.to(linkRef.current, { color: color, ease: "power2.out", duration: 0.5 });
	});

	const handleLinkTouchStart = contextSafe(() => {
		gsap.to(linkRef.current, { color: activeColor, ease: "power2.out", duration: 0.25 });
	});

	const handleLinkTouchEnd = contextSafe(() => {
		gsap.to(linkRef.current, { color: color, ease: "power2.out", duration: 0.5 });
	});

	return (
		<a
			ref={linkRef}
			onMouseEnter={handleLinkMouseEnter}
			onMouseLeave={handleLinkMouseLeave}
			onTouchStart={handleLinkTouchStart}
			onTouchEnd={handleLinkTouchEnd}
			className={"block"}
			href={href}
		>
			{children}
		</a>
	);
};
