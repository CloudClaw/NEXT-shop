import { useEffect } from "react";
import { Filters } from "./useFilters";
import { useRouter } from "next/navigation";
import qs from "qs";

export const useQueryFilters = (filters: Filters) => {
	const router = useRouter();

	useEffect(() => {
		const params = {
			...filters.prices,
			types: Array.from(filters.selectedPackageTypes),
			volumes: Array.from(filters.volumes),
			sorts: Array.from(filters.sorts),
		};
		const query = qs.stringify(params, {
			arrayFormat: "comma",
		});
		router.push(`?${query}`, { scroll: false });
	}, [filters, router]);
};
