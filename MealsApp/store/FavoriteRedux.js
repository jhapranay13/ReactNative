import { configureStore, createSlice, Provider } from "@reduxjs/toolkit";

const favoriteSlice = createSlice(
    {
        name: 'favourites',
        initialState: {
            ids: []
        },
        reducers: {
            addFav: (state, action) => {
                state.ids.push(action.payload.id);
            },
            removeFav: (state, action) => {
                state.ids.splice(state.ids.indexOf(action.payload.id), 1);
            },
        }
    }
);

export const FavoriteAction = favoriteSlice.actions;

export const store = configureStore({
    reducer: {
        favMeal: favoriteSlice.reducer,
    },
});