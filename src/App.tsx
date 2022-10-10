import "./styles/main.css";

import logo from "./assets/logo.svg";

export function App() {
	return (
		<div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
			<img src={logo} alt="Logo" />

			<h1 className="text-6xl text-white font-black mt-20">
				Seu duo está aqui
			</h1>
		</div>
	);
}
