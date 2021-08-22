
const getRandomIndicies = (arr) => {
    const indicies = [...arr.keys()];
    const randomIndicies = [];
    while (indicies.length > 0) {
        const index = indicies[Math.floor(Math.random() * indicies.length)];
        indicies.splice(indicies.indexOf(index), 1);
        randomIndicies.push(index);
    }
    return randomIndicies;
}

const shuffle = (arr) => {
    return getRandomIndicies(arr).map((index) => arr[index]);
}

export { shuffle }