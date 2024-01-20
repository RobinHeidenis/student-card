import { DimmedText } from "./DimmedText";
import { Barcode } from "@solid-bricks/barcode";
import { Component } from "solid-js";
import thuasLogoUrl from '../thuas-logo.png';
import {settingsStore} from "../settingsStore";

export const StudentCard: Component = () => {
	const params = new URLSearchParams(window.location.search);

	return (
		<div
			class={
				"w-11/12 bg-white drop-shadow-sm border border-gray-200 self-center rounded-lg -top-5 mt-48 relative p-4"
			}
		>
			<h1 class={"font-bold mt-3"}>{params.get("name") ?? settingsStore.name ?? "Student"}</h1>
			<DimmedText m={"mt-2"}>{params.get("number") ?? settingsStore.number ?? "19230485"}</DimmedText>
			<DimmedText m={"mt-2"}>
				{params.get("birthdate") ?? settingsStore.dateOfBirth ?? "28 February 2000"}
			</DimmedText>
			<img
				src={params.get("image") || settingsStore.image || thuasLogoUrl}
				alt={"School logo"}
				class={`h-16 mt-1 ${!params.has("image") && !settingsStore.image ? "-left-2" : ""} relative`}
			/>
			<Barcode
				value={params.get("number") ?? settingsStore.number ?? "19230485"}
				options={{ height: 40, format: "CODE39", displayValue: false }}
				class={"w-full mt-3"}
			/>
		</div>
	);
};
