import './App.css';
import React from 'react';
import HighScoreForm from './components/HighScoreForm'
import HighScoreTable from './components/HighScoreTable'

function App() {

    const [scores, setScores] = React.useState([]);

    React.useEffect(() => {
        refreshScores();
    }, []);

    const refreshScores = async () => { 
        const response = await fetch("http://localhost:3000/api/scores", {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        });

        const data = await response.json();

        setScores(data);
    };

    return (
        <div className="App">

            <HighScoreForm refreshTableCallback={refreshScores} />

            <HighScoreTable scores={scores} />

        </div>
    );
}

export default App;
