import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// import { updateCurrentLog } from '../../redux/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';

interface Props {
	option: {
		title: string;
		text: string;
		type: string;
		tags?: string[];
	};
}

export default function ListItem({ option }: Props) {
	const dispatch = useDispatch();

	const ListItem = styled.li`
		display: flex;
		width: 100%;
		background-color: white;
		min-height: 8rem;
		margin: 1rem 0;
		border-radius: 1rem;

		&:hover {
			cursor: pointer;
		}

		.list-item-type-color {
			background-color: pink;
			width: 5%;
			border-radius: 1rem;
		}

		.list-item-content {
			width: 100%;
			display: flex;
			padding: 1rem;
			text-align: left;

			.list-item-summary {
				width: 80%;
			}

			.list-item-date {
				display: flex;
				width: 20%;
				align-items: center;
			}
		}
	`;

	return (
		<ListItem onClick={() => dispatch(updateCurrentLog(option))}>
			<div className='list-item-type-color'></div>
			<div className='list-item-content'>
				<div className='list-item-summary'>
					<h4>{option.title}</h4>
					<p>{option.text ? option.text.slice(0, 10) + '...' : ''}</p>
					<div className='list-items-tags'></div>
				</div>
				<div className='list-item-date'>
					<h3>Tue, 4</h3>
				</div>
			</div>
		</ListItem>
	);
}
