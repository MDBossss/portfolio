import { ReactElement } from "react"

interface Props{
    text: string,
    icon: ReactElement
}

const Contact = ({text,icon}:Props) => {
  return (
    <div className="contact">
        <span className="icon">{icon}</span>
        <p className="text">{text}</p>
    </div>
  )
}

export default Contact