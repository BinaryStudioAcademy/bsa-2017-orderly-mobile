export const GET_BASE = 'GET_BASE';
export const GET_BASE_DONE = 'GET_BASE_DONE';
export const GET_BASE_ERROR = 'GET_BASE_ERROR';
export const GET_TABLES = 'GET_TABLE';
export const GET_TABLES_DONE = 'GET_TABLES_DONE';
export const GET_TABLES_ERROR = 'GET_TABLES_ERROR';
export const SWITCH_TABLE = 'SWITCH_TABLE';

export function getTables(tablesId) {
    console.log('ACTION GET TABLES');
    return {
        type: GET_TABLES,
        tablesId: tablesId,
    };
}

export function switchTable(tableId) {
    console.log('ACTION SWITCH TABLE');
    console.log(tableId);
    return {
        type: SWITCH_TABLE,
        tableId: tableId,
    };
}
