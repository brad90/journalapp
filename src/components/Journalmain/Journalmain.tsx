import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../redux/store';

export default function Journalmain(currentLog: any) {
	const [isValid, setIsValid] = useState<boolean>(true);
	const wordCount = useRef<number>(0);
	const userTitle = useRef<string>('');
	const userText = useRef<string>('');

	const currentlog = store.getState().currentLog;

	const JournalMain = styled.div`
		display: flex;
		width: 65%;
		height: 100%;
		margin: 1rem;
		padding: 1rem 0 0 3rem;

		.main-container {
			width: 100%;
		}
		.main-bar {
			display: flex;
			width: 100%;
			align-content: center;
			justify-content: space-between;
			margin-bottom: 8rem;

			p {
				align-self: center;
			}
		}

		.text-area {
			width: 100%;
			margin-top: 2rem;
			display: block;

			input {
				width: 100%;
				height: 3rem;
				border: none;
				font-size: 3rem;
				padding-bottom: 0.2rem;
				margin-bottom: 3rem;
				border-bottom: 1px solid #c0b9b9;
			}
			textarea {
				width: 100%;
				height: 45vh;
				resize: none;
				border: none;
				font-family: arial;
			}

			.complete {
				display: flex;
				justify-content: end;
				margin-top: 1rem;
			}
		}
	`;

	console.log(currentLog);

	const handleTextInput = (e: string) => {
		wordCount.current = e.split(' ').length;
		userText.current = e;
	};

	const handleTitleInput = (e: string) => {
		userTitle.current = e;
	};

	const handleCompletion = () => {
		if (!userTitle.current || userText.current) {
			setIsValid(false);
		}

		const payload = {
			title: userTitle.current,
			text: userText.current,
		};
		console.log(payload);
	};

	return (
		<JournalMain>
			<div className='main-container'>
				<div className='main-bar'>
					<p>{wordCount.current}/500</p>
				</div>
				<div className='text-area'>
					<input
						type='text'
						placeholder='Title'
						maxLength={35}
						onChange={(e) => handleTitleInput(e.target.value)}
						value={currentlog.title ? currentlog.title : ''}
						disabled={currentlog.title ? true : false}
					/>
					{userTitle.current}
					<textarea
						onChange={(e) => handleTextInput(e.target.value)}
						required
						placeholder='Start Typing ...'
						value={currentlog.text ? currentlog.text : ''}
						disabled={currentlog.text ? true : false}
					/>
					<div className='complete'>
						<button className='btn' onClick={() => handleCompletion()}>
							Complete
						</button>
					</div>
				</div>
			</div>
		</JournalMain>
	);
}
