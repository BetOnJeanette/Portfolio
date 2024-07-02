
import ProjectCard from "./ProjectCard"

function LanPartyAppCard() {
    return <ProjectCard 
        projImage="/Portfolio/LanPartyApp.png" 
        imageAltText="LAN Party App" 
        projectName="LAN Party App" 
        detailsLink="/Portfolio/projects/LanPartyApp"
        startDate={new Date(2020, 8)} 
        completionDate={new Date(2020, 11)} >
        A webapp where players could create and find local game events. They could share what games are going to be played, 
        who was planning on attending, and what people should bring.
    </ProjectCard>
}

export default LanPartyAppCard;