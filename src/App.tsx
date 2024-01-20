import { Component } from "solid-js";
import { Background } from "./components/Background";
import { StudentCard } from "./components/StudentCard";
import { EnrollmentFacts } from "./components/EnrollmentFacts";
import { BottomNavBar } from "./components/BottomNavBar";
import { SettingsModal } from "./components/SettingsModal";

const App: Component = () => (
	<div class={"min-h-screen w-full bg-white flex flex-col"}>
		<Background />
		<StudentCard />
		<EnrollmentFacts />
		<BottomNavBar />
		<SettingsModal />
	</div>
);

export default App;
