import { Component } from "solid-js";
import { FactRow } from "./FactRow";
import { FaRegularCalendar, FaSolidClock, FaSolidCode } from "solid-icons/fa";
import {
	RiOthersGraduationCapFill,
	RiSystemDashboardFill,
} from "solid-icons/ri";

export const EnrollmentFacts: Component = () => {
	const isAfterAugust = new Date().getMonth() >= 8;
	const currentYear = new Date().getFullYear();
	const academicYear = isAfterAugust ? currentYear : currentYear - 1;

	return (
		<div
			class={
				"w-11/12 bg-white drop-shadow-sm border border-gray-200 self-center rounded-lg pt-4 flex mb-20 flex-col gap-y-8 pr-5 pb-5"
			}
		>
			<FactRow icon={FaRegularCalendar} title={"Academic year"} value={academicYear.toString()}/>
			<FactRow
				icon={FaSolidClock}
				title={"Valid"}
				value={`From 1 September ${academicYear} up to and including 31 August ${academicYear + 1}`}
			/>
			<FactRow
				icon={RiOthersGraduationCapFill}
				title={"Course"}
				value={"HBO-ICT"}
			/>
			<FactRow icon={FaSolidCode} title={"Code"} value={"ICT"}/>
			<FactRow icon={RiSystemDashboardFill} title={"Variant"} value={"Voltijd"}/>
		</div>
	);
};
