function iOS() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

function dialNumber(bodyText) {

    var selectedNumber = $('#numberSelect').find(":selected").val();
    var linkRef = "";

    if (bodyText === undefined) {
        bodyText = 'Get%20started%20by%20sending%20this%20message%20in%20to%20sign%20up';
    }
    if (selectedNumber == "0") {
        $('#errorModal').modal('show');}
    else {
        if (iOS() == true) {
            linkRef = 'sms://+' + selectedNumber + '&body=' + bodyText;
        }
        else {
            linkRef = 'sms://+' + selectedNumber + '?&body=' + bodyText;
        }
    window.location = linkRef;
    }
}