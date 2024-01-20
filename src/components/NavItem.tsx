import { Component } from "solid-js";
import { IconTypes } from "solid-icons";
import { DimmedText } from "./DimmedText";

export const NavItem: Component<{
	icon: IconTypes;
	text: string;
	onClick?: () => void;
	iconClass?: string;
	textClass?: string;
}> = (props) => {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: This app is not meant to be used with a keyboard and i'll fix it later
		<div
			class={"flex flex-col items-center text-stone-500"}
			onClick={props.onClick}
		>
			<props.icon class={`h-5 w-5 ${props.iconClass ?? ""}`} />
			<DimmedText class={`text-xs mt-2 font-semibold ${props.textClass ?? ""}`}>
				{props.text}
			</DimmedText>
		</div>
	);
};
