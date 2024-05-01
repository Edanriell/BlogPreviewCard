import * as process from "node:process";

export const getPostQuery = async () => {
	const response = await fetch(`${process.env.API_URL}api/post`, {
		method: "Get"
	});

	if (response.status === 404) {
		throw new Error("User not found.");
	}

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}.`);
	}

	const contentType = response.headers.get("content-type");
	if (!contentType || !contentType.includes("application/json")) {
		throw new Error("Response is not in JSON format.");
	}

	return response.json();
};
