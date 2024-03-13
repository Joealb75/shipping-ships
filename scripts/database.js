const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ]
}








export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

// This line iterates over each element (each walker object) in the docks array using the map method. 
//For each dock object, it creates a new object using the spread syntax ({...dock}). This spread syntax creates a shallow copy of each dock object.
// The map method returns an array of these copied dock objects.