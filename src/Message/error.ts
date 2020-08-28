
export default (message: any, code?: number) => ({
    code: code || 3,
    msg: message
})