import { List } from '../CommenJSON'
export { fromAuthToBtn } from '../CommenJSON/Auth'
export const attendance_status: any = {
    '√': 1,
    '※': 2,
    '△': 3,
    '○': 4,
    '⊙': 5,
    '＋': 6,
    '□': 7
}

export const excelDateToJSDate = (date: number) => new Date(Math.round((date - 25569) * 86400 * 1000))

export const formatUserInfoXLXS = (sheetJson: Array<any>): Array<any> => sheetJson.map((json: any) => {
    const formatItem: any = {}
    Object.keys(json).forEach((jsonKey: string) => {
        const headData: any = List.user_info.filter((headItem: any) => headItem.label === jsonKey)[0]

        if (headData) {
            if (headData.type === 'time') {
                formatItem[headData.name] = excelDateToJSDate(json[jsonKey])
            } else {
                formatItem[headData.name] = json[jsonKey]
                formatItem.status = 1
            }
        }
    })
    return formatItem
})

export const formatAttendanceXLXS = (sheetJson: Array<any>): Array<any> => {
    const sheetData: Array<any> = []
    const dateMounth = sheetJson[0].__EMPTY + '-' + sheetJson[0].__EMPTY_1
    const head: any = sheetJson[1]
    sheetJson.splice(0, 2)
    sheetJson.filter(item => item.__EMPTY).forEach((json: any, index: number) => {
        const user_info_object: any = {
            division: json.__EMPTY,
            department: json.__EMPTY_1,
            position: json.__EMPTY_2,
            username: json.__EMPTY_3,
        }
        Object.keys(json).forEach((jsonKey: string, index: number) => {
            if (index >= 5 && index <= 35) {
                sheetData.push({
                    ...user_info_object,
                    date: new Date(dateMounth + '-' + head[jsonKey]),
                    status: attendance_status[json[jsonKey]]
                })
            }
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