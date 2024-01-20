import type { Component } from "solid-js";
import {
	RiArrowsArrowLeftSLine,
	RiOthersGraduationCapFill,
	RiSystemDashboardFill,
} from "solid-icons/ri";
import { Barcode } from "@solid-bricks/barcode";
import {
	FaRegularCalendar,
	FaSolidClock,
	FaSolidCode,
	FaSolidCompass,
	FaSolidEllipsis,
	FaSolidNewspaper,
} from "solid-icons/fa";
import { DimmedText } from "./components/DimmedText";
import { FactRow } from "./components/FactRow";
import { NavItem } from "./components/NavItem";
import { BiSolidCheckSquare } from "solid-icons/bi";

const App: Component = () => {
	const params = new URLSearchParams(window.location.search);

	return (
		<div class={"min-h-screen w-full bg-white flex flex-col"} >
			<div class={"h-52 bg-background flex items-center fixed w-screen"} style={params.has('background') ? {"background-color": params.get('background')} : {}}>
				<div class={"flex flex-row items-center"}>
					<RiArrowsArrowLeftSLine class={"h-6 w-6 mx-4"} />
					<h1 class={"text-2xl"}>Student card</h1>
				</div>
			</div>
			<div
				class={
					"w-11/12 bg-white drop-shadow-sm border border-gray-200 self-center rounded-lg -top-5 mt-48 relative p-4"
				}
			>
				<h1 class={"font-bold mt-3"}>{params.get('name') ?? 'Student'}</h1>
				<DimmedText m={"mt-2"}>{params.get('number') ?? '19230485'}</DimmedText>
				<DimmedText m={"mt-2"}>{params.get('birthdate') ?? '28 February 2000'}</DimmedText>
				<img
					src={params.get('image') ?? "./thuas-logo.png"}
					alt={"School logo"}
					class={`h-16 mt-1 ${!params.has('image') ? '-left-2' : ''} relative`}
				/>
				<Barcode
					value={params.get('number') ?? '19230485'}
					options={{ height: 40, format: "CODE39", displayValue: false }}
					class={"w-full mt-3"}
				/>
			</div>
			<div
				class={
					"w-11/12 bg-white drop-shadow-sm border border-gray-200 self-center rounded-lg pt-4 flex mb-20 flex-col gap-y-8 pr-5 pb-5"
				}
			>
				<FactRow
					icon={FaRegularCalendar}
					title={"Academic year"}
					value={"2023"}
				/>
				<FactRow
					icon={FaSolidClock}
					title={"Valid"}
					value={"From 1 September 2023 up to and including 31 August 2023"}
				/>
				<FactRow
					icon={RiOthersGraduationCapFill}
					title={"Course"}
					value={"HBO-ICT"}
				/>
				<FactRow icon={FaSolidCode} title={"Code"} value={"ICT"} />
				<FactRow
					icon={RiSystemDashboardFill}
					title={"Variant"}
					value={"Voltijd"}
				/>
			</div>
			<div
				class={
					"flex flex-row items-center justify-between fixed bottom-0 bg-white w-screen px-5 gap-x-3 border-t border-gray-100 py-2"
				}
			>
				<NavItem icon={FaSolidCompass} text={"Dashboard"} />
				<NavItem icon={FaRegularCalendar} text={"Schedule"} />
				<NavItem
					icon={BiSolidCheckSquare}
					iconClass={"h-7 w-6"}
					textClass={"-top-1 relative"}
					text={"Results"}
				/>
				<NavItem icon={FaSolidNewspaper} text={"News"} />
				<NavItem
					icon={FaSolidEllipsis}
					iconClass={"text-slate-800"}
					text={"More"}
				/>
			</div>
		</div>
	);
};

export default App;
