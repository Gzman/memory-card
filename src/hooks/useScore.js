import { useEffect, useState } from "react"

const useScore = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    // useEffect(() => { // bad causes rerenders
    //     setBestScore(score > bestScore? score : bestScore);
    // }, [score]);

    const increaseScore = () => {
        setScore(prevScore => prevScore + 1);
    }

    const resetScore = () => {
        setScore(prevScore => {
            setBestScore(prevScore > bestScore? prevScore : bestScore);
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