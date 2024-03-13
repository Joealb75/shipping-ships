import { getHaulingShips, getCargoShips } from "./database.js";
const haulers = getHaulingShips()
const cargo = getCargoShips()

// needs to show how many ships the hauler is carrying 
document.addEventListener(
    "click",
    (clickEvent) =>{
        const userClicked = clickEvent.target
        const haulerId = userClicked.dataset.shipId

        for (let i=0; i < cargo.length; i++){
            if(cargo.haulerId === haulerId)
                window.alert(`This hauler is carrying  ships`)
        }
    }

)

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




