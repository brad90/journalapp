interface LogOption {
	id: any;
	title: string;
	text: string;
	tags?: string[];
	date: Date;
}

type LogOptionState = {
	option: LogOption;
};

type LogOptionAction = {
	type: string;
	option: LogOption;
};

type DispatchType = (args: LogOptionAction) => LogOptionAction;
