const dev = 'http://localhost:5000/api';
const prod = 'https://698ca48bf6e5.ngrok.io';

const base_url = dev;

const constants = {

    route: {
        base_uri: dev,
        post: {
            products: `${base_url}/products`,
        },
        get: {
            product_by_id: `${base_url}/product`,
            products: `${base_url}/products`,
        },
        patch: {
            product_by_id: `${base_url}/product`,
        },
        delete: {
            delete_by_id: `${base_url}/product`,
        }
    },
};

export default constants;
