import { useState } from "react"

const useScore = () => {
    const [score, setScore] = useState(0);

    const increaseScore = () => {
        setScore(prevScore => prevScore + 1);
    }

    const resetScore = () => {
        setScore(0);
    }

    return {
        score,
        increaseScore,
        resetScore,
    }
}

export { useScore }