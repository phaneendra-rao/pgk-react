export const ucwords = (str) => {
    if (str == null) { // test for null or undefined
        return "";
    }

    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}