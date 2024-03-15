import { getHaulingShips, getCargoShips } from "./database.js";
const haulers = getHaulingShips()
const cargo = getCargoShips()

// needs to show how many ships the hauler is carrying 

export const haulerList = () => {
    

    let haulerHTML = `<ul>`

    for (const ship of haulers) {
        // Convert each dock object to an <li> and append to the haulerHTML string
        haulerHTML += `<li
        data-shipId="${ship.id}"
        data-type="hauler"
        >${ship.name} </li>`
    }

    haulerHTML += "</ul>"

    return haulerHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const userClicked = clickEvent.target

        if(userClicked.dataset.type === "hauler"){
        
            const haulerId = userClicked.dataset.shipid

            let cargoCounter = 0
            for (const ship of cargo) {
                if(parseInt(haulerId) === ship.haulerID){
                    cargoCounter++
                }
            }
            window.alert(`This hauler is carrying ${cargoCounter} ships`)
        }
    }
)







