import ProjectCard from "./ProjectCard";
export default function CarpoolCalculator(){
    return <ProjectCard 
        startDate={new Date(2024, 8, 4)}
        completionDate={new Date(2024, 9, 6)}
        imageAltText="Carpool Calculator Example"
        projImage="/Portfolio/CarpoolCalculator.png"
        projectName="Carpool Calculator"
        detailsLink="/Portfolio/projects/CarpoolCalculator">

        A web app that allows people to find the most efficient routes for people trying to carpool to a location. 
        It can be found <a href="https://betonjeanette.github.io/CarpoolCalculator/">by following this link</a>.
    </ProjectCard>
}