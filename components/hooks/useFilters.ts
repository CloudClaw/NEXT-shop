import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import { useState } from "react";

interface PriceRange {
	priceFrom?: number;
	priceTo?: number;
}

interface QueryFilters extends PriceRange {
	types: string;
	volumes: string;
	sorts: string;
}

export interface Filters {
	selectedPackageTypes: Set<string>;
	volumes: Set<string>;
	sorts: Set<string>;
	prices: PriceRange;
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof PriceRange, value: number) => void;
	setSelectedPackageTypes: (value: string) => void;
	setVolumes: (value: string) => void;
	setSorts: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

	// const [types, { toggle: toggleTypes }] = useSet(
	// 	new Set<string>(searchParams.has("types") ? searchParams.get("types")?.split("") : [])
	// );

	// Фильтр по цене
	const [prices, setPrices] = useState<PriceRange>({
		priceFrom: Number(searchParams.get("priceFrom")) || undefined,
		priceTo: Number(searchParams.get("priceTo")) || undefined,
	});

	// Фильтр по типу упаковки
	const [selectedPackageTypes, { toggle: togglePackageTypes }] = useSet(
		new Set<string>(searchParams.get("types")?.split(","))
	);

	// Фильтр по объему
	const [volumes, { toggle: toggleVolume }] = useSet(
		new Set<string>(searchParams.has("volumes") ? searchParams.get("volumes")?.split("") : [])
	);

	// Фильтр по сорту чая
	const [sorts, { toggle: toggleSorts }] = useSet(
		new Set<string>(searchParams.has("sorts") ? searchParams.get("sorts")?.split("") : [])
	);

	const onChangePrice = (name: keyof PriceRange, value: number) => {
		setPrices((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return {
		prices,
		volumes,
		selectedPackageTypes,
		sorts,
		setPrices: onChangePrice,
		setVolumes: toggleVolume,
		setSorts: toggleSorts,
		setSelectedPackageTypes: togglePackageTypes,
	};
};
