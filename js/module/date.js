const getQuentityDaysMonth = require('./data').months;
const selectMonth = document.querySelector('.main__form-date__month');
const selectMonthElements = selectMonth.children;
const selectDay = document.querySelector('.main__form-date__day');
const selectDayElements = selectDay.children;

selectMonth.onchange = function (event) {
    let target = event.target;
    const selectedOpt = target.selectedOptions[0];
    if (selectDay.children.length === getQuentityDaysMonth[selectedOpt.value]) return;

    if (selectDay.children.length > getQuentityDaysMonth[selectedOpt.value]) {

    }
}