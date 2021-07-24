// create a function that tells the user whether to set an alarm or not, based on two given boolean values 
function setAlarm(str1, str2) {
    if(str1 === 'true' && str2 === 'false') {
        return true;
    } else {
        return false;
    }
}

console.log(setAlarm('true', 'false'));