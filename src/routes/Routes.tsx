import { Switch, Route } from 'react-router-dom';
import Index from '../pages/Index/Index';
import CardsPage from '../pages/CardsPage/CardsPage';
import CardPage from '../pages/CardPage/CardPage';

export default function Routes(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/cards/:type" component={CardsPage} />
            <Route exact path="/card/:id" component={CardPage} />
        </Switch>
    );
}
