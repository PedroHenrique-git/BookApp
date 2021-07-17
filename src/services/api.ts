import useSWR from 'swr';
import { IPokemon } from '../interfaces/IPokemon';

export const baseUrl = 'https://api.pokemontcg.io/v2';

const fetcher = (url: string, apiKey: string): Promise<any> =>
    fetch(url, {
        method: 'get',
        headers: new Headers({
            'X-API-KEY': apiKey,
        }),
    }).then((resp) => resp.json());

export function getCardsData(id: string): IPokemon {
    const { data: pokemonData, error } = useSWR(
        [`${baseUrl}/cards/${id}`, process.env.REACT_APP_API_KEY],
        fetcher
    );

    return {
        pokemonData,
        isLoading: !pokemonData && !error,
        isError: error,
    };
}
