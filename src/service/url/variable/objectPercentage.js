export default function calculatePercentages(obj) {
    const totalItems = Object.keys(obj).length; // Total number of entries in the object
    const validValues = Object.values(obj).filter(value => value !== null).length; // Count of non-null values
    
    const evenPercentage = validValues > 0 ? (100 / validValues).toFixed(2) : 0; // Percentage for valid values
    const result = {};

    for (const key in obj) {
        if (obj[key] === null) {
            result[key] = 0; // Null values get 0%
        } else {
            result[key] = Math.ceil(JSON.parse(evenPercentage)); // Non-null values get an even percentage
        }
    }

    const sum = sumObjectValues(result)
    return sum - 17;
}

function sumObjectValues(obj) {
    let total = 0;

    for (const key in obj) {
        if (obj[key] !== null) { // Ignore null values
            total += obj[key];
        }
    }

    return total;
}