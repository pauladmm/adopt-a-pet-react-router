import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="search/*" element={<SearchPage />} />
          <Route path=":type/:id/*" element={<PetDetailsPage />} />
          <Route
            path="pet-details-not-found/"
            element={<PetDetailsNotFound />}
          />
          <Route path=":type?/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
