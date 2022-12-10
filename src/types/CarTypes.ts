export interface Car {
    _id: string,
    car_name: string,
    type: string
}
export interface Color {
    _id: string,
    desc: string,
}
export interface Detail {
    _id: string,
    key: string,
    value:string
}
export interface Type {
    _id: string,
    car_type:string,
    color: Color,
    value:Detail
}