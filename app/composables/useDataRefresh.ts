/**
 * Composable for refreshing cached data
 * Use this when you need to force refresh data from API
 */
export const useDataRefresh = () => {
	const generalStore = useGeneralStore();
	const landingPageStore = useLandingPageStore();

	/**
	 * Refresh all cached data
	 */
	const refreshAll = async () => {
		await Promise.all([
			generalStore.refreshAll(),
			landingPageStore.refresh(),
		]);
	};

	/**
	 * Refresh specific data
	 */
	const refreshTreatments = async () => {
		await generalStore.fetchTreatments(true);
	};

	const refreshDestinations = async () => {
		await generalStore.fetchMedicalDestination(true);
	};

	const refreshBlogs = async () => {
		await generalStore.fetchBlogs(1);
	};

	const refreshLandingPage = async () => {
		await landingPageStore.refresh();
	};

	return {
		refreshAll,
		refreshTreatments,
		refreshDestinations,
		refreshBlogs,
		refreshLandingPage,
	};
};

