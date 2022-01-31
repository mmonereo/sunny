import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';
import AllSuns from './pages/AllSuns';
import Landing from './pages/Landing';
import SunsByCategory from './pages/SunsByCategory';
import SunDetails from './pages/SunDetails';

function App() {

	const [user, setUser] = useState(null);

	return (
		<div className="App">
			<BrowserRouter>
				<UserContext.Provider value={{ user, setUser }}>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/list/all" element={<AllSuns />} />
						<Route path="/list/:category" element={<SunsByCategory />} />
						<Route path="/details/:id" element={<SunDetails />} />
					</Routes>
				</UserContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
