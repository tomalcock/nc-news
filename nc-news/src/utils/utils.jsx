export function createdAt(dateAndTime) {

    const asString = dateAndTime.toString();
    return asString.slice(0,10) + ' at ' + asString.slice(11,16);
    
}