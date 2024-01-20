import { Component } from "solid-js";

export const DimmedText: Component<{
	children: string;
	m?: string;
	class?: string;
}> = (props) => {
	return (
		<h2 class={`text-slate-500 text-sm ${props.class ?? ""} ${props.m ?? ""}`}>
			{props.children}
		</h2>
	);
};
