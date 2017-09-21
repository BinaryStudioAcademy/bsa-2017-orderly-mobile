export const OPEN_RECORD = 'OPEN_RECORD';
export const ADD_RECORD = 'ADD_RECORD';
export const REMOVE_RECORD = 'REMOVE_RECORD';
export const UPDATE_RECORD_DONE = 'UPDATE_RECORD_DONE';
export const UPDATE_RECORD_ERROR = 'UPDATE_RECORD_ERROR';

export function openRecord(recordId) {
    console.log('ACTION OPEN RECORD');
    console.log(recordId);
    return {
        type: OPEN_RECORD,
        recordId: recordId,
    };
}

export function addRecord(tableId) {
    return {
        type: ADD_RECORD,
        tableId: tableId,
    };
}

export function removeRecord(tableId, recordId) {
    return {
        type: REMOVE_RECORD,
        tableId: tableId,
        recordId: recordId,
    };
}
