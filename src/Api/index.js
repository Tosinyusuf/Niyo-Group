import axios from "axios";

const url = "https://api.artic.edu/api/v1/artworks";

export const fetchCollectionApi = () => axios.get(url);
export const fetchSingleCollectionApi = (id) => axios.get(`https://api.artic.edu/api/v1/artworks/${id}`);

