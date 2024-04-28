import "react-calendar-heatmap/dist/styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Profile from "./pages/Profile";
import Repo from "./pages/Repo";
import Footer from "./components/Footer";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Profile />} />
					<Route path="/:username" element={<Profile />} />
					<Route path="/:username/:reponame" element={<Repo />} />
				</Routes>

				<Footer />

				<GlobalStyles />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
