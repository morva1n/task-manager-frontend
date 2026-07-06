export const formattedDate = (date) => {
    const formatted = new Date(date).toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    console.log(formatted);
    return formatted;
}