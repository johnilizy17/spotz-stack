export default function calculateAge(timestamp:string) {
    const birthDate = new Date(timestamp); // Convert the timestamp to a Date object
    const today = new Date(); // Current date
  
    let age = today.getFullYear() - birthDate.getFullYear(); // Difference in years
  
    // Adjust the age if the current date is before the birthday this year
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
  
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
  
    return age;
  }
  