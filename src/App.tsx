import { HashRouter } from 'react-router-dom';
import { GlobalStyles } from './style/GlobalStyles';
import Routes from './routes/Routes';

export default function App(): JSX.Element {
    return (
        <HashRouter>
            <GlobalStyles />
            <Routes />
        </HashRouter>
    );
}
