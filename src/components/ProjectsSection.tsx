import { For, createSignal, type Ref } from "solid-js"
import {DivisibilityCalculatorCard, GodotGameCode, LanPartyAppCard, DaytaCard} from "./ProjectCards/projects"

function ProjectSection(){
    const projectCards= [LanPartyAppCard, GodotGameCode, DaytaCard, DivisibilityCalculatorCard]
    const [frontCard, setFrontCard] = createSignal(projectCards.length - 1)
    const CARD_OFFSET = 10;

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


    return  <div class="AlternatingCards" style={{"position": "relative"}}>
        <button onClick={MoveToPreviousCard}>&lt</button>
        <For each={GetReorderedCards()}>
            { (card, index) => {
                return <div 
                    class="cardAnimator"
                    style={{
                        "transform-origin": "top-center",
                        "position": "absolute",
                        "top": (index() * CARD_OFFSET).toString() + "px",
                        "z-index": index().toString()
                    }}
                    >
                    {card()}
                </div>
            }}
        </For>
        <button onClick={MoveToNextCard}>&gt</button>
    </div>
}

export default ProjectSection