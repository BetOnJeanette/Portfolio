import { For, createSignal, type Ref } from "solid-js"
import {DivisibilityCalculatorCard, GodotGameCode, LanPartyAppCard, DaytaCard} from "./ProjectCards/projects"
import type { JsxElement } from "typescript";

function ProjectSection(){
    const [projectCards, setProjectCards] = createSignal([ LanPartyAppCard, GodotGameCode, DaytaCard, DivisibilityCalculatorCard])

    let firstCard: HTMLDivElement;
    return  <div class="AlternatingCards">
        <For each={projectCards()}>
            {(card, index) => {
                return <div class="cardAnimationContainer">
                    {card()}
                </div>
            }}
        </For>
    </div>
}

export default ProjectSection