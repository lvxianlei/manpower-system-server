
export default (message: any, code?: number) => {
    const errorType = Object.prototype.toString.call(message)
    if (errorType === "[object Error]") {
        return ({
            code: code || 3,
            msg: message.toString()
        })
    } else {
        return ({
            code: code || 3,
            msg: message
        })
    }
}