import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { CardWrap } from './style';
import { BackgroundContainer } from '../../components/Background/style';
import { getCardsData, pokemonPerPage } from '../../services/api';

export default function CardsPage(): JSX.Element {
    const [page, setPage] = useState(1);
    const { type } = useParams<{ type: string }>();
    const { pokemonData, isLoading, isError } = getCardsData(page, type);

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>Error...</h1>;

    return (
        <CardWrap>
            <BackgroundContainer />
            <div className="title">
                <Link to="/">Go to home</Link>
                <h1>{type[0].toUpperCase() + type.slice(1)} pokemons</h1>
            </div>
            <ul className="cards_wrap">
                {pokemonData.data.map((pokemon) => (
                    <Link to={`/card/${pokemon.id}`}>
                        <li>
                            <img src={pokemon.images.small} alt={pokemon.id} />
                        </li>
                    </Link>
                ))}
            </ul>
            <div className="page_control-wrap">
                <button
                    type="button"
                    onClick={() => setPage(page + 1)}
                    disabled={
                        page ===
                        Math.ceil(pokemonData.totalCount / pokemonPerPage)
                    }
                >
                    next page
                </button>
                <button
                    type="button"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    prev page
                </button>
            </div>
        </CardWrap>
    );
}
