let table;

/**
 * Used URL : https://datatables.net/examples/data_sources/dom
 */
/**
 * 
 * @param {*} selector : pass the query element for the table
 * @returns : table depends on the query 
 */
function getTable(selector) {
    table = $(selector)
    return table;
}

/**
 * 
 * @param {*} rowNum : row number for table row
 * @param {*} cellNum : cell number for table row 
 * @returns : element cell on the basis of index passed over the element
 */
function getCell(rowNum, cellNum) {
    return table.find(`tbody tr:nth-of-type(${rowNum}) td:nth-of-type(${cellNum})`)
}

// Calling the function 

let tableElement = getTable('div#example_wrapper table')
let cell = getCell(4,2)
let cellText = getCell(4,2).text()