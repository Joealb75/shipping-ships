import { getCargoShips } from "./database.js";

export const cargoList = () => {
    const cargoShips = getCargoShips()

    let cargoHTML = `<ul>`
    
    for (const ship of cargoShips) {
        cargoHTML += `<li>${ship.name}</li>`
    }

    cargoHTML += `</ul>`

    return cargoHTML
}
    