import About from "./components/About/About";
import Background from "./components/Background/Background";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";

function App() {
	return (
		<div className="app">
			<Background />
			<Introduction />
			<TechStack />
			<About />
			<Projects />
			<Footer/>
		</div>
	);
}

export default App;
