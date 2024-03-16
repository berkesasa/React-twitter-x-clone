import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'BerkeSasa',
        fullName: 'sasa',
        avatar: 'https://pbs.twimg.com/profile_images/1736791124004552704/0e6YmjML_400x400.jpg',
    },
    accounts: [
        {
            id: 1,
            username: 'BerkeSasa',
            fullName: 'sasa',
            avatar: 'https://pbs.twimg.com/profile_images/1736791124004552704/0e6YmjML_400x400.jpg',
        },
        {
            id: 2,
            username: 'BerkeSasa2',
            fullName: 'sasa',
            avatar: 'https://pbs.twimg.com/profile_images/1736791124004552704/0e6YmjML_400x400.jpg',
        },
    ]

}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const{_addAccount, _setCurrentAccount, _removeAccount} = auth.actions 
export default auth.reducer