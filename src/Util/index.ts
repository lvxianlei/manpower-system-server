import { List } from '../CommenJSON'
export { fromAuthToBtn } from '../CommenJSON/Auth'

export const formatUserInfoXLXS = (sheetJson: Array<any>): Array<any> => sheetJson.map((json: any) => {
    const formatItem: any = {}
    Object.keys(json).forEach((jsonKey: string) => {
        const headData: any = List.user_info.filter((headItem: any) => headItem.label === jsonKey)[0]
        if (headData) {
            formatItem[headData.name] = json[jsonKey]
            formatItem.status = 1
        }
    })
    return formatItem
})

export const formatAttendanceXLXS = (sheetJson: Array<any>): Array<any> => {
    const sheetData: Array<any> = []
    const head: any = sheetJson[1]
    console.log(head)
    sheetJson.map((json: any, index: number) => {
        if (index === 1) {
            
        }
        Object.keys(json).forEach((jsonKey: string) => {

        })
    })
    return sheetData
}

type XLXS_type = 'user_info' | 'attendance' | 'achievements'

export const formatXLXS = (sheetJSON: Array<any>, type: XLXS_type) => {
    const type_sheetJSON: any = {
        user_info: formatUserInfoXLXS,
        attendance: formatAttendanceXLXS,
    }
    return type_sheetJSON[type](sheetJSON)
}