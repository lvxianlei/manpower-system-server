import { readFile, stream, utils } from 'xlsx'

export { fromAuthToBtn } from '../CommenJSON/Auth'

export const formatExcel = async (xlsx: any) => {
    try {
        const workFile = await readFile(xlsx.file.path, { type: 'buffer' })
        const first_sheet_name = workFile.SheetNames[0];
        const worksheet = workFile.Sheets[first_sheet_name]

        return utils.sheet_to_json(worksheet)
    } catch (error) {
        return error
    }
}