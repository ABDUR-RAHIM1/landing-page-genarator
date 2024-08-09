const errorHelpers = (res, error) => {
    res.status(500).json({
        message: "Server Error",
        error: error.message
    })
}

module.exports = errorHelpers;