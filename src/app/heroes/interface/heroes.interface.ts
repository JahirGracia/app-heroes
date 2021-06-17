export interface Heroe {
    id?: string; //opcional - puede ser null
    superhero: string;
    publisher: Publisher;
    alter_ego: string;
    first_appearance: string;
    characters: string;
    alt_img?: string; //opcional - puede ser null
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel comics",
}