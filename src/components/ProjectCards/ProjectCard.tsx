import "../../styles/colorPalette.css"
import "./ProjectCard.css"
import GetDateString from "../DateSubtitle"
import type { JSX } from "solid-js/jsx-runtime";

interface IProps {
    projImage: string;
    imageAltText: string;
    projectName: string;
    startDate: Date;
    children: JSX.Element;
    completionDate?: Date;
    detailsLink?: string
}

function ProjectCard({ children, projImage, imageAltText, projectName, startDate, completionDate, detailsLink}: IProps){
    const showDetailsLink = !(detailsLink === undefined)
    return <>
        <div class="ProjectCard">
            <img src={ projImage } alt={ imageAltText } width={800} height={450}/>
            <div class="ProjectDesc">
                <h2>{ projectName }</h2>
                <sub>{GetDateString(startDate, completionDate)}</sub>
                <p> {children} </p>
                {showDetailsLink && 
                    <a href={detailsLink} class="detailsLink">
                        <p>Click here for more details.</p>
                    </a>
                }
                
            </div>
        </div>
    </>
}
export default ProjectCard;