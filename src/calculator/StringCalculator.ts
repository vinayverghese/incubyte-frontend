export function add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /[,\n]/;
    let numbersToProcess = numbers;

    if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/(.+)\n/);
        if (match) {
            const escapedDelimiter = match[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            delimiter = new RegExp(escapedDelimiter);
            numbersToProcess = numbers.slice(match[0].length);
        }
    }

    const numberArray = numbersToProcess
        .split(delimiter)
        .map(num => parseInt(num.trim(), 10))
        .filter(num => !isNaN(num));

    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
}
