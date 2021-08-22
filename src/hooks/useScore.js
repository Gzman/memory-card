import { useState } from "react"

const useScore = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const increaseScore = () => {
        setScore(prevScore => prevScore + 1);
    }

    const resetScore = () => {
        setScore(prevScore => {
            setBestScore(prevScore > bestScore ? prevScore : bestScore);
            return 0;
        });
    }

    return {
        score,
        bestScore,
        increaseScore,
        resetScore,
    }
}

export { useScore }