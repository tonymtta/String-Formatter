function cleanText(text) {
    return text.trim();
}

function capitalizeText(text) {
   const cleaned = cleanedText(text).toLowerCase();
   
   if (cleaned.length === 0) {
    return '';
   }

   return cleaned[0].toUpperCase() + cleaned.slice(1);
}

function formatDisplayName(firstName, lastName) {
    const cleanedFirstName = capitalize(firstName);
    const cleanedLastName = capitalize(lastName);

    return `${cleanedFirstName} ${cleanedLastName}`;
}
