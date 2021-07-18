import { Link } from 'react-router-dom';
import { TypeCard } from './style';

export default function TypeLink({
    type,
    img,
}: {
    type: string;
    img: string;
}): JSX.Element {
    return (
        <TypeCard type={type}>
            <Link to={`/cards/${type}`}>
                <img src={img} alt={type} />
            </Link>
        </TypeCard>
    );
}
