/**
 * Gets the date string for a project
 * @param startDate The start date of a project
 * @param endDate The end date of a project 
 * @returns The formatted date string
 */
function GetDateString(startDate: Date, endDate?: Date){
    const dateOptions: Intl.DateTimeFormatOptions = { month: "short", year: "numeric", day: "numeric"};
    const startDateFormatStr = startDate.toLocaleDateString(undefined, dateOptions);
    const endDateFormatStr = endDate?.toLocaleDateString(undefined, dateOptions) ?? "Present";
    return `${startDateFormatStr} - ${endDateFormatStr}`
}

export default GetDateString;