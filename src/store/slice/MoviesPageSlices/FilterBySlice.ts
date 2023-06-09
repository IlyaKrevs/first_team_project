import { createSlice } from "@reduxjs/toolkit";


const MoviesFilterBy = createSlice({
    name: 'filtersBy',
    initialState: {
        currentViewScreen: '',
        currentGenresParams: '',
        currentCountryParams: '',
        currentStartRatingParams: 1,
        currentCountRatingParams: 1,
        currentDirectorFilmParams: {},
        currentActorParams: {},
        currentSortParams: {
            showText: 0,
            queryParam: 'rating',
        },
    },
    reducers: {
        setCurrentViewScreen: (state: any, action) => {
            state.currentViewScreen = action.payload.value;
        },
        resetCurrentViewScreen: (state: any, action) => {
            state.currentViewScreen = '';
        },
        setCurrentGenresParams: (state: any, action) => {
            state.currentGenresParams = action.payload.value;
        },
        setCurrentCountryParams: (state: any, action) => {
            state.currentCountryParams = action.payload.value;
        },
        setCurrentStartRatingParams: (state: any, action) => {
            state.currentStartRatingParams = action.payload.value;
        },
        setCurrentCountRatignParams: (state: any, action) => {
            state.currentCountRatingParams = action.payload.value;
        },
        setCurrentDirectorFilmParams: (state: any, action) => {
            state.currentDirectorFilmParams = action.payload.value;
        },
        setCurrentActorParams: (state: any, action) => {
            state.currentActorParams = action.payload.value;
        },

        setCurrentSortParams: (state: any, action) => {
            state.currentSortParams = action.payload.value;
        },
    }
});


export const { setCurrentViewScreen, resetCurrentViewScreen, setCurrentGenresParams, setCurrentCountryParams, setCurrentStartRatingParams, setCurrentCountRatignParams, setCurrentDirectorFilmParams, setCurrentActorParams, setCurrentSortParams } = MoviesFilterBy.actions;
export default MoviesFilterBy.reducer;