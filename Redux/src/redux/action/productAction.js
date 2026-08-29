export const addToProduct = (detail) =>{
    return {
        type: 'ADD_TO_PRODUCT',
        payload: detail,
    }
}

export const increment = () =>{
    return {
        type: 'INCREMENT',
    }
}