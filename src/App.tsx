import { useEffect, useState } from "react";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import "./styles/main.css";

import logo from "./assets/logo.svg";

interface Game {
	id: string;
	title: string;
	banner: string;
	_count: {
		ads: number;
	};
}

export function App() {
	const [games, setGames] = useState<Game[]>([]);

	async function fetchGames() {
		fetch("http://localhost:3333/games")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setGames(data);
			});
	}

	useEffect(() => {
		fetchGames();
	}, []);

	return (
		<div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
			<img src={logo} alt="Logo" />
			<h1 className="text-6xl text-white font-black mt-20">
				Seu duo está aqui
			</h1>

			<div className="grid grid-cols-6 gap-6 mt-16">
				{games.map((game) => (
					<GameBanner
						key={game.id}
						bannerUrl={game.banner}
						title={game.title}
						adsCount={game._count.ads}
					/>
				))}
			</div>

			<CreateAdBanner />
		</div>
	);
}
