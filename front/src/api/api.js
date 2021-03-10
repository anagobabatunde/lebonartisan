import constants from '../constants/constants';
import axios from 'axios';

/** Get API Routes */
export const API = {
    createProduct(product) {
        return axios
            .post(
                constants.route.post.products,
                {
                    name: product.name,
                    type: product.type,
                    price: product.price,
                    rating: product.rating,
                    warranty_years: product.warranty_years,
                    available: product.available
                },
            )
            .then((response) => response.data)
            .catch((error) => error.response.data);
    },
    getProducts() {
        return axios
            .get(`${constants.route.get.products}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Credentials': 'true'
                }
            })
            .then((response) => response.data)
            .catch((error) => error.response.data);
    },
    getOne(id) {
        return axios
            .get(`${constants.route.get.product_by_id}/${id}`)
            .then((response) => response.data)
            .catch((error) => error.response.data);
    },
    updateProduct(id, product) {
        return axios
            .patch(`${constants.route.patch.product_by_id}/${id}`,
                {
                    name: product.name,
                    type: product.type,
                    price: product.price,
                    rating: product.rating,
                    warranty_years: product.warranty_years,
                    available: product.available
                })
            .then((response) => response.data)
            .catch((error) => error.response.data);
    },
    deleteProduct(id) {
        return axios
            .get(`${constants.route.delete.delete_by_id}/${id}`)
            .then((response) => response.data)
            .catch((error) => error.response.data);
    },
};

export default API;
