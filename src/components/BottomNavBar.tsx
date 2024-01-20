import {Component, JSX, Signal} from "solid-js";
import { NavItem } from "./NavItem";
import {
	FaRegularCalendar,
	FaSolidCompass,
	FaSolidEllipsis,
	FaSolidNewspaper,
} from "solid-icons/fa";
import { BiSolidCheckSquare } from "solid-icons/bi";

export const BottomNavBar: Component<{ modalRef: JSX.Element }> = (
	props,
) => {
	// @ts-expect-error I don't know how solid works and this prop is a readSignal function
	const ref = props.modalRef() as HTMLDialogElement;
	return (
		<div
			class={
				"flex flex-row items-center justify-between fixed bottom-0 bg-white w-screen px-5 gap-x-3 border-t border-gray-100 py-2"
			}
		>
			<NavItem icon={FaSolidCompass} text={"Dashboard"}/>
			<NavItem icon={FaRegularCalendar} text={"Schedule"}/>
			<NavItem
				icon={BiSolidCheckSquare}
				iconClass={"h-7 w-6"}
				textClass={"-top-1 relative"}
				text={"Results"}
			/>
			<NavItem icon={FaSolidNewspaper} text={"News"}/>
			<NavItem
				icon={FaSolidEllipsis}
				iconClass={"text-slate-800"}
				text={"More"}
				onClick={() => ref.showModal()}
			/>
		</div>
	);
};
