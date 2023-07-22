export default function analyzeArray(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const findMid = sorted.length / 2;
    return {
        average: sorted[findMid],
        min: sorted[0],
        max: sorted[sorted.length - 1],
        length: sorted.length,
    };
}
