import { getCargoShips, getHaulingShips } from "./database.js";

const haulers = getHaulingShips()

export const cargoList = () => {
    const cargoShips = getCargoShips()

    let cargoHTML = `<ul>`
    
    for (const ship of cargoShips) {
        cargoHTML += `<li
        data-haulerID="${ship.haulerID}"
        data-type="cargo"
        data-name="${ship.name}"
        >${ship.name}</li>`
    }

    cargoHTML += `</ul>`

    return cargoHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const userClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if(userClicked.dataset.type === "cargo"){

            // Get the haulerId value of the shipping ship clicked
            const cargoHaulerId = userClicked.dataset.haulerid

            // Define a default object for the found hauler
            let currentHaulingShip = {name: "incorrect"}
            let currentCargoShip = null
            // Iterate the array of hauler objects
            for (const ship of haulers) {
                if(parseInt(cargoHaulerId) === ship.id){
                    currentHaulingShip = ship.name
                    currentCargoShip = userClicked.dataset.name
                }
            }
            window.alert(` ${currentCargoShip} is being hauled by ${currentHaulingShip} `)
        }
    }
)