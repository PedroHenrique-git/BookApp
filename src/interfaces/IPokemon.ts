export interface IPokemon {
    pokemonData: {
        data: Array<{
            id: string;
            images: {
                small: string;
            };
        }>;
        totalCount: number;
    };
    isLoading: boolean;
    isError: any;
}

export interface IPokemonCard {
    pokemonData: {
        data: {
            id: string;
            name: string;
            supertype: string;
            subtypes: Array<string>;
            hp: string;
            types: Array<string>;
            evolvesTo: Array<string>;
            attacks: Array<{
                name: string;
                cost: Array<string>;
                convertedEnergyCost: number;
                damage: string;
                text: string;
            }>;
            weaknesses: Array<{
                type: string;
                value: string;
            }>;
            images: {
                large: string;
            };
        };
    };
    isLoading: boolean;
    isError: any;
}
