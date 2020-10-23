export function fetchData(page_number) {
    return (dispatch) => {
        dispatch(getTodos())
        return (fetch('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }))
            .then(res => {
                if(res.ok){
                    res.json().then(json=>{
                        console.log(json)
                        return (dispatch(getToDosSuccess(json)))
                    }).catch(err => dispatch(getToDosFailure(err)))
                   
            }else{
                return (dispatch(getToDosFailure(res.statusText)))
            }
        })
            .catch(err => dispatch(getToDosFailure(err)))
    }
    function getTodos() {      
        return {
            type: 'FETCHING_DATA',
        }
    }

    function getToDosSuccess(data) {
        console.log(data)
        return {
            type: 'FETCHING_DATA_SUCCESS',
            data : data
        }
    }
    function getToDosFailure(err) {
        return {
            type: 'FETCHING_DATA_FAILURE',
            data: err
        }
    }
}