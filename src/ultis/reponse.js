const successCode = (res, data, message) => {
    res.status(200).json({
        message,
        content: data
    })
}

const failCode = (res, data, message) => {
    res.status(400).json({
        message,
        content: data
    })
}

const errorCode = (res, error) => {
    res.status(500).send(error)
}

module.exports = {
    successCode,
    failCode,
    errorCode
}