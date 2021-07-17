import React from 'react';

function HighScoreTable(props) {

    const [scores, setScores] = React.useState([]);

    React.useEffect(() => {
        setScores(props.scores);
    }, [props.scores]);

    return (
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {scores.map((score, index) => <tr key={index}><td>{score.name}</td><td>{score.score}</td></tr>)}
        </tbody>
    </table>
    );
}

export default HighScoreTable;