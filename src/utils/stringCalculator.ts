export function add(numbers: string): number {
    if (!numbers) return 0;

    // Handle custom delimiters
    const delimiterRegex = /^\/\/(.+)\n/;
    let delimiter = ',';
    let input = numbers;

    // Check if custom delimiter is used
    const match = input.match(delimiterRegex);
    if (match) {
        delimiter = match[1];
        input = input.substring(match[0].length);
    }

    // Prepare a regular expression for splitting the input
    const delimiterPattern = `[${delimiter}\n,]`;
    const numArray = input
        .split(new RegExp(delimiterPattern))
        .map(num => {
            const parsed = Number(num);
            return isNaN(parsed) ? 0 : parsed;
        });

    // Check for negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
