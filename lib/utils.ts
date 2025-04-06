export function formatDate(date:Date) {
    const day = String(date.getDate()).padStart(2, '0');  // Ensures 2 digits for day
    const month = String(date.getMonth() + 1).padStart(2, '0');  // Ensures 2 digits for month
    const year = date.getFullYear();
    
    return `${day} / ${month} / ${year}`;
  }