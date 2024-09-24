"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
	className?: string;
}

const categories = [
	{ id: 1, name: "Смартфоны" },
	{ id: 2, name: "Ноутбуки" },
	{ id: 3, name: "Планшеты" },
];

export const Categories: React.FC<Props> = ({ className }) => {
	const activeCategoryId = useCategoryStore((state) => state.activeId);
	return (
		<div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
			{categories.map((cat, index) => {
				return (
					<a
						key={cat.id}
						className={cn(
							"flex items-center font-bold h-11 rounded-2xl px-5",
							activeCategoryId === cat.id && "bg-white shadow-md shadow-gray-200 text-primary"
						)}
						href={`/#${cat.name}`}
					>
						<button>{cat.name}</button>
					</a>
				);
			})}
		</div>
	);
};
