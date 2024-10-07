"use client";

import React, { FC } from "react";
import { Title } from "./Title";
import { Input } from "../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";
import { useQueryFilters, useFilters, usePackageTypes } from "../hooks";

interface Props {
	className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
	const { packageTypes, loading } = usePackageTypes();
	const filters = useFilters();
	useQueryFilters(filters);

	const updatePrices = (prices: number[]) => {
		filters.setPrices("priceFrom", prices[0]);
		filters.setPrices("priceTo", prices[1]);
	};

	return (
		<div className={className}>
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
			<CheckboxFiltersGroup
				title="Объем"
				name="volume"
				className="mb-5"
				onClickCheckbox={filters.setVolumes}
				selected={filters.volumes}
				items={[
					{ text: "100 грамм", value: "10" },
					{ text: "200 грамм", value: "20" },
				]}
			/>

			<CheckboxFiltersGroup
				title="Тип"
				name="productType"
				className="mb-5"
				onClickCheckbox={filters.setSelectedPackageTypes}
				selected={filters.selectedPackageTypes}
				items={[
					{ text: "В пакетиках", value: "bags" },
					{ text: "Россыпной", value: "loose" },
				]}
			/>

			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={1000}
						defaultValue={0}
						value={String(filters.prices.priceFrom)}
						onChange={(e) => filters.setPrices("priceFrom", Number(e.target.value))}
					/>
					<Input
						type="number"
						min={100}
						max={1000}
						placeholder="1000"
						value={String(filters.prices.priceTo)}
						onChange={(e) => filters.setPrices("priceTo", Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={5000}
					step={10}
					value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
					onValueChange={updatePrices}
				/>
			</div>
			<CheckboxFiltersGroup
				title="Сорт"
				name="sort"
				className="mt-5"
				onClickCheckbox={filters.setSorts}
				selected={filters.sorts}
				items={[
					{ text: "Черный", value: "black" },
					{ text: "Зеленый", value: "green" },
					{ text: "Каркаде", value: "karkade" },
				]}
			/>
		</div>
	);
};
