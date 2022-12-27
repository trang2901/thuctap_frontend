import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  data: any,
  users: { id: number, username: string, name: string, email: string, avatar: string, jobtitle: string }[]
}

const initialState: UserState = {
  data: {},
  users: [],
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<[]>) => {
      // state.users = state.users.concat(action.payload)
      state.users = action.payload
      const d = state.users.filter((item, pos) => state.users.indexOf(item) === pos) // make unique
      state.users = d
    },
    addUser: (state, action: PayloadAction<{ id: number, username: string, name: string, email: string, avatar: string, jobtitle: string }>) => {
      state.users.push(action.payload)
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      const index = state.users.findIndex((u) => u.id === action.payload)
      state.users.splice(index, 1)
    },
    updateUser: (state, action: PayloadAction<{ id: number, username: string, name: string, email: string, avatar: string, jobtitle: string }>) => {
      const index = state.users.findIndex((u) => u.id === action.payload.id)
      state.users[index] = action.payload
    },
    add: (state, action: PayloadAction<any>) => {
      state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUsers, addUser, deleteUser, updateUser, add } = userSlice.actions

export default userSlice.reducer