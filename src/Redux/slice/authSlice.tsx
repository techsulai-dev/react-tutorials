import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    user: { email: string } | null;
    isLoggedIn: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { user } = action.payload;

            state.user = user;
            state.isLoggedIn = true;
            state.error = null;
        // } else {
        //     state.error = 'Invalid credentials';
        // }
    },

    logout: (state) => {
        state.user = null;
        state.isLoggedIn = false;
    }
}
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;