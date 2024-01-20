import {Component} from "solid-js";
import {Background} from "./components/Background";
import {StudentCard} from "./components/StudentCard";
import {EnrollmentFacts} from "./components/EnrollmentFacts";
import {BottomNavBar} from "./components/BottomNavBar";
import {SettingsModal} from "./components/SettingsModal";

const App: Component = () => {
	const modalRef = <SettingsModal />;

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
