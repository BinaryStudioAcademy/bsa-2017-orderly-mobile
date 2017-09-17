export const GET_TABLES = 'GET_TABLE';
export const GET_TABLES_DONE = 'GET_TABLE';

export function getTables(baseId) {
    return {
        type: GET_TABLES,
        baseId: baseId,
    };
}
