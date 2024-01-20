import { IoClose } from "solid-icons/io";
import { setSettingsStore, settingsStore } from "../lib/settingsStore";
import { ColorInput, Input } from "./Input";

export const SettingsModal = () => {
	return (
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
				onSubmit={() => {
					localStorage.setItem("student-card:data", JSON.stringify(settingsStore));
				}}
			>
				<h2 class={'text-md font-semibold'}>Student</h2>
				<Input
					label={"Name"}
					type={"text"}
					id={"name"}
					placeholder={"John Nolan"}
					required
					topMargin={'mt-1'}
				/>
				<Input
					label={"Number"}
					type={"text"}
					id={"number"}
					placeholder={"19002348"}
					required
				/>
				<Input
					label={"Date of birth"}
					type={"date"}
					id={"dateOfBirth"}
					required
				/>
				<h2 class={'text-md font-semibold mt-4'}>Enrollment facts</h2>
				<Input
					label={"Course"}
					type={"text"}
					id={"course"}
					placeholder={"HBO-ICT"}
					topMargin={'mt-1'}
				/>
				<Input
					label={"Code"}
					type={"text"}
					id={"code"}
					placeholder={"ICT"}
				/>
				<Input
					label={"Variant"}
					type={"text"}
					id={"variant"}
					placeholder={"Full Time"}
				/>
				<h2 class={'text-md font-semibold mt-4'}>Theme</h2>
				<ColorInput
					label={"Theme color"}
					id={"color"}
					topMargin={'mt-1'}
				/>
				<Input
					label={"School logo"}
					type={"text"}
					id={"image"}
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
	);
};
