import { Link } from 'react-router-dom';
import { Page404Contaier } from './style';

export default function Page404(): JSX.Element {
    return (
        <Page404Contaier>
            <h1>404</h1>
            <Link to="/">return to home</Link>
        </Page404Contaier>
    );
}
