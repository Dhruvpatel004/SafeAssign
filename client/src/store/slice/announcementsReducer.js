// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     announcements: [],
//     loading: false,
//     error: null,
// };

// const announcementsSlice = createSlice({
//     name: "announcements",
//     initialState,
//     reducers: {
//         setAnnouncements(state, action) {
//             state.announcements = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         addAnnouncement(state, action) {
//             state.announcements.push(action.payload);
//         },
//         removeAnnouncement(state, action) {
//             state.announcements = state.announcements.filter((announcement) => announcement._id !== action.payload);
//         },
//         updateAnnouncement(state, action) {
//             const updatedAnnouncement = action.payload;
//             state.announcements = state.announcements.map((announcement) =>
//                 announcement._id === updatedAnnouncement._id ? updatedAnnouncement : announcement
//             );
//         },
//         setLoading(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         setError(state, action) {
//             state.loading = false;
//             state.error = action.payload;
//         },
//     },
// });

