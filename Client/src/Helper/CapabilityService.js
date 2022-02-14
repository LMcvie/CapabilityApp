const baseURL = 'http://localhost:5000/api/';

export const fetchData = async (collection) => {
    try {
        const response = await fetch(`${baseURL}${collection}`)
        const data = await response.json();

        return(data);
    }

    catch (error) {
        console.log('error');
    }

}