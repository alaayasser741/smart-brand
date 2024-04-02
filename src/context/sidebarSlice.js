import {
    createSlice
} from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isCollapsed: false,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isCollapsed = !state.isCollapsed;
        },
    },
});

export const {
    toggleSidebar
} = sidebarSlice.actions;

export const selectSidebarState = (state) => state.sidebar;

export default sidebarSlice.reducer;