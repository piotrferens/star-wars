export interface Starship {
    name: string
    model: string
    manufacturer: string
    cost_in_credits: string
    length: string
    max_atmosphering_speed: string
    crew: string
    passengers: string
    cargo_capacity: string
    consumables: string
    hyperdrive_rating: string
    MGLT: string
    starship_class: string
    pilots: string[]
    films: string[]
    created: Date
    edited: Date
    url: string
}

export function starshipFactory(starship: Partial<Starship>): Starship {
    return {
        name: '',
        model: '',
        manufacturer: '',
        cost_in_credits: '',
        length: '',
        max_atmosphering_speed: '',
        crew: '',
        passengers: '',
        cargo_capacity: '',
        consumables: '',
        hyperdrive_rating: '',
        MGLT: '',
        starship_class: '',
        url: '',
        pilots: [],
        films: [],
        created: new Date(),
        edited: new Date(),
        ...starship
    }
}
