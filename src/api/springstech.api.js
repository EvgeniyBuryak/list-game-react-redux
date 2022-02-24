import axios from "axios";

const getGameList = async () => {

    try {
        // Request game list data from api
        const response = await axios.get('https://api.npoint.io/817eebf87e3033d5dc99');
        
        return response.data;
    }
    catch {
        throw new Error('Error download api');
    }
    
};

export { getGameList };