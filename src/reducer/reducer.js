export const reducer = (state, action) => {
    switch (action.type) {

        case "CHANGE_THEME": 
            return { ...state, theme: state.theme === "light" ? "dark" : "light" }
        case 'GET_LIST':
            return { ...state, dentistas: action.payload }
        case 'ADD_CART':
            return { ...state, favs: [...state.favs, action.payload] }

    }
}