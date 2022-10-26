import { useEffect, useState } from "react";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";

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
		axios("http://localhost:3333/games").then((response) => {
			setGames(response.data);
		});
	}

	useEffect(() => {
		fetchGames();
	}, []);

	return (
		<div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 px-8 3xl:px-0">
			<img src={logo} alt="Logo" />
			<h1 className="text-4xl text-center text-white font-black mt-20 sm:text-5xl md:text-6xl">
				Seu duo está aqui
			</h1>

			<div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
				{games.map((game) => (
					<GameBanner
						key={game.id}
						bannerUrl={game.banner}
						title={game.title}
						adsCount={game._count.ads}
					/>
				))}
			</div>

			<Dialog.Root>
				<CreateAdBanner />

				<CreateAdModal />
			</Dialog.Root>
		</div>
	);
}
