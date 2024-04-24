import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/entities/**/*.{js,ts,jsx,tsx}",
		"./src/next-pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/shared/**/*.{js,ts,jsx,tsx}",
		"./src/widgets/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		fontFamily: {
			figtree: ["Figtree"]
		},
		extend: {
			colors: {
				codGray: {
					"50": "#f6f6f6",
					"100": "#e7e7e7",
					"200": "#d1d1d1",
					"300": "#b0b0b0",
					"400": "#888888",
					"500": "#6d6d6d",
					"600": "#5d5d5d",
					"700": "#4f4f4f",
					"800": "#454545",
					"900": "#3d3d3d",
					"950": "#111111"
				},
				white: {
					"50": "#ffffff",
					"100": "#efefef",
					"200": "#dcdcdc",
					"300": "#bdbdbd",
					"400": "#989898",
					"500": "#7c7c7c",
					"600": "#656565",
					"700": "#525252",
					"800": "#464646",
					"900": "#3d3d3d",
					"950": "#292929"
				},
				dandelion: {
					"50": "#fefaec",
					"100": "#fcf3c9",
					"200": "#f8e58f",
					"300": "#f4d04e",
					"400": "#f2be2d",
					"500": "#eb9f15",
					"600": "#d0790f",
					"700": "#ad5710",
					"800": "#8c4314",
					"900": "#733814",
					"950": "#421c06"
				},
				gray: {
					"50": "#f6f6f6",
					"100": "#e7e7e7",
					"200": "#d1d1d1",
					"300": "#b0b0b0",
					"400": "#7f7f7f",
					"500": "#6d6d6d",
					"600": "#5d5d5d",
					"700": "#4f4f4f",
					"800": "#454545",
					"900": "#3d3d3d",
					"950": "#262626"
				}
			},
			boxShadow: {
				postCard: "8px 8px 0 0 #000"
			}
		}
	},
	plugins: [require("@tailwindcss/forms")]
};

export default config;
