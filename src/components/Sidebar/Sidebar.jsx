import styled from 'styled-components';
import ListItem from '../ListItem/ListItem';

export default function JounrnalSidebar({ callBack }) {
	const options = [
		{ id: 1234, type: 'log', title: 'Something happend today', summary: 'Today was when i meant to the shdisuh fsuidf h sdiufh si hf ....', date: Date.now() },
		{ id: 1235, type: 'answer', title: 'Something happend today', summary: 'Today was when i meant to the sidhfusd  sidfuhs difu  sdfhi....', date: Date.now() },
		{ id: 1236, type: 'log', title: 'Something happend today', summary: 'Today was when i meant to the sdfhsfi uh s sdiufh ....', date: Date.now() },
		{ id: 1237, type: 'log', title: 'Something happend today', summary: 'Today was when i meant to the ....', date: Date.now() },
		{ id: 1238, type: 'answer', title: 'Something happend today', summary: 'Today was when i meant to the ....', date: Date.now() },
		{ id: 1239, type: 'answer', title: 'Something happend today', summary: 'Today was when i meant to the ....', date: Date.now() },
	];

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

	return (
		<JSidebarContainer>
			<div className='sidebar-search-date'>
				<div className='sidebar-search'>
					<input type='text' placeholder='Search ...' />
				</div>
				<h2>January 2022</h2>
			</div>
			<div className='sidebar-scroll'>
				{options.map((opt) => {
					return <ListItem option={opt} key={opt.id} />;
				})}
			</div>
		</JSidebarContainer>
	);
}
