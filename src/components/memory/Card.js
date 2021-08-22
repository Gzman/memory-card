import React from "react"
import "./Memory.css"

const Card = ({ imageSrc, title }) => {
    return (
        <div className="card">
            <div className="card-image">{imageSrc}</div>
            <p className="card-title">{title}</p>
        </div>
    )
}

export { Card }