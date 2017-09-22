import axios from 'axios';
const baseUrl = '/api/base';
const tableUrl = '/api/tables';

export function getBase(baseId) {
    return axios.get(baseUrl + '/' + baseId)
        .then((response) => response.data)
        .catch((err) => err.data);
}

export function getTables(ids) {
    return axios.get(`${tableUrl}/ids/` + ids.join(':'))
        .then((response) => response.data)
        .catch((err) => err.data);
}

export function getTable(tableId) {
    return axios.get(tableUrl + tableId)
        .then((response) => response.data)
        .catch((err) => err.data);
}

export function addTable(table) {
    return axios.post(tableUrl, table)
        .then((response) => response.data)
        .catch((err) => err.data);
}

export function addRecord(tableId) {
    return axios.put(tableUrl + '/' + tableId + '/fields/', {data: ''})
        .then((response) => response.data)
        .catch((err) => err.data);
}

export function removeRecord(tableId, recordId) {
    console.log('AT API');
    console.log(tableId, recordId);
    return axios.delete(tableUrl + '/' + tableId + '/records/' + recordId)
        .then((response) => response)
        .catch((err) => err.data);
}

export function updateTable({ _id, body }) {
	return axios.put(tableUrl + '/' + _id, body)
		.then((response) => response.data)
		.catch((err) => err.data);
}