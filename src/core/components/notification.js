import { showMessage } from "react-native-flash-message";

const NotificationType ={
    SUCCESS: 'success',
    ERROR: 'danger',
    INFO: 'info',
    WARNING: 'warning'
};

export function showNotification(httpCode, httpMethod) {
    var nType = getNotificationType(httpCode);
    var payload = {
        message: getTitle(httpCode),
        description: HttpStatusHandler(nType, getActionType(httpMethod)),
        type: nType,
        icon: nType
    };
    showMessage(payload);
    return (nType === NotificationType.SUCCESS) ? Promise.resolve() : Promise.reject(httpCode);
}

function getNotificationType(httpCode) {
    if (httpCode >= 200 && httpCode <= 299) {
        return NotificationType.SUCCESS;
    }
    else if (httpCode >= 400 && httpCode <= 699) {
        return NotificationType.ERROR;
    }
}

function getTitle(httpCode) {
    if (httpCode >= 200 && httpCode <= 299) {
        return "Success";
    }
    else if (httpCode >= 400 && httpCode <= 699) {
        return "Error";
    }
}

function getActionType(httpMethod) {
    switch (httpMethod) {
        case 'get': return 'getting';
        case 'post': return 'saved';
        case 'put': return 'updated';
        case 'delete': return 'deleted';
    }
}

function HttpStatusHandler(httpCode, actionType) {
    switch (httpCode) {
        case 'success': return `Successfully ${actionType}`;
    }
}
