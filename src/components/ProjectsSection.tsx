import { For, createSignal, onMount, type Ref } from "solid-js"
import {DivisibilityCalculatorCard, GodotGameCode, LanPartyAppCard, DaytaCard, CarpoolCalculator} from "./ProjectCards/projects"
import "../styles/projectSection.css"

function ProjectSection(){
    const projectCards= [LanPartyAppCard, GodotGameCode, DaytaCard, DivisibilityCalculatorCard, CarpoolCalculator]
    const [frontCard, setFrontCard] = createSignal(projectCards.length - 1)
    const CARD_OFFSET = 15;
    
    const [totalHeight, setTotalHeight] = createSignal(0)

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
    let largestCard: HTMLDivElement | undefined;

    onMount(() => {
        if (largestCard == undefined) return;
        setTotalHeight(largestCard.offsetHeight + (CARD_OFFSET * (projectCards.length + 1)))
    })


    return  <div id="projects">
        <div class="projectButtonSpace">
            <button id="prevButton" class="projectChangeButton" onClick={MoveToPreviousCard}>&lt</button>
        </div>
        <div id="cards" style={{"height": totalHeight().toString() + "px"}}>
            <For each={GetReorderedCards()}>
                { (card, index) => {
                    return <div class="cardAnimator" style={{
                            "top": (index() * CARD_OFFSET).toString() + "px",
                            "z-index": (index() - projectCards.length).toString(),
                        }}
                        ref={(elm) => { if (largestCard == undefined || largestCard.clientHeight < elm.clientHeight) largestCard = elm; }}>
                        {card()}
                    </div>
                }}
            </For>
        </div>
        <div class="projectButtonSpace">
            <button id="nextButton" class="projectChangeButton" onClick={MoveToNextCard}>&gt</button>
        </div>
    </div>
}

export default ProjectSection