const mongoose = require("mongoose");

const pageSchema = mongoose.Schema({

    hero: {
        logo: { type: String, required: true },
        headline: {
            main: { type: String, required: true },
            sub: { type: String, required: true },
        },
        utils: {
            gradientType: { type: String, required: true },
            gradientRoated: { type: Number, required: true },
            primaryBgColor: { type: String, required: true },
            secondaryBgColor: { type: String, required: true },
            primaryTextColor: { type: String, required: true },
        }

    },

    product: {
        image: { type: String, required: true },
        quote: { type: [Object], required: true },
    },

    information: {
        productName: { type: String, },
        productType: { type: String, },
        regularPrice: { type: Number, },
        offerPrice: { type: Number, },
        shippingIn: { type: Number, },
        shippingOut: { type: Number, },
        deliverySystem: { type: String, },
        deliverySystemText: { type: String, },
        contact: {
            mobile: { type: String, required: true },
            email: { type: String, required: true },
        },
    },

    acordion: {
        heading: { type: String, required: true },
        text: { type: String, required: true },
        acordions: { type: [Object], required: true },
    },
    subProduct: {
        about: { type: [], required: true },
        image: { type: [String], required: true },
    },

    review: {
        heading: { type: String, required: true },
        text: { type: String, required: true },
        images: { type: [], required: true },
    }
});


module.exports = pageSchema