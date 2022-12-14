import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
	return (
		<div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
			<div className="bg-[#2a1634] px-8 py-6 flex flex-col justify-between gap-8 md:flex-row md:items-center">
				<div>
					<strong className="text-white text-2xl font-black block">
						Não encontrou seu duo?
					</strong>
					<span className="text-zinc-400 block">
						Publique um anúncio para encontrar novos players!
					</span>
				</div>

				<Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded transition-all flex items-center justify-center gap-3 w-full md:w-auto">
					<MagnifyingGlassPlus size={24} />
					Publicar anúncio
				</Dialog.Trigger>
			</div>
		</div>
	);
}
