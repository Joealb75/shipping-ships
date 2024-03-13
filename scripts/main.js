import { DockList } from "./docks.js";
import { haulerList } from "./haulers.js";
import { cargoList } from "./cargoShips.js";



const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <article>

        <section class="dock"> 
            <h2 class = "head">Docks</h2>
            ${DockList()} 
        </section>

        <section class = "cargo-hauler">
            <h2 class = "head">Haulers</h2>
            ${haulerList()}
        </section>

        <section class = "cargoShips">
            <h2 class = "head">Cargo Ships</h2>
            ${cargoList()}
        </section>

    </article>
`


mainContainer.innerHTML = applicationHTML