import { useEffect, useState } from "react";
import { GameController } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

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

			<Dialog.Root>
				<CreateAdBanner />

				<Dialog.Portal>
					<Dialog.Overlay className="bg-black/60 inset-0 fixed" />

					<Dialog.Content className="fixed bg-[#2A2634] py-6 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
						<Dialog.Title className="text-3xl font-black">
							Publique um anúncio
						</Dialog.Title>

						<Dialog.Content>
							<form>
								<div>
									<label htmlFor="game">Qual o game?</label>
									<input
										id="game"
										type="text"
										placeholder="Selecione o game que deseja jogar"
									/>
								</div>

								<div>
									<label htmlFor="name">Seu nome (ou nickname)</label>
									<input
										id="name"
										type="text"
										placeholder="Como te chamam dentro do game?"
									/>
								</div>

								<div>
									<div>
										<label htmlFor="yearsPlaying">Joga há quantos anos?</label>
										<input
											id="yearsPlaying"
											type="number"
											placeholder="Tudo bem ser ZERO"
										/>
									</div>
									<div>
										<label htmlFor="discord">Qual o seu Discord?</label>
										<input
											id="discord"
											type="text"
											placeholder="Usuario#0000"
										/>
									</div>
								</div>

								<div>
									<div>
										<label htmlFor="weekDays">Quando costuma jogar?</label>
									</div>
									<div>
										<label htmlFor="hourStart">Qual horário do dia?</label>
										<div>
											<input id="hourStart" type="time" placeholder="De" />
											<input id="hourEnd" type="time" placeholder="Até" />
										</div>
									</div>
								</div>

								<div>
									<input id="" type="checkbox" />
									Costumo me conectar ao chat de voz
								</div>

								<footer>
									<button> Cancelar </button>
									<button type="submit">
										<GameController />
										Encontrar duo
									</button>
								</footer>
							</form>
						</Dialog.Content>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
}
