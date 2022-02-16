const baseURL = 'http://localhost:5000/api/';

//fetch all data from 1 collection
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



//fetch by filter searches specified collection and returns data that has the key value pair of filter
export const fetchByFilter = async (collection,filter) => {
    console.log(filter);
    console.log(`${baseURL}${collection}?${filter}`);
    try {
        const response = await fetch(`${baseURL}${collection}/?${filter}`)
        const data = await response.json();

        return(data);
    }

    catch (error) {
        console.log('error');
    }

}


// filterTerm: key
// filterArray = list of the values for that key you want back
// not finished yet
export const fetchAll = async (collection, filterArray,filterTerm) => {
    console.log(filterTerm);
    console.log(`${baseURL}${collection}/?${filterTerm}${filterArray[0]._id}`);
    try {
        let response = await Promise.all(filterArray.map(filter => fetch(`${baseURL}${collection}/?${filterTerm}${filter._id}`)));
        let data = await Promise.all(response.map(res => res.json()));
        console.log(data);
        return(data);
    }

    catch (error) {
        console.log('error');
    }

}
