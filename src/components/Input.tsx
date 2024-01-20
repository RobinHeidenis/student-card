import { Component } from "solid-js";
import { setSettingsStore, settingsStore } from "../lib/settingsStore";
import { getSetting } from "../lib/getSetting";

export const Input: Component<{
	label: string;
	type: string;
	id: keyof typeof settingsStore;
	placeholder?: string;
	required?: boolean;
	labelClass?: string;
	inputClass?: string;
	topMargin?: string;
}> = (props) => {
	return (
		<div class={props.topMargin ?? "mt-4"}>
			<label for={props.id} class={`block mb-2 ${props.labelClass}`}>
				{props.label}
			</label>
			<input
				type={props.type}
				id={props.id}
				class={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${props.inputClass}`}
				placeholder={props.placeholder}
				required={props.required ?? false}
				value={getSetting(props.id, "", true)}
				onchange={(event) => {
					setSettingsStore(props.id, event.currentTarget.value);
				}}
			/>
		</div>
	);
};

export const ColorInput: Component<{
	label: string;
	id: keyof typeof settingsStore;
	labelClass?: string;
	inputClass?: string;
	topMargin?: string;
}> = (props) => {
	return (
		<div class={props.topMargin ?? "mt-4"}>
			<label for={props.id} class={`block mb-2 ${props.labelClass}`}>
				{props.label}
			</label>
			<input
				type={"color"}
				id={props.id}
				class={` ${props.inputClass}`}
				required
				value={getSetting(props.id, "", true)}
				onchange={(event) => {
					setSettingsStore(props.id, event.currentTarget.value);
				}}
			/>
		</div>
	);
};
