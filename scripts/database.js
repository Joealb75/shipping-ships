const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Lady May", FKDock: 1},
        { id: 2, name: "American Spirit", FKDock: 2},
        { id: 3, name: "Seawise Giant", FKDock: 3},
        { id: 4, name: "Floatin' & Boatin'", FKDock: 4},
    ],
    cargoShips:[
        {id:1, name: "The Titan's Haul", haulerID:1 },
        {id:2, name: "Neptune's Bounty", haulerID: 2},
        {id:3, name: "Galactic Galleon", haulerID:3 },
        {id:4, name: "Mermaid's Cargo", haulerID:3 },
        {id:5, name: "Stellar Freighter", haulerID:2 },
        {id:6, name: "Black Pearl Express", haulerID:4 },
        {id:7, name: "Dragon's Hoard", haulerID:4 },
        {id:8, name: "Phoenix Carrier", haulerID: 4},
    ]


}





/* HOW THE .MAP WORKS
 This line iterates over each element (each walker object) in the docks array using the map method. 
For each dock object, it creates a new object using the spread syntax ({...dock}). This spread syntax creates a shallow copy of each dock object.
 The map method returns an array of these copied dock objects.*/

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
    return database.haulers.map(hauler =>({...hauler}))
}

export const getCargoShips = () => {
    return database.cargoShips.map(cargoShip=>({...cargoShip}))
}