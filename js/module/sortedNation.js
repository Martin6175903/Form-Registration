// Sorting of nationalities
module.exports = () => {
    const nationality = document.getElementById('nationality');
    const nationalityElements = document.getElementById('nationality').children;
    let copyElements = [...nationalityElements];

    copyElements.sort((a, b) => {
        return a.value == b.value
            ? 0
            : (a.value > b.value ? 1 : -1);
    });

    for (let i = 0; i < copyElements.length; i++) {
        nationality.append(copyElements[i]);
    }
}