module.exports = {
    errorHandler: (e, res) => {
        console.log({e});       
        return res.status(500).json({ error: "Something went wrong."});
    }
}