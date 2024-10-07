"use client";

import React, { FC, useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox";
import { Input } from "../ui";
import { Skeleton } from "../ui/skeleton";

type Item = FilterChecboxProps;

interface Props {
	title: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	loading?: boolean;
	searchInputPlaceholder?: string;
	onClickCheckbox?: (id: string) => void;
	defaultValue?: string[];
	selected?: Set<string>;
	className?: string;
	name?: string;
}

export const CheckboxFiltersGroup: FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	loading,
	searchInputPlaceholder = "Поиск...",
	className,
	defaultValue,
	onClickCheckbox,
	selected,
	name
}) => {
	const [showAll, setShowAll] = useState(false);
	const [search, setSearch] = useState("");

	const list = showAll
		? items.filter((item) => item.text.toLowerCase().includes(search.toLowerCase()))
		: (defaultItems || items).slice(0, limit);

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	if (loading) {
		return (
			<div className={className}>
				<p className="font-bold mb-3">{title}</p>

				{...new Array(limit)
					.fill(0)
					.map((_, index) => <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />)}
				<Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
			</div>
		);
	}

	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>
			{showAll && (
				<div className="mb-5">
					<Input
						onChange={onChangeSearchInput}
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
					/>
				</div>
			)}
			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, index) => (
					<FilterCheckbox
						key={`${item}-${index}`}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={selected?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						name={name}
					/>
				))}
			</div>
			{items.length > limit && (
				<div className={showAll ? "border-t-neutral-100 mt-4" : ""}>
					<button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
						{showAll ? "Скрыть" : "+ Показать все"}
					</button>
				</div>
			)}
		</div>
	);
};
