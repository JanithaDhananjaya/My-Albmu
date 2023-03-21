import axios from "../helpers/axios-instance";

/**
 * This is a function used to get all album details
 * @param {string} order - sorting order as ASC or DESC
 * @returns {axios.response} - The album response
 */

export const getAlbums = async (order) => {
    return await axios.get(`/albums?userId=2&_sort=title&_order=${order}`)
        .then(async response => {
                if (response.data) {
                    const albumResponse = response.data;
                    for await (const item of albumResponse) {
                        await axios.get(`/photos?albumId=${item.id}`)
                            .then(response => {
                                albumResponse.url = response.data[0].url;
                                albumResponse.count = response.data.length

                            });
                    }
                    return albumResponse;
                }
            }
        ).catch(error => {
            console.log(error)
        });
};


/**
 * This is a function used to get a single album details
 * @param {string} albumId - The albumId value
 * @param {string} order - The sorting order as ASC or DESC
 * @returns {axios.response} - The album response
 */

export const getSingleAlbum = (albumId, order) => {
    return axios.get(`/photos?albumId=${albumId}&_sort=title&_order=${order}`);
}

export default {
    getAlbums,
    getSingleAlbum
}