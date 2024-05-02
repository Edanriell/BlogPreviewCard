import { FC, Suspense } from "react";

import { PreviewCard, PreviewCardLoading } from "@entities/posts";

export const MainPage: FC = () => {
	return (
		<Suspense fallback={<PreviewCardLoading />}>
			<PreviewCard />
		</Suspense>
	);
};
