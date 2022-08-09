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

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};



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