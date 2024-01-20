import { Component } from "solid-js";
import { DimmedText } from "./DimmedText";
import { IconTypes } from "solid-icons";

export const FactRow: Component<{
	icon: IconTypes;
	title: string;
	value: string;
	class?: string;
}> = (props) => {
	return (
		<div class={`flex flex-row items-start ${props.class ?? ""}`}>
			<props.icon class={"h-5 w-5 mx-4 mt-1 mr-6 text-slate-800"} />
			<div class={"flex flex-col"}>
				<h1 class={"text-md font-semibold"}>{props.title}</h1>
				<DimmedText>{props.value}</DimmedText>
			</div>
		</div>
	);
};
