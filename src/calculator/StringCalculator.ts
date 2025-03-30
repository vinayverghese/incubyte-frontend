export function add(numbers: string): number {
    if (!numbers) {
        return 0;
    }

    const num = parseInt(numbers);
    if (!isNaN(num)) {
        return num;
    }

    return 0;
} 