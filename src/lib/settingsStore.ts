import { createStore } from "solid-js/store";

const savedSettings = JSON.parse(
	localStorage.getItem("student-card:data") ?? "{}",
);

export const [settingsStore, setSettingsStore] = createStore({
	name: savedSettings.name,
	number: savedSettings.number,
	dateOfBirth: savedSettings.dateOfBirth ?? "2000-01-01",
	course: savedSettings.course,
	code: savedSettings.code,
	variant: savedSettings.variant,
	color: savedSettings.color ?? "#9ea701",
	image: savedSettings.image,
});
