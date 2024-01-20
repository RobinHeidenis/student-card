import { IoClose } from "solid-icons/io";
import { settingsStore } from "../lib/settingsStore";
import { ColorInput, Input } from "./Input";
import { BiSolidShare } from "solid-icons/bi";
import { OcShareandroid2, OcShareandroid3 } from "solid-icons/oc";

export const SettingsModal = () => {
	return (
		<dialog
			id={"settingsModal"}
			class={
				"w-10/12 bg-white drop-shadow-sm border border-gray-200 rounded-lg p-4 focus:outline-0 select-none"
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
					localStorage.setItem(
						"student-card:data",
						JSON.stringify(settingsStore),
					);
				}}
			>
				<h2 class={"text-md font-semibold"}>Student</h2>
				<Input
					label={"Name"}
					type={"text"}
					id={"name"}
					placeholder={"John Nolan"}
					required
					topMargin={"mt-1"}
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
				<h2 class={"text-md font-semibold mt-4"}>Enrollment facts</h2>
				<Input
					label={"Course"}
					type={"text"}
					id={"course"}
					placeholder={"HBO-ICT"}
					topMargin={"mt-1"}
				/>
				<Input label={"Code"} type={"text"} id={"code"} placeholder={"ICT"} />
				<Input
					label={"Variant"}
					type={"text"}
					id={"variant"}
					placeholder={"Full Time"}
				/>
				<h2 class={"text-md font-semibold mt-4"}>Theme</h2>
				<ColorInput label={"Theme color"} id={"color"} topMargin={"mt-1"} />
				<Input
					label={"School logo"}
					type={"text"}
					id={"image"}
					placeholder={"https://school.com/logo.png"}
				/>
				<div class={"flex gap-x-2 mt-4"}>
					<button
						type={"submit"}
						class={
							"bg-background hover:brightness-90 text-white font-semibold py-2 px-4 rounded-md w-5/6"
						}
					>
						Save
					</button>
					<button
						type={"button"}
						class={
							"bg-background hover:brightness-90 text-white rounded-md w-1/6 flex items-center justify-center"
						}
						onClick={() => {
							navigator.share({
								title: "Student Card",
								text: "Check out my student card!",
								url: `${window.location.origin}?${new URLSearchParams({
									...settingsStore,
									image: settingsStore.image ?? '',
								}).toString()}`,
							});
						}}
					>
						<OcShareandroid3 />
					</button>
				</div>
			</form>
		</dialog>
	);
};
