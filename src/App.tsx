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
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-1.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="text-white font-bold block">
							League of Legends
						</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
					</div>
				</a>

				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-2.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="text-white font-bold block">Apex Legends</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
					</div>
				</a>

				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-3.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="text-white font-bold block">
							Counter Strike
						</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
					</div>
				</a>

				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-4.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="text-white font-bold block">
							World of Warcraft
						</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
					</div>
				</a>

				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-5.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="text-white font-bold block">Dota 2</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
					</div>
				</a>

				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-6.png" alt="" />

					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="text-white font-bold block">Fortnite</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 Anúncios</span>
					</div>
				</a>
			</div>
		</div>
	);
}
