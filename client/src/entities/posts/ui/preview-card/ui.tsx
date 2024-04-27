import { FC } from "react";
import Image from "next/image";

import { Badge, Link } from "@shared/ui";

import authorImageDesktop from "./assets/post-author-image-mobile.jpg";
import cardImage from "./assets/blogimage.svg";

export const PreviewCard: FC = () => {
	return (
		<article
			className={
				"p-[2.4rem] border border-solid border-codGray-950 rounded-[2rem] shadow-postCard bg-white-50 w-full max-w-[32.7rem] md:max-w-[38.4rem] mx-[2.4rem]"
			}
		>
			<header className={"flex flex-col items-start mb-[1.2rem]"}>
				<Image
					className={
						"rounded-[1rem] mb-[2.4rem] w-[27.9rem] md:w-[33.6rem] h-[20rem] md:h-[20.1rem] object-cover"
					}
					width={336}
					height={201}
					src={cardImage.src}
					alt={"HTML & CSS foundations post illustration"}
				/>
				<Badge>Learning</Badge>
				<p
					className={
						"mt-[1.2rem] font-figtree font-medium text-[1.2rem] md:text-[1.4rem] text-codGray-950"
					}
				>
					Published <time dateTime="2023-12-21">21 Dec 2023</time>
				</p>
			</header>
			<h2 className={"font-figtree font-extrabold text-[2rem] md:text-[2.4rem] mb-[1.2rem]"}>
				<Link href={"#"}>HTML & CSS foundations</Link>
			</h2>
			<p
				className={
					"font-figtree font-medium text-[1.4rem] md:text-[1.6rem] text-gray-400 text-left"
				}
			>
				These languages are the backbone of every website, defining structure, content, and
				presentation.
			</p>
			<footer className={"mt-[2.4rem]"}>
				<figure className={"flex flex-row items-center justify-start gap-x-[1.2rem]"}>
					<Image
						className={"rounded-full w-[3.2rem] h-[3.2rem] object-cover"}
						width={32}
						height={32}
						src={authorImageDesktop.src}
						alt={"Image of post author Greg Hooper"}
					/>
					<figcaption className={"font-figtree font-extrabold text-[1.4rem] text-codGray-950"}>
						Greg Hooper
					</figcaption>
				</figure>
			</footer>
		</article>
	);
};
