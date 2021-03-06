import React from "react"
import "./Header.css"

const Score = ({ label, value }) => {
    return (
        <div className="score">
            <p className="score-label">{label}</p>
            <p className="score-value pop-score">{value}</p>
        </div>
    )
}

export { Score }