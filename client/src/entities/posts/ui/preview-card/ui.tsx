import { FC } from "react";
import Image from "next/image";

import cardImageMobile from "./assets/post-image-mobile.jpg";
import cardImageTablet from "./assets/post-image-mobile.jpg";
import cardImageDesktop from "./assets/post-image-mobile.jpg";
import authorImageMobile from "./assets/post-author-image-mobile.jpg";
import authorImageTablet from "./assets/post-author-image-mobile.jpg";
import authorImageDesktop from "./assets/post-author-image-mobile.jpg";
import cardImage from "./assets/blogimage.svg";

export const PreviewCard: FC = () => {
	return (
		<article
			className={
				"p-[2.4rem] border border-solid border-codGray-950 rounded-[2rem] shadow-postCard max-w-[32.7rem] bg-white-50"
			}
		>
			<header className={"flex flex-col items-start mb-[1.2rem]"}>
				<Image
					className={"rounded-[1rem] mb-[2.4rem]"}
					width={279}
					height={200}
					src={cardImage.src}
					alt={"HTML & CSS foundations post illustration"}
				/>
				<p
					className={
						"rounded-[0.4rem] px-[1.2rem] py-[0.4rem] bg-dandelion-300 font-figtree font-extrabold text-[1.2rem] text-codGray-950 text-left inline"
					}
				>
					Learning
				</p>
				<p className={"mt-[1.2rem] font-figtree font-medium text-[1.2rem] text-codGray-950"}>
					Published <time dateTime="2023-12-21">21 Dec 2023</time>
				</p>
			</header>
			<h2 className={"font-figtree font-extrabold text-[2rem] text-codGray-950 mb-[1.2rem]"}>
				<a className={"block"} href={"#"}>
					HTML & CSS foundations
				</a>
			</h2>
			<p className={"font-figtree font-medium text-[1.4rem] text-gray-400 text-left"}>
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
