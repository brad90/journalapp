import { configureStore } from '@reduxjs/toolkit';
import CurrentLogReducer from './currentLogSlice';

export const store = configureStore({
	reducer: {
		currentLog: CurrentLogReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
