import { configureStore } from "@reduxjs/toolkit";

import LanguageSwitchSlice from "./slice/HeaderSlices/LanguageSwitchSlice";

import showDropDownSlice from './slice/HeaderSlices/showDropDownSlice';
import movingListSlice from "./slice/HeaderSlices/movingListSlice";
import serverDataGenres from './slice/serverDataSlice/genresSlice';

import MoviesFilterBy from './slice/MoviesPageSlices/FilterBySlice'
import { movieDetailsReducer } from "./slice";
import { movieInfoReducer } from "./slice/movieInfoSlice";
import { moviesReducer } from "./slice/moviesSlice";
import { movieDetailsMembersReducer } from "./slice/movieDetailsMembers";


export const store = configureStore({
    reducer: {
        movieDetails: movieDetailsReducer,
        movieInfo: movieInfoReducer,
        movies: moviesReducer,
        movieDetailsMember: movieDetailsMembersReducer,
        filterMovieDetailsMembers: movieDetailsMembersReducer,
        LanguageSwitch: LanguageSwitchSlice,
        HeaderShowDropDown: showDropDownSlice,
        HeaderMovingList: movingListSlice,
        MoviesFilterBy: MoviesFilterBy,
        AllGenres: serverDataGenres,
    },
});

