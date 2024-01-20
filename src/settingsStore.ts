import {createStore} from "solid-js/store";

export const [settingsStore, setSettingsStore] = createStore({
    name: localStorage.getItem("student-card:name"),
    number: localStorage.getItem("student-card:number"),
    dateOfBirth: localStorage.getItem("student-card:date-of-birth"),
    color: localStorage.getItem("student-card:color") ?? "#9ea701",
    image: localStorage.getItem("student-card:image"),
});