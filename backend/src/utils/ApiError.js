class ApiError {
    constructor(statusCode, data, message = "Error"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = false
    }
}

export { ApiError }