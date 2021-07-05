import './App.css';
import { useState } from 'react';

import HomePage from './pages/HomePage.js';
import ContactPage from './pages/ContactPage.js';
import AboutPage from './pages/AboutPage.js';

function App() {

    const [currentPage, setCurrentPage] = useState(<HomePage />);

    return (
        <div className="App">

            <header>
            </header>

            <nav>
                <button onClick={() => setCurrentPage(<HomePage />)}>Home</button>
                <button onClick={() => setCurrentPage(<AboutPage />)}>About</button>
                <button onClick={() => setCurrentPage(<ContactPage />)}>Contact</button>
            </nav>

            <main>
                {currentPage}
            </main>

            <footer>
            </footer>

        </div>
    );
}

export default App;
