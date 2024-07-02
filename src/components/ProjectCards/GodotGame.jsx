import ProjectCard from "./ProjectCard";

function GodotGameCode() {
    return <ProjectCard 
            projImage="/Portfolio/Godot.png" 
            imageAltText="Game" 
            projectName="Untitled Godot Game" 
            startDate={new Date(2024, 0)} 
            detailsLink="/Portfolio/projects/GodotGame">
            A board game video game built in Godot using C#. Players move around the board to complete jobs and buy properties for money,
            all to be the richest person in the end.
    </ProjectCard>
}

export default GodotGameCode;