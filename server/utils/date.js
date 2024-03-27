

function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const fullDate = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${fullDate}`;
}

module.exports = { getCurrentDate };
