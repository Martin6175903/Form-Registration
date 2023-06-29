// Connecting an object with the number of days in certain months
const getQuentityDaysMonth = require('./data').months;
// Month Select element
const selectMonth = document.querySelector('.main__form-date__month');
// Day Selection element
const selectDay = document.querySelector('.main__form-date__day');
// Day Select Element children
const selectDayElements = selectDay.children;

// Processing the selection of the month of birth
selectMonth.onchange = function ({target}) {
    const selectedOpt = target.selectedOptions[0];
    const lenMonth = getQuentityDaysMonth[selectedOpt.value];

    if (selectDay.children.length === lenMonth) return;

    if (selectDay.children.length > lenMonth) {
        const difference = selectDay.children.length - getQuentityDaysMonth[selectedOpt.value];

        for (let i = 1; i < difference + 1; i++) {
            selectDayElements[selectDayElements.length - 1].remove();
        }
    }

    if (selectDay.children.length < lenMonth) {
        const difference = Math.abs(selectDay.children.length - getQuentityDaysMonth[selectedOpt.value]);

        for (let i = 1; i < difference + 1; i++) {
            const createOption = document.createElement('option');
            createOption.value = `${+selectDayElements[selectDayElements.length - 1].value + 1}`;
            createOption.textContent = createOption.value;
            selectDay.append(createOption);
        }

    }
}