import type { HeroProps } from "../../interfaces"
import "./Hero.css"

const Hero = ({backgroud ,title,description,btn}: HeroProps) => {
    return (
        <div className="hero">
            <img src={backgroud} alt="Hero Background" />
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            {btn && <button>{btn}</button>}
        </div>
    )
}

export default Hero
