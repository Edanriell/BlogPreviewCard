import { FC } from "react";

export const PreviewCard: FC = () => {
	return (
		<article>
			<header>
				<picture>
					<source media="(min-width: 375px)" srcSet="" />
					<source media="(min-width: 768px)" srcSet="" />
					<source media="(min-width: 1024px)" srcSet="" />
					<img src="" alt="HTML & CSS foundations post illustration" />
				</picture>
				<p>Learning</p>
				<p>
					Published <time dateTime="2023-12-21">21 Dec 2023</time>
				</p>
			</header>
			<h2>HTML & CSS foundations</h2>
			<p>
				These languages are the backbone of every website, defining structure, content, and
				presentation.
			</p>
			<footer>
				<figure>
					<img src="" alt="Image of post author Greg Hooper" />
					<figcaption>Greg Hooper</figcaption>
				</figure>
			</footer>
		</article>
	);
};
