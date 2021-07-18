import { Link, useParams } from 'react-router-dom';
import { BackgroundContainer } from '../../components/Background/style';
import { MainCardContainer } from './style';
import { getCardData } from '../../services/api';

export default function CardPage(): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const { pokemonData, isError, isLoading } = getCardData(id);

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>Error...</h1>;

    return (
        <MainCardContainer>
            <BackgroundContainer />
            <div className="title">
                <Link to="/">Go to home</Link>
                <h1>{id}</h1>
            </div>
            <section className="card_conteudo">
                <div className="card_image">
                    <img
                        src={pokemonData.data.images.large}
                        alt={pokemonData.data.id}
                    />
                </div>
            </section>
        </MainCardContainer>
    );
}
