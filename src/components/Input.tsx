import { Component } from "solid-js";

export const Input: Component<{
	label: string;
	type: string;
	id: string;
	value: string;
	setValue: (value: string) => void;
	placeholder?: string;
	required?: boolean;
	labelClass?: string;
	inputClass?: string;
}> = (props) => {
	return (
		<div class={"mt-4"}>
			<label
				for={props.id}
				class={`block mb-2 ${props.labelClass}`}
			>
				{props.label}
			</label>
			<input
				type={props.type}
				id={props.id}
				class={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${props.inputClass}`}
				placeholder={props.placeholder}
				required={props.required ?? false}
				value={props.value ?? ""}
				onchange={(event) => {
					props.setValue(event.currentTarget.value);
				}}
			/>
		</div>
	);
};

export const ColorInput: Component<{
	label: string;
	id: string;
	value: string;
	setValue: (value: string) => void;
	labelClass?: string;
	inputClass?: string;
}> = (props) => {
	return (
		<div class={"mt-4"}>
			<label
				for={props.id}
				class={`block mb-2 ${props.labelClass}`}
			>
				{props.label}
			</label>
			<input
				type={"color"}
				id={props.id}
				class={` ${props.inputClass}`}
				required
				value={props.value}
				onchange={(event) => {
					props.setValue(event.currentTarget.value);
				}}
			/>
		</div>
	);
};
