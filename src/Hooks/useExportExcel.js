import { writeFile, utils } from 'xlsx'
export const UseExportExcel = (data,sectionName) => {
    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    writeFile(workbook, `${sectionName}.xlsx`);
}