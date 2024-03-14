import { getDocks, getHaulingShips } from "./database.js"
const haulers = getHaulingShips()

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = `<ul>`

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li
        data-type="dock"
        data-dockID = "${dock.id}"
        data-location="${dock.location}"
        >${dock.location} can hold ${dock.volume} million tons of cargo </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) =>{
        const userClicked = clickEvent.target
        let dockLocation = userClicked.dataset.location
        if(userClicked.dataset.type === "dock"){

            const dockID = userClicked.dataset.dockid
            
            let currentHaulerShip = {name: "invalid"}
            
            let haulerArray = []

            for (const ship of haulers) {
                
                if(parseInt(dockID) === ship.FKDock ){ 
                    haulerArray.push(ship.name)
                 } else if(parseInt(dockID) === undefined){
                    window.alert(`The ${dockLocation} dock is currently unloading nothing `)

                    break
                 }
                        
                
                
            } window.alert(`The ${dockLocation} dock is currently unloading ${haulerArray.join(", ")}`)

        }
    }

)
// When a dock is clicked, present a message to the user that follows the format below if a hauler is currently at that dock.
// window.alert(` The ${dockLocation} dock is currently unloading ${currentHaulerShip}`)

// If there is no hauler at the dock, present the following message.
// window.alert(` The ${dock.location} dock is currently unloading nothing `)

// If there is more than one hauler at the dock, present the following message.
// window.alert(` The ${dock.location} dock is currently unloading ${"Boaty McBoatface"}, ${"Seawise Giant"} `)

// console.log(haulerArray.join(", "))

// if(haulerCounter <= 1) 
                //     currentHaulerShip = " " + ship.name 
                //     
                //     window.alert(`The ${dockLocation} dock is currently unloading ${currentHaulerShip}`)

                // }else if( haulerCounter > 1){
                //     currentHaulerShip = ship.name
                //     dockLocation = userClicked.dataset.location
                //     haulerCounter ++
                //     window.alert(`The ${dockLocation} dock is currently unloading ${currentHaulerShip}, `)

                // }else{
                //     dockLocation = userClicked.dataset.location
                //     window.alert(`The ${dockLocation} dock is currently unloading nothing `)