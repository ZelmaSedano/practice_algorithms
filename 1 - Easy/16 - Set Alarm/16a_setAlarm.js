// create a function that tells someone whether to set an alarm or not
function setAlarm(str1, str2) {
    if(str1 === 'true' && str2 === 'false') {
        return true;
    } else {
        return false;
    }
}

console.log(setAlarm('false', 'false'));