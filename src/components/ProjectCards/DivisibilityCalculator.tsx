import ProjectCard from "./ProjectCard";

function DivisibilityCalculatorCard() {
    return <ProjectCard 
    projImage="/Portfolio/DivisibilityClock.png" 
    imageAltText="Divisibility Clock" 
    projectName="Divisibility Clock" 
    detailsLink="/Portfolio/projects/DivisibilityClock"
    startDate={new Date(2024, 6, 25)} 
    completionDate={new Date(2024, 6, 26)}>
    A web app that generates diagrams to represent modular arithmatic patterns. It can be found <a href="https://betonjeanette.github.io/DivisibilityClock/">by following this link</a>.
    </ProjectCard>
}

export default DivisibilityCalculatorCard;