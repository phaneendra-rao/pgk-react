import moment from 'moment/moment';

export const ucwords = (str) => {
    if (str == null) { // test for null or undefined
        return "";
    }

    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export const isEmailValid = (value) => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return value && mailformat.test(value);
}

export const checkObjectProperties = (obj) => {
    for (const key in obj) {
        if (obj[key] !== '' && obj[key] !== null && obj[key] !== undefined) {
            return true
        }
    }
    return false;
}

export const isFirstDateSameOrBefore = (startDate, endDate) => {
    if(startDate === undefined) {
        return false
    }

    if(endDate === undefined) {
        return false
    }



	var mStart = moment(startDate);
	var mEnd = moment(endDate);

    console.log('mStart ', mStart);
    console.log('mEnd ', mEnd);
    console.log('mStart.isSame(mEnd) || mStart.isBefore(mEnd) ', mStart.isSame(mEnd) || mStart.isBefore(mEnd));
	return mStart.isSame(mEnd) || mStart.isBefore(mEnd);
}