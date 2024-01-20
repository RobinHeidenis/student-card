import {DimmedText} from "./DimmedText";
import {Barcode} from "@solid-bricks/barcode";
import {Component} from "solid-js";
import thuasLogoUrl from '../thuas-logo.png';
import {getSetting} from "../lib/getSetting";

export const StudentCard: Component = () => {

	return (
		<div
			class={
				"w-11/12 bg-white drop-shadow-sm border border-gray-200 self-center rounded-lg -top-5 mt-48 relative p-4"
			}
		>
			<h1 class={"font-bold mt-3"}>{getSetting('name', 'Student')}</h1>
			<DimmedText m={"mt-2"}>{getSetting('number', '19230485')}</DimmedText>
			<DimmedText m={"mt-2"}>
				{getSetting('dateOfBirth') ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(getSetting('dateOfBirth'))) : '28 February 2000'}
			</DimmedText>
			<img
				src={getSetting('image', thuasLogoUrl)}
				alt={"School logo"}
				class={`h-16 mt-1 ${!getSetting('image') ? "-left-2" : ""} relative`}
			/>
			<Barcode
				value={getSetting('number', '19230485')}
				options={{ height: 40, format: "CODE39", displayValue: false }}
				class={"w-full mt-3"}
			/>
		</div>
	);
};
