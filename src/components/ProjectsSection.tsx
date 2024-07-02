import { For, createSignal, type Ref } from "solid-js"
import {DivisibilityCalculatorCard, GodotGameCode, LanPartyAppCard, DaytaCard} from "./ProjectCards/projects"
import type { JsxElement } from "typescript";

function ProjectSection(){
    const projectCards= [LanPartyAppCard, GodotGameCode, DaytaCard, DivisibilityCalculatorCard]
    const [frontCard, setFrontCard] = createSignal(projectCards.length - 1)
    
    function MoveToNextCard(){
        // Move forward and mod back to prevent OOB
        const movedForward = (frontCard() + projectCards.length - 1) % projectCards.length;
        setFrontCard(movedForward);
    }
    function MoveToPreviousCard(){
        const movedForward = (frontCard() + 1) % projectCards.length;
        setFrontCard(movedForward);
    }

    function GetCardsSentToBack(){
        return projectCards.slice(frontCard() + 1)
    }

    function GetFrontmostCards(){
        return projectCards.slice(0, frontCard() + 1)
    }


    return  <div class="AlternatingCards">
        <button onClick={MoveToPreviousCard}>&lt</button>
        <For each={GetCardsSentToBack()}>
            { (card) => card() }
        </For>
        <For each={GetFrontmostCards()}>
            { (card) => card() }
        </For>
        <button onClick={MoveToNextCard}>&gt</button>
    </div>
}

export default ProjectSection