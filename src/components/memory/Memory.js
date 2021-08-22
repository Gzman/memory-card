import React from "react"
import { Card } from "./Card"
import { memoryData } from "../../data/memoryData"
import { shuffle } from "../../util/shuffle"
import "./Memory.css"

const Memory = () => {
    return (
        <div className="memory">
            {
                shuffle(memoryData).map((cardData) =>
                    <Card
                        key={cardData.id}
                        title={cardData.title}
                        imageSrc={cardData.src}
                    />
                )
            }
        </div>
    )
}

export { Memory }