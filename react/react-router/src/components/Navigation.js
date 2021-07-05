
import { useHistory } from 'react-router-dom';

function Navigation() {
    const history = useHistory();

    return (
        <nav>
            <button onClick={() => history.push('/')}>Home</button>
            <button onClick={() => history.push('/about')}>About</button>
            <button onClick={() => history.push('/contact')}>Contact</button>
        </nav>
    );
}

export default Navigation;
