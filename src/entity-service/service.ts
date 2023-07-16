import type { ConnectRouter } from "@bufbuild/connect";
import { EntityService } from "../gen/ride/entity/v1alpha1/entity_service_connect.js";

const routes = (router: ConnectRouter) =>
	router.service(EntityService, {
		// createEntity: async (req, context) => {
		// 	await verifyAuthHeader(context);
		// 	return createTrip(req);
		// },
	});

export default routes;
