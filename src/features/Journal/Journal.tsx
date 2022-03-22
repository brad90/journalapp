import styled from 'styled-components';
import { useState } from 'react';
import JournalSidebar from '../../components/Sidebar/Sidebar';
import JounralMain from '../../components/Journalmain/Journalmain';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export default function Journal() {
	const JournlContainer = styled.div`
		display: flex;
	`;

	return (
		<JournlContainer>
			<JournalSidebar />
			<JounralMain />
		</JournlContainer>
	);
}
