import React, { useState } from "react"
import { Card } from "./Card"
import { shuffle } from "../../util/shuffle"
import "./Memory.css"

const Memory = ({memoryData, score, increaseScore, resetScore}) => {
    return (
        <div className="memory">
            {
                shuffle(memoryData).map((cardData) =>
                    <Card
                        key={cardData.id}
                        title={cardData.title}
                        imageSrc={cardData.src}
                        resetCard={score === 0}
                        increaseScore={increaseScore}
                        resetScore={resetScore}
                    />
                )
            }
        </div>
    )
}

export { Memory }