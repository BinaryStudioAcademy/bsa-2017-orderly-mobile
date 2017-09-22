export const OPEN_RECORD = 'OPEN_RECORD';
export const ADD_RECORD = 'ADD_RECORD';
export const REMOVE_RECORD = 'REMOVE_RECORD';
export const UPDATE_RECORD_DONE = 'UPDATE_RECORD_DONE';
export const UPDATE_RECORD_ERROR = 'UPDATE_RECORD_ERROR';
export const CHANGE_RECORD = 'CHANGE_RECORD';
export const PERFORM_CHANGE_RECORD = 'PERFORM_CHANGE_RECORD';
export const UPDATE_TABLE = 'UPDATE_TABLE';
export const UPDATE_TABLE_FAILED = 'UPDATE_TABLE_FAILED';
export const RENAME_TABLE_SUCCEEDED = 'RENAME_TABLE_SUCCEEDED';
export const RENAME_TABLE_FAILED = 'RENAME_TABLE_FAILED';

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

export const changeRecord = (tableId, recordId, data, user) => {
    return {
        type: 'CHANGE_RECORD',
        tableId: tableId,
        recordId: recordId,
        data: data,
        user: user
    };
};