import * as SelectPrimitive from "@radix-ui/react-select";
import { CaretDown, Check } from "phosphor-react";

import { Game } from "../CreateAdModal";

interface SelectProps {
	games: Game[];
}

export function Select({ games }: SelectProps) {
	return (
		<SelectPrimitive.Root>
			<SelectPrimitive.Trigger className="inline-flex items-center justify-between bg-zinc-900 py-3 px-4 rounded text-sm">
				<SelectPrimitive.Value placeholder="Selecione o game que deseja jogar" />
				<SelectPrimitive.Icon>
					<CaretDown className="w-4 h-4" />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>

			<SelectPrimitive.Portal className="relative">
				<SelectPrimitive.Content className="bg-zinc-900 rounded-md">
					<SelectPrimitive.Viewport className="p-2 absolute">
						{games.map((game) => {
							return (
								<SelectPrimitive.Item
									key={game.id}
									value={game.id}
									className="mt-2 flex items-center justify-between h-8 p-2 hover:bg-violet-500 text-white text-xs rounded cursor-pointer"
								>
									<SelectPrimitive.ItemText>
										{game.title}
									</SelectPrimitive.ItemText>

									<SelectPrimitive.ItemIndicator asChild>
										<Check size={16} />
									</SelectPrimitive.ItemIndicator>
								</SelectPrimitive.Item>
							);
						})}
					</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	);
}
