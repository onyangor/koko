const Payment = require('../Models/Payment.json');  // importing the City JSON data

// getCityList function to get all the cities
exports.getCityList = (req, res) => {
    res.status(200).json({ message: "payment Fetched Sucessfully", payment: Payment })
}