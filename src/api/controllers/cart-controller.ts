import { $api, config } from "../index";

export const getCart = () => {
    return $api.get('/api/cart/', { headers: config() });
}