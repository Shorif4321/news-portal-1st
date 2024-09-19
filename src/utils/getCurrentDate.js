export function getCurrentDate() {
    const now = new Date();

    // Array of weekday names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Array of month names
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Get current values
    const weekday = weekdays[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    // Create the output string
    return `${weekday}, ${month} ${date}, ${year}`;

}

// Call the function to see the result
getCurrentDate();