import { Component } from "solid-js";
import { RiArrowsArrowLeftSLine } from "solid-icons/ri";
import { getSetting } from "../lib/getSetting";

export const Background: Component = () => (
	<div
		class={"h-52 bg-background flex items-center fixed w-screen"}
		style={
			getSetting("color") ? { "background-color": getSetting("color") } : {}
		}
	>
		<div class={"flex flex-row items-center"}>
			<RiArrowsArrowLeftSLine class={"h-6 w-6 mx-4"} />
			<h1 class={"text-2xl"}>Student card</h1>
		</div>
	</div>
);
