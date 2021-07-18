import { useParams, useHistory } from 'react-router-dom';
import { BackgroundContainer } from '../../components/Background/style';
import { MainCardContainer } from './style';
import { getCardData } from '../../services/api';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

export default function CardPage(): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const { pokemonData, isError, isLoading } = getCardData(id);
    const history = useHistory();

    if (isLoading) return <Loading />;

    if (isError) return <Error />;

    return (
        <MainCardContainer>
            <BackgroundContainer />
            <div className="title">
                <button type="button" onClick={() => history.goBack()}>
                    back
                </button>
                <h1>{pokemonData.data.name}</h1>
            </div>
            <section className="card_conteudo">
                <div className="card_image">
                    <img
                        src={pokemonData.data.images.large}
                        alt={pokemonData.data.id}
                    />
                </div>
                <ul className="card_info">
                    <li>
                        <h2>Supertype</h2>
                        <p> {pokemonData.data.supertype}</p>
                    </li>
                    <li>
                        <h2>Subtypes</h2>
                        {pokemonData.data.subtypes.map((subtype) => (
                            <p> {subtype}</p>
                        ))}
                    </li>
                    <li>
                        <h2>Hp</h2>
                        <p>{pokemonData.data.hp}</p>
                    </li>
                    <li>
                        <h2>Types</h2>
                        {pokemonData.data.types.map((type) => (
                            <p> {type}</p>
                        ))}
                    </li>
                    <li>
                        <h2>Evolves to</h2>
                        {pokemonData.data.evolvesTo ? (
                            pokemonData.data.evolvesTo.map((evolves) => (
                                <p> {evolves}</p>
                            ))
                        ) : (
                            <p>none</p>
                        )}
                    </li>
                    <li className="attacks">
                        <h2>Attacks</h2>
                        {pokemonData.data.attacks.map((attack) => (
                            <div className="attack">
                                <h3>{attack.name}</h3>
                                <p>{attack.text}</p>
                                <p>{attack.cost}</p>
                                <p>{attack.damage}</p>
                                <p>{attack.convertedEnergyCost}</p>
                            </div>
                        ))}
                    </li>
                    <li className="weaknesses">
                        <h2>Weaknesses</h2>
                        {pokemonData.data.weaknesses ? (
                            pokemonData.data.weaknesses.map((weaknesse) => (
                                <div className="weaknesse">
                                    <h3>{weaknesse.type}</h3>
                                    <p>{weaknesse.value}</p>
                                </div>
                            ))
                        ) : (
                            <p>none</p>
                        )}
                    </li>
                </ul>
            </section>
        </MainCardContainer>
    );
}
