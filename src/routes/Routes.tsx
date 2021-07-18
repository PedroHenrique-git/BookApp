import { Switch, Route } from 'react-router-dom';
import Index from '../pages/Index/Index';
import CardsPage from '../pages/CardsPage/CardsPage';
import CardPage from '../pages/CardPage/CardPage';
import Page404 from '../components/Page404/Page404';

export default function Routes(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/cards/:type?" component={CardsPage} />
            <Route exact path="/cards/searched/:name?" component={CardsPage} />
            <Route exact path="/card/:id" component={CardPage} />
            <Route exact path="*" component={Page404} />
        </Switch>
    );
}
