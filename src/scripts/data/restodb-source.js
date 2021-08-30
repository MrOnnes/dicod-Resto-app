/* eslint-disable new-cap */
import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
    static async restoList() {
        const response = await fetch(API_ENDPOINT.POPULAR);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailResto(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    static async sendReview(review) {
        const response = await fetch(API_ENDPOINT.ADDREVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': '12345',
            },
            body: JSON.stringify(review),
        });
        return response;
    }
}

export default RestoDbSource;