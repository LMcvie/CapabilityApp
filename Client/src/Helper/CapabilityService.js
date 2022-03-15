const baseURL = 'http://localhost:5000/api/';

//fetch all data from 1 collection
export const fetchData = async (collection) => {
    try {
        const response = await fetch(`${baseURL}${collection}`)
        const data = await response.json();

        return (data);
    }
    catch (error) {
        console.log('error');
    }

}

//fetch by filter searches specified collection and returns data that has the key value pair of filter
export const fetchByFilter = async (collection, filter) => {
    try {
        const response = await fetch(`${baseURL}${collection}/?${filter}`)
        const data = await response.json();
        return (data);
    }

    catch (error) {
        console.log('error');
    }
}

// filterTerm: key
// filterArray = list of the values for that key you want back
export const fetchAll = async (collection, filterArray, filterTerm) => {
    try {
        let response = await Promise.all(filterArray.map(filter => fetch(`${baseURL}${collection}/?${filterTerm}${filter._id}`)));
        let data = await Promise.all(response.map(res => res.json()));
        return (data.flat());
    }

    catch (error) {
        console.log('error');
    }

}

export const sendUser = async (collection, payload) => {
    let id = payload._id;

    return fetch(`${baseURL}${collection}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const sendAnswers = async (questions, userDetails) => {
    console.log(userDetails._id);
    questions.map((question) => {
        let payload = {
            questionId: question._id,
            userId: userDetails._id,
            value: question.value,
        }

        return fetch(`${baseURL}answers`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())

    })

}


export const updateAnswers = async (questions, userDetails) => {
    
    questions.map((question) => {
       
        let payload = {
            questionId: question._id,
            userId: userDetails._id,
            value: question.value,
        }

        return fetch(`${baseURL}answers/${question.answerId}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())

    })

}

