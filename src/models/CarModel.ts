export namespace CarModel {
  export interface Car {
    id: 1
    name: string
    link: string
    img: string
    description: string
    models: Model[]
  }

  export interface Model {
    name: string
    link: string
    img: string
    description: string
  }
}
