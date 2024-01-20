import { Component, createSignal } from "solid-js";
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
	FaSolidCross,
	FaSolidEllipsis,
	FaSolidNewspaper,
} from "solid-icons/fa";
import { DimmedText } from "./components/DimmedText";
import { FactRow } from "./components/FactRow";
import { NavItem } from "./components/NavItem";
import { BiSolidCheckSquare } from "solid-icons/bi";
import { Background } from "./components/Background";
import { StudentCard } from "./components/StudentCard";
import { EnrollmentFacts } from "./components/EnrollmentFacts";
import { BottomNavBar } from "./components/BottomNavBar";
import { ColorInput, Input } from "./components/Input";
import { IoClose } from "solid-icons/io";
import { createStore } from "solid-js/store";
import {setSettingsStore, settingsStore} from "./settingsStore";

const App: Component = () => {
	const modalRef = (
		<dialog
			class={
				"w-10/12 bg-white drop-shadow-sm border border-gray-200 rounded-lg p-4 focus:outline-0"
			}
		>
			<div class={"flex justify-between"}>
				<h1 class={"font-bold text-2xl"}>Settings</h1>
				<form method={"dialog"}>
					<button id="close" aria-label="close" formNoValidate type={"submit"}>
						<IoClose class={"h-7 w-7 text-slate-800"} />
					</button>
				</form>
			</div>
			<form
				method={"dialog"}
				class={"mt-3"}
				onsubmit={() => {
					localStorage.setItem("student-card:name", settingsStore.name);
					localStorage.setItem("student-card:number", settingsStore.number);
					localStorage.setItem(
						"student-card:date-of-birth",
						settingsStore.dateOfBirth,
					);
					localStorage.setItem("student-card:color", settingsStore.color);
					localStorage.setItem("student-card:image", settingsStore.image ?? null);
					modalRef.close();
				}}
			>
				<Input
					label={"Student name"}
					type={"text"}
					id={"name"}
					placeholder={"John Nolan"}
					value={settingsStore.name}
					setValue={(value) => setSettingsStore("name", value)}
					required
				/>
				<Input
					label={"Student number"}
					type={"text"}
					id={"number"}
					placeholder={"19002348"}
					value={settingsStore.number}
					setValue={(value) => setSettingsStore("number", value)}
					required
				/>
				<Input
					label={"Date of birth"}
					type={"date"}
					id={"date-of-birth"}
					value={settingsStore.dateOfBirth}
					setValue={(value) => setSettingsStore("dateOfBirth", value)}
					required
				/>
				<ColorInput
					label={"Theme color"}
					id={"color"}
					value={settingsStore.color}
					setValue={(value) => setSettingsStore("color", value)}
				/>
				<Input
					label={"School logo"}
					type={"text"}
					id={"image"}
					value={settingsStore.image}
					setValue={(value) => setSettingsStore("image", value)}
					placeholder={"https://school.com/logo.png"}
				/>
				<button
					type={"submit"}
					class={
						"mt-4 bg-background hover:brightness-90 text-white font-semibold py-2 px-4 rounded-lg w-full"
					}
				>
					Save
				</button>
			</form>
		</dialog>
	) as HTMLDialogElement;

	return (
		<div class={"min-h-screen w-full bg-white flex flex-col"}>
			<Background />
			<StudentCard />
			<EnrollmentFacts />
			<BottomNavBar modalRef={modalRef} />
			{modalRef}
		</div>
	);
};

export default App;
