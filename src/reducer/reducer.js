export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {...state, dentistas: action.payload}
        case 'ADD_CART': 
            return {...state, favs: [...state.favs, action.payload]}
     
    }
}