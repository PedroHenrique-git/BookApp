import { getCardsData } from '../../services/api';

export default function Index(): JSX.Element {
    const { pokemonData, isError, isLoading } = getCardsData('xy1-1');

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>Error...</h1>;

    return <h1>{pokemonData.data.images.large}</h1>;
}
