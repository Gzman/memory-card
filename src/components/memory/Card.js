import React, { useEffect, useState } from "react"
import "./Memory.css"

const Card = ({ imageSrc, title, reset = false, increaseScore, resetScore }) => {
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
        reset && setIsClicked(false);
    }, [reset]);

    return (
        <div className="card" onClick={handleOnClick}>
            <img className="card-image" src={imageSrc} alt={title} ></img>
            <p className="card-title">{title}</p>
        </div>
    )
}

export { Card }