import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Landing from './views/Landing/Landing';
import Login from './views/Login/Login';
import JournalLogs from './views/Journal/Logs/Logs';
import Dashboard from './views/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<div className='App'>
			<Layout>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/login' element={<Login />} />
					<Route path='/user/:userid/dashboard' element={<Dashboard />} />
					<Route path='/user/:userid/journal' element={<JournalLogs />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
