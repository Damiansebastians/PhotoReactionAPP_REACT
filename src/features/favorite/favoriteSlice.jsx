import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    list: JSON.parse(localStorage.getItem('myFavorites')) || []
}

let favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if (state.list.some(item => item.id === action.payload.id)) {
                return state.list = [...state]
            } else {
                state.list.push(action.payload)
                localStorage.setItem('myFavorites', JSON.stringify(state.list))
            }
        },
        removeFavorite: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload.id)
            localStorage.setItem('myFavorites', JSON.stringify(state.list))
        },
        editDescription: (state, action) => {
            state.list = state.list.map(item => {
                console.log(action.payload.id.id)
                if (item.id === action.payload.id.id) {
                    console.log('soy true')
                    return {...item, description: action.payload.description};
                } else {
                    return item;
                }
            })
            localStorage.setItem('myFavorites', JSON.stringify(state.list));
        },
        sortBy: (state, action) => {
            switch (action.payload) {
                case 'height':
                    state.list.sort((a, b) => { return a.height - b.height })
                    break
                case 'width':
                    state.list.sort((a, b) => { return  a.width - b.width })
                    break
                case 'likes':
                    state.list.sort((a, b) => { return a.likes - b.likes })
                    break
                case 'dateAdd':
                    state.list.sort((a, b) => { return a.date - b.date })
                    break
                default:
                    state.list = JSON.parse(localStorage.getItem('myFavorites'))
            }
        },
        searchFAvorite: (state, action) => {
            console.log(action.payload)
            if (action.payload === '') {
                state.list = JSON.parse(localStorage.getItem('myFavorites'));
            } else {
                state.list = JSON.parse(localStorage.getItem('myFavorites'));
                state.list = state.list.filter(item => item.description.toLowerCase().includes(action.payload.toLowerCase()));
            }
            
        }
    }
})

export default favoriteSlice.reducer;
export const { addFavorite, removeFavorite, sortBy, editDescription, searchFAvorite } = favoriteSlice.actions