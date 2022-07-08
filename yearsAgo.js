function yearsAgo(year) {

    //const date = new Date(year).getFullYear(year);
    //console.log(date)

    const resentDate = new Date().getFullYear();
    //console.log(resentDate)

    return resentDate - year

}
module.exports = yearsAgo