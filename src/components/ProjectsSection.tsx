import { For, createSignal, onMount, type Accessor, type Ref } from "solid-js"
import {DivisibilityCalculatorCard, GodotGameCode, LanPartyAppCard, DaytaCard, CarpoolCalculator} from "./ProjectCards/projects"
import "../styles/projectSection.css"

function ProjectSection(){
    const projectCards= [LanPartyAppCard, GodotGameCode, DaytaCard, DivisibilityCalculatorCard, CarpoolCalculator]
    const [frontCard, setFrontCard] = createSignal(projectCards.length - 1)
    const CARD_OFFSET = 15;
    
    const [totalHeight, setTotalHeight] = createSignal(0)
    const [moveTopUp, setMoveTopUp] = createSignal<boolean>(false);
    const [moveBottomUp, setMoveBottomUp] = createSignal<boolean>(false);
    const CARD_MOVEMENT_TIME=62.5;

    function MoveToNextCard(){
        // prevent 
        if (moveTopUp() || moveBottomUp()) return;
        setMoveTopUp(true);
        setTimeout(() => {
            setFrontCard(prev => (prev + projectCards.length - 1) % projectCards.length);
            setMoveTopUp(false);
        }, CARD_MOVEMENT_TIME)
        // Move forward and mod back to prevent OOB
    }

    function MoveToPreviousCard(){
        if (moveTopUp() || moveBottomUp()) return;
        setMoveBottomUp(true);
        setTimeout(() => {
            setFrontCard(prev => (prev + 1) % projectCards.length);
            setMoveBottomUp(false);
        }, CARD_MOVEMENT_TIME)
    }

    function GetReorderedCards(){
        return [...projectCards.slice(frontCard() + 1), ...projectCards.slice(0, frontCard() + 1)]
    }
    let largestCard: HTMLDivElement | undefined;

    onMount(() => {
        if (largestCard == undefined) return;
        setTotalHeight(largestCard.offsetHeight + (CARD_OFFSET * (projectCards.length + 1)))
    })

    function GetCardTopOffset(idx: Accessor<number>):number{
        if (idx() === 0 && moveBottomUp()) return (idx() - 1) * CARD_OFFSET;
        else if (idx() === projectCards.length - 1 && moveTopUp()) return (idx() - 1) * CARD_OFFSET;
        return idx() * CARD_OFFSET
    }


    return  <div id="projects">
        <div class="projectButtonSpace">
            <button id="prevButton" class="projectChangeButton" onClick={MoveToPreviousCard}>&lt</button>
        </div>
        <div id="cards" style={{"height": totalHeight().toString() + "px"}}>
            <For each={GetReorderedCards()}>
                { (card, index) => {
                    return <div class="cardAnimator" style={{
                            "top": GetCardTopOffset(index).toString() + "px",
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