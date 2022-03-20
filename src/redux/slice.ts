export interface State {
	value: string;
	operation?: Operation;
	previousValue?: string;
}

const slice = createSlice({
	name: 'calculator',
	initialState: {
		value: '0',
		previousValue: undefined,
		operation: undefined,
	} as State,
	reducers: {
		keyPressed(state: State, { payload: key }: PayloadAction<string>) {
			// ...
			state.value = extendValue(state.value, key);
		},
	},
});

export const reducer = slice.reducer;
export const { keyPressed } = slice.actions;
