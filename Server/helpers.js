const errorHelpers = (res, error) => {
    console.log(res)
    res.status(500).json({
        message: "Server Error",
        error: error.message
    })
}

module.exports = errorHelpers;