import { read, stream, utils } from 'xlsx'
export const formatExcel = async (xlsx: any) => {
    try {
        const workFile = await read(xlsx.file, { type: 'buffer' })
        
        const first_sheet_name = workFile.SheetNames[0];
        const address_of_cell = 'A1';

        /* Get worksheet */
        const worksheet = workFile.Sheets[first_sheet_name]

        /* Find desired cell */
        const desired_cell = worksheet[address_of_cell]

        /* Get the value */
        const desired_value = (desired_cell ? desired_cell.v : undefined)

        return workFile
    } catch (error) {
        return error
    }
}