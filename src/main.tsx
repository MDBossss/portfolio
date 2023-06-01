import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.scss";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<MantineProvider
		theme={{
			colors: {
				primary: [
					"#FFB87A",
					"#FFB87A",
					"#FFB87A",
					"#FFB87A",
					"#FFB87A",
					"#FFB87A",
					"#FFB87A",
					"#FFB87A",
					"#FFB87A",
					"#FFB87A",
				],
			},
		}}
	>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</MantineProvider>
);
