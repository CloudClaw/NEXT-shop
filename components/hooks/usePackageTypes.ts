import { Api } from "@/services/api-client";
import { PackageType } from "@prisma/client";
import React from "react";

export const usePackageTypes = () => {
	const [packageTypes, setPackageTypes] = React.useState<PackageType[]>([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		async function fetchPackageTypes() {
			try {
				setLoading(true);
				const packageTypes = await Api.packageTypes.getAll();
				setPackageTypes(packageTypes);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		fetchPackageTypes();
	}, []);

	return {
		packageTypes,
		loading,
	};
};
