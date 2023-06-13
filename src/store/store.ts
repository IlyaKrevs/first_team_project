import { configureStore } from "@reduxjs/toolkit";

import LanguageSwitchSlice from "./slice/HeaderSlices/LanguageSwitchSlice";

import showDropDownSlice from './slice/HeaderSlices/showDropDownSlice';
import movingListSlice from "./slice/HeaderSlices/movingListSlice";
import MoviesFilterBy from './slice/MoviesPageSlices/FilterBySlice';
import serverData from './slice/serverDataSlice/dataSlice'

import { movieDetailsReducer } from "./slice";
import { movieInfoReducer } from "./slice/movieInfoSlice";
import { moviesReducer } from "./slice/moviesSlice";
import { movieDetailsMembersReducer } from "./slice/movieDetailsMembers";
import { movieAllMembersReducer } from "./slice/movieAllMembersSlice";
import { commentsReducer } from "./slice/commentsSlice";
import { userReducer } from "./slice/userSlice";


export const store = configureStore({
    reducer: {
        comments: commentsReducer,
        movieDetails: movieDetailsReducer,
        movieInfo: movieInfoReducer,
        movies: moviesReducer,
        movieDetailsMember: movieDetailsMembersReducer,
        movieAllMembers: movieAllMembersReducer,
        filterMovieDetailsMembers: movieDetailsMembersReducer,
        LanguageSwitch: LanguageSwitchSlice,
        HeaderShowDropDown: showDropDownSlice,
        HeaderMovingList: movingListSlice,
        MoviesFilterBy: MoviesFilterBy,
        AllData: serverData,
        user: userReducer,
    },
});

