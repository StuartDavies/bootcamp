import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation.js';

import HomePage from './pages/HomePage.js';
import ContactPage from './pages/ContactPage.js';
import AboutPage from './pages/AboutPage.js';

function App() {

    return (
        <div className="App">

            <header>
            </header>

            <main>
                <Router>

                    <Navigation />

                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/about" component={AboutPage} exact />
                        <Route path="/contact" component={ContactPage} exact />
                    </Switch>
                </Router>
            </main>

            <footer>
            </footer>

        </div>
    );
}

export default App;
