import React, { useEffect, useState } from "react"
import "./Memory.css"

const Card = ({ imageSrc, title, resetCard = false, increaseScore, resetScore }) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleOnClick = () => {
        if (!isClicked) {
            increaseScore();
            setIsClicked(true);
            return;
        }
        resetScore();
    }

    useEffect(() => {
        resetCard && setIsClicked(false);
    }, [resetCard]);

    return (
        <div className="card" onClick={handleOnClick}>
            <div className="card-image">{imageSrc}</div>
            <p className="card-title">{title}</p>
        </div>
    )
}

export { Card }