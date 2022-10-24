import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import "./styles/main.css";

import logo from "./assets/logo.svg";

export function App() {
	return (
		<div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
			<img src={logo} alt="Logo" />

			<h1 className="text-6xl text-white font-black mt-20">
				Seu duo está aqui
			</h1>

			<div className="grid grid-cols-6 gap-6 mt-16">
				<GameBanner
					bannerUrl="/game-1.png"
					title="League of Legends"
					adsCount={3}
				/>

				<GameBanner bannerUrl="/game-2.png" title="Apex Legends" adsCount={3} />

				<GameBanner bannerUrl="/game-3.png" title="CS: GO" adsCount={3} />

				<GameBanner
					bannerUrl="/game-4.png"
					title="World of Warcraft"
					adsCount={3}
				/>
				<GameBanner bannerUrl="/game-5.png" title="DOTA 2" adsCount={3} />

				<GameBanner bannerUrl="/game-6.png" title="Fortnite" adsCount={3} />
			</div>

			<CreateAdBanner />
		</div>
	);
}
