import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum LogType {
	Journal = 'journal',
}

export interface CurrentSliceState {
	type: string;
	title: string;
	text: string;
	date: Date;
	tags?: string[];
}

const initialState: CurrentSliceState = {
	type: LogType.Journal,
	title: 'Test log',
	text: 'We provide your team with the simple, accessible tools they need to care for their mental health. Everything from daily stress tips to deeper, one-on-one support.',
	date: new Date(),
	tags: [],
};

export const currentSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		updateCurrentLog: (state, action: PayloadAction<number>) => {
			// state.value += action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { updateCurrentLog } = currentSlice.actions;

export default currentSlice.reducer;
