export function add(numbers: string): number {

    if (!numbers) return 0;

    let delimiters = [',', '\n'];  // Default delimiters
    let input = numbers;

    // Check for custom delimiter syntax
    const customDelimiterMatch = numbers.match(/^\/\/(\[.*\]|.)\n/);
    if (customDelimiterMatch) {
        let customDelimiter = customDelimiterMatch[1];
        console.log("Custom delimiter detected:", customDelimiter);

        // Handle multiple custom delimiters
        if (customDelimiter.startsWith('[') && customDelimiter.endsWith(']')) {
            delimiters = customDelimiter.slice(1, -1).split('][');
        } else {
            delimiters = [customDelimiter];
        }

        // Remove the delimiter definition from the input string
        input = numbers.slice(customDelimiterMatch[0].length);
    }
    // Create regex pattern for delimiters
    const delimiterRegex = new RegExp(
        delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
    );

    // Split the input string using the delimiter regex
    const numArray = input
        .split(delimiterRegex)
        .filter(num => num !== '')  // Filter out empty strings
        .map(num => {
           
            return Number(num);
        });

    // Check for negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    // Calculate the sum of numbers
    const sum = numArray.reduce((sum, num) => sum + num, 0);
    return sum;
}
