import React from "react"
import { Score } from "./Score"
import { Logo } from "./Logo"

const Header = ({ score, bestScore, maxPoints }) => {
    return (
        <div className="header">
            <Logo />
            <div className="header-content">
                {
                    score === maxPoints
                        ? <h3 className="win-message">Congratulations, you won!</h3>
                        : <h3 className="description">Get points by clicking on a Card - but don't click more than once.</h3>
                }
                <div className="scores">
                    <Score label="Score:" value={score} />
                    <Score label="Best Score:" value={bestScore} />
                </div>
            </div>
        </div >
    )
}

export { Header }