import { FC } from "react";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export const PreviewCardLoading: FC = () => {
	return (
		<article
			className={
				"p-[2.4rem] border border-solid border-codGray-950 rounded-[2rem] shadow-postCard bg-white-50 w-full max-w-[32.7rem] md:max-w-[38.4rem] mx-[2.4rem]"
			}
		>
			<header className={"flex flex-col items-start mb-[1.2rem]"}>
				<Skeleton
					width={336}
					height={201}
					className={
						"rounded-[1rem] mb-[2.4rem] w-[27.9rem] md:w-[33.6rem] h-[20rem] md:h-[20.1rem] object-cover"
					}
					style={{ borderRadius: "10px" }}
				/>
				<div className={"flex flex-row gap-x-[1rem] flex-wrap"}>
					<Skeleton
						width={81.93}
						height={28.97}
						className={
							"rounded-[0.4rem] px-[1.2rem] py-[0.4rem] font-figtree font-extrabold text-[1.2rem] md:text-[1.4rem] text-codGray-950 text-left inline"
						}
						style={{ borderRadius: "4px" }}
					/>
				</div>
				<p
					className={
						"mt-[1.2rem] font-figtree font-medium text-[1.2rem] md:text-[1.4rem] text-codGray-950"
					}
				>
					<Skeleton width={142.37} height={20.99} />
				</p>
			</header>
			<h2 className={"font-figtree font-extrabold text-[2rem] md:text-[2.4rem] mb-[1.2rem]"}>
				<Skeleton height={36} className={"w-full"} />
			</h2>
			<Skeleton
				count={3}
				height={24}
				style={{ marginBottom: "8px" }}
				className={
					"font-figtree font-medium text-[1.4rem] md:text-[1.6rem] text-gray-400 text-left"
				}
			/>
			<footer className={"mt-[2.4rem]"}>
				<figure className={"flex flex-row items-center justify-start gap-x-[1.2rem]"}>
					<Skeleton
						width={32}
						height={32}
						className={"rounded-full w-[3.2rem] h-[3.2rem] object-cover"}
						style={{ borderRadius: "50%" }}
					/>
					<figcaption className={"font-figtree font-extrabold text-[1.4rem] text-codGray-950"}>
						<Skeleton width={84.82} height={20.99} />
					</figcaption>
				</figure>
			</footer>
		</article>
	);
};
