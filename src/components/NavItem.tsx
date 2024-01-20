import { Component } from "solid-js";
import { IconTypes } from "solid-icons";
import { DimmedText } from "./DimmedText";

export const NavItem: Component<{
	icon: IconTypes;
	text: string;
	iconClass?: string;
	textClass?: string;
}> = (props) => {
	return (
		<div class={"flex flex-col items-center text-stone-500"}>
			<props.icon class={`h-5 w-5 ${props.iconClass ?? ""}`} />
			<DimmedText class={`text-xs mt-2 font-semibold ${props.textClass ?? ""}`}>
				{props.text}
			</DimmedText>
		</div>
	);
};
