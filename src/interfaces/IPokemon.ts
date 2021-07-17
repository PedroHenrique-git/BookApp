export interface IPokemon {
    pokemonData: {
        id: string;
        images: {
            large: string;
        };
    };
    isLoading: boolean;
    isError: any;
}
