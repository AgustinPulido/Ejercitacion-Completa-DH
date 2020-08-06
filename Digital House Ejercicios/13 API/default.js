const keyGiphy = 'PgqWE4DbY3Xl4kxvnQbCZt2vjiUESXxe';
const urlbase = 'https://api.giphy.com/v1/gifs';

const endopoints = {
    random: `${urlbase}/random`,
    trending: `${urlbase}/trending`
};

async function getEndpoint(endopoint, params){
    let queryParams = '';
    for (const key in params) {
        queryParams += `${key}=${params[key]}&`;
    }

    let query = `${endopoint}?api_key=${keyGiphy}&${queryParams}`;
    const response = await fetch(query);
    const result = await response.json;
    return result.data;
}
