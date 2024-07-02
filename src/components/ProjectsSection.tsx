import { For, createSignal, type Ref } from "solid-js"
import {DivisibilityCalculatorCard, GodotGameCode, LanPartyAppCard, DaytaCard} from "./ProjectCards/projects"
import type { JsxElement } from "typescript";

function ProjectSection(){
    const projectCards= [LanPartyAppCard, GodotGameCode, DaytaCard, DivisibilityCalculatorCard]
    const [frontCard, setFrontCard] = createSignal(projectCards.length - 1)
    
    function MoveToNextCard(){
        // Move forward and mod back to prevent OOB
        setFrontCard(prev => (prev + projectCards.length - 1) % projectCards.length);
    }

    function MoveToPreviousCard(){
        setFrontCard(prev => (prev + 1) % projectCards.length);
    }

    function GetReorderedCards(){
        return [...projectCards.slice(frontCard() + 1), ...projectCards.slice(0, frontCard() + 1)]
    }


    return  <div class="AlternatingCards">
        <button onClick={MoveToPreviousCard}>&lt</button>
        <For each={GetReorderedCards()}>
        </For>
        <button onClick={MoveToNextCard}>&gt</button>
    </div>
}

export default ProjectSection