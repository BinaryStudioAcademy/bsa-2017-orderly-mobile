export const OPEN_RECORD = 'OPEN_RECORD';
export const REMOVE_RECORD = 'REMOVE_RECORD';

export function openRecord(recordId) {
    console.log('ACTION OPEN RECORD');
    console.log(recordId);
    return {
        type: OPEN_RECORD,
        recordId: recordId,
    };
}

export function removeRecord(recordId) {
    console.log('ACTION REMOVE RECORD');
    return {
        type: REMOVE_RECORD,
        recordId: recordId,
    };
}
