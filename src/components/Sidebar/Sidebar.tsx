import styled from 'styled-components';
import ListItem from '../ListItem/ListItem';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { ILog, LogType } from '../../redux/logsSlice';

const JSidebarContainer = styled.ul`
	width: 35%;

	.sidebar-search-date {
		padding: 1rem 0;
		text-align: left;
		width: 100%;

		.sidebar-search {
			border-radius: 2rem;
			border: 1px solid #fbfbfb;
			background-color: #fbfbfb;
			width: 100%;
			margin-bottom: 1rem;

			input {
				width: 100%;
				height: 100%;
				border: none;
				margin: 1rem;
				background-color: transparent;
			}
		}
	}

	.sidebar-scroll {
		overflow-y: scroll;
		background-color: #fbfbfb;
		padding: 1rem;
		height: 65vh;
	}
`;

export default function JounrnalSidebar() {
	const { logs } = useSelector((state: RootState) => state.journallogs);

	return (
		<JSidebarContainer>
			<div className='sidebar-search-date'>
				<div className='sidebar-search'>
					<input type='text' placeholder='Search ...' />
				</div>
				<h2>January 2022</h2>
			</div>
			<div className='sidebar-scroll'>
				{logs.map((log: ILog, index) => {
					if (index == 0) {
						return <ListItem log={log} key={log.id} />;
					}
					return <ListItem log={log} key={log.id} />;
				})}
			</div>
		</JSidebarContainer>
	);
}
