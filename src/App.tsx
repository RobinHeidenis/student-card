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
import {Background} from "./components/Background";
import {StudentCard} from "./components/StudentCard";
import { EnrollmentFacts } from "./components/EnrollmentFacts";
import {BottomNavBar} from "./components/BottomNavBar";

const App: Component = () => {
	const params = new URLSearchParams(window.location.search);

	return (
		<div class={"min-h-screen w-full bg-white flex flex-col"} >
			<Background />
			<StudentCard />
			<EnrollmentFacts />
			<BottomNavBar />
		</div>
	);
};

export default App;
