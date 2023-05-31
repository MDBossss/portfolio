import { ReactElement } from "react"

interface Props{
    text: string,
    icon: ReactElement
}

const TechIcon = ({text,icon}:Props) => {
  return (
    <div className="slide-icon">
        <span className="icon">{icon}</span>
        <p className="name">{text}</p>
    </div>
  )
}

export default TechIcon