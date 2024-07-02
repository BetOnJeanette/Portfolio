import ProjectCard from "./ProjectCard"
function DaytaCard(){
    return <ProjectCard 
            projImage="/Portfolio/Dayta.png" 
            imageAltText="Dayta Calendar" 
            projectName="Dayta" 
            startDate={new Date(2024, 3)}>
            A calendar app that I started developing with <a href="https://zoezo.dev/">Zoey Eijgenberger</a>.
    </ProjectCard>
}

export default DaytaCard;