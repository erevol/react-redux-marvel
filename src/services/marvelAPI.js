import axios from 'axios';
import CryptoJS from 'crypto-js';
import moment from 'moment';

const config = {
    API_PUBLIC: '7fa1221c73cec1a6cd06c58d6400f61e',
    API_PRIVATE: '9a568cfa4656706f207fa243c103cfeb5cdb3a8d',
    BASE_URL: `${window.location.protocol || 'http'}//gateway.marvel.com`
};

export const getCharacters = () => {
    const URI = '/v1/public/characters';
    const url = `${config.BASE_URL}${URI}`;
    const timeStamp = moment().unix();

    const queryParams = {
        ts: timeStamp,
        apikey: config.API_PUBLIC,
        hash: CryptoJS.MD5(timeStamp + config.API_PRIVATE + config.API_PUBLIC).toString(CryptoJS.enc.Hex)
    };

    return axios
        .get(url, { params: queryParams })
        .then((response) => Promise.resolve(response.data))
        .catch((error) => Promise.reject(error));
};

export const getCharacterById = (characterId = null) => {
    if (characterId) {
        const URI = '/v1/public/characters';
        const url = `${config.BASE_URL}${URI}/${characterId}`;
        const timeStamp = moment().unix();

        const queryParams = {
            ts: timeStamp,
            apikey: config.API_PUBLIC,
            hash: CryptoJS.MD5(timeStamp + config.API_PRIVATE + config.API_PUBLIC).toString(CryptoJS.enc.Hex)
        };

        return axios
            .get(url, { params: queryParams })
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    }
    return Promise.reject({ message: 'characterId is not defined' });
};