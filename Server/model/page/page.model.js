const mongoose = require('mongoose');

const landingPageSchema = mongoose.Schema({
    userId: { type: String, required: true },
    email: { type: String, required: true },
    urlName: { type: String, required: true },
    logo: { type: String, required: true },
    mainHeadline: { type: String, required: true },
    subHeadline: { type: String, required: true },
    productName: { type: String, required: true },
    productImages: {
        main: { type: String, required: true },
        sub: { type: [String], required: true },
    },
    aboutProduct: { type: String, required: true },
    accordion: {
        headline: { type: String, required: true },
        questionsAnswers: { type: [Object], required: true },
    },
    productRelatedText: { type: String, required: true },
    productType: { type: String, required: true },
    price: {
        regular: { type: Number, required: true },
        offer: { type: Number, required: true },
    },
    shipping: { type: String, required: true },
    reviews: {
        headline: { type: String, required: true },
        content: { type: [Object], required: true },
    },
});



const pageModel = mongoose.model('Page', landingPageSchema);
module.exports = pageModel;
