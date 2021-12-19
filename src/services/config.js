import axios from 'axios';

const key = "?api_key=659faa17a10be34da08d97d7bd087356";
const language = '&language=pt-BR';
const region = '&region=BR';


const axiosInstances = axios.create({
        baseURL: "https://api.themoviedb.org/3/"
      })

export const api = {
        get(endpoint) {
                return axiosInstances.get(endpoint + key + language + region)
        }
}
