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

function dialNumber() {

    var selectedNumber = $('#numberSelect').find(":selected").val();
    var linkRef = "";

    if (selectedNumber == "0") {
        $('#errorModal').modal('show');}
    else {
        if (iOS() == true) {
            linkRef = 'sms://+' + selectedNumber + '&body=Get%20started%20by%20sending%20this%20message%20in%20to%20sign%20up';
        }
        else {
            linkRef = 'sms://+' + selectedNumber + '?&body=Get%20started%20by%20sending%20this%20message%20in%20to%20sign%20up';
        }
    window.location = linkRef;
    }
}