interface TypeSize {
    id: number;
    name: string;
    prices: number;
    imageUrl: string;
    description: string;
    coffeeType: number; 
}
class Coffee {
    id: number;
    name: string;
    listItems: TypeSize[];

    constructor(id: number, name: string, listItems: TypeSize[]) {
        this.id = id;
        this.name = name;
        this.listItems = listItems;
    }
}

export default Coffee;
