document.addEventListener(
    "click",
    (clickEvent) =>{
        const userClicked = clickEvent.target
        if(userClicked.dataset.type === "dock"){

            const dockID = userClicked.dataset.dockid
            let dockLocation = null
            let currentHaulerShip = {name: "invalid"}
            

            for (const ship of haulers) {
                let haulerCounter = 0
                if(parseInt(dockID) === ship.FKDock ){ 
                    haulerCounter++ 
                if(haulerCounter <= 1) // else if currentHaulerShip === "undifined"-- break
                    currentHaulerShip = " " + ship.name 
                    dockLocation = userClicked.dataset.location
                    window.alert(`The ${dockLocation} dock is currently unloading ${currentHaulerShip}`)

                }else if( haulerCounter > 1){
                    currentHaulerShip = ship.name
                    dockLocation = userClicked.dataset.location
                    haulerCounter ++
                    window.alert(`The ${dockLocation} dock is currently unloading ${currentHaulerShip}, `)

                }else{
                    dockLocation = userClicked.dataset.location
                    window.alert(`The ${dockLocation} dock is currently unloading nothing `)
                }
            }
        }
    }

)