export interface Size {
    width: number,
    length: number,
    height: number
}

export interface Appliance {
    category: string,
    title: string,
    weight: number,
    size:Size
}