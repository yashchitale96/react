
const initialState = {
    products: [],
    count: 0
}

export const productReducer = (state = initialState , action) =>{
    if(action.type === 'ADD_TO_PRODUCT'){
        // console.log("add to product reducer: ", action.payload)
        return {
            ...state,
            products: [...state.products, action.payload]
        }
    }
    if(action.type === 'INCREMENT'){
        console.log('imcrement', state.count)
        return {
            ...state,
            count: state.count + 1

        }
    }
    else{
        return state;
    }
}