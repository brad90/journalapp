import styled from 'styled-components';
import { useState } from 'react';
import JournalSidebar from '../../components/Sidebar/Sidebar';
import JounralMain from '../../components/Journalmain/Journalmain';

export default function Journal() {
	const [activeOption, setActiveOption] = useState({});

	const JournlContainer = styled.div`
		display: flex;
	`;

	return (
		<JournlContainer>
			<JournalSidebar callBack={() => console.log('hello')} />
			<JounralMain />
		</JournlContainer>
	);
}
