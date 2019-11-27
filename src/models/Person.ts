export interface Person {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    films: string[]
    species: string[]
    vehicles: string[]
    starships: string[]
    created: Date
    edited: Date
    url: string
}

export function personFactory(person: Partial<Person>): Person {
    return {
        name: '',
        height: '',
        mass: '',
        hair_color: '',
        skin_color: '',
        eye_color: '',
        birth_year: '',
        gender: '',
        homeworld: '',
        url: '',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: new Date(),
        edited: new Date(),
        ...person
    }
}
