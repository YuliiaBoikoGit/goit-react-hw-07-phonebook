import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: JSON.parse(localStorage.getItem('contacts')) || [],
    filter: '',
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state, { payload: contact }) => {
            state.items = [...state.items, contact];
        },
        deleteContact: (state, { payload: contactID }) => {
            state.items = state.items.filter(item => item.id !== contactID);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { setContacts, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;