import React from 'react';

function HighScoreForm(props) {

    const [name, setName] = React.useState("");
    const [score, setScore] = React.useState("");    

    const handleSubmit = e => {
        e.preventDefault();
        
        submitScore(name, score);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name: <input type="text" onChange={(e) => setName(e.target.value)} /></label>
            </div>
            <div>
            <label>Score: <input type="text" onChange={(e) => setScore(e.target.value)} /></label>
            </div>
            <input type="submit" name="Submit Score" />
        </form>
    );

    function submitScore(name, score) {

        fetch("http://localhost:3000/api/scores", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ "name": name, "score": score })
        }).then( props.refreshTableCallback() );
    }
}

export default HighScoreForm;