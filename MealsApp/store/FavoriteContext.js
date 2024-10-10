import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids:[],
    addFav: (id) => {},
    removeFav: (id) => {}
});

export const FavoriteContextProvider = ({children}) => {
    const [favState, setFavState] =useState([]);

    function addFav(id) {
        setFavState((prevState) => {
            return [...prevState, id];
        });
    }

    function removeFav(id) {
        setFavState(
            (prevState) => {
                return prevState.filter((itemId) => { return item !== id })
            }
        );
    }
    const value = {
        ids : favState,
        addFav : addFav,
        removeFav : removeFav
    }

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
};