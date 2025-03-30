export function add(numbers: string): number {
    if (!numbers) {
        return 0;
    }

    const numberArray = numbers.split(',').map(num => parseInt(num.trim()));

    return numberArray.reduce((sum, num) => sum + num, 0);
} 