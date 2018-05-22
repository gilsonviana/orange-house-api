const mongoose = require('mongoose');

const schema = mongoose.Schema({
    type: String,
    modality: String,
    location: {
        country: String,
        province: String,
        county: String,
        city: String,
        address: {
            street: String,
            zipcode: String
        },
        coordinates: {
            latitude: String,
            longitude: String
        }
    },
    price: {
        amount: Number,
        cycle: String
    },
    disclaimer: {
        yearBuilt: Number,
        propertyTax: {
            taxAmount: Number,
            taxDue: Boolean
        }
    },
    rooms: {
        bedrooms: {
            quantity: Number,
            description: [{
                size: String,
                suite: Boolean,
                sqft: Number
            }]
        },
        bathrooms: {
            quantity: Number,
            description: [{
                size: String,                
                sqft: Number
            }]
        },
        garage: {
            quantity: Number,
            description: [{
                size: String,                
                sqft: Number
            }]
        }
    },
    area: {
        estate: {
            sqft: Number
        },
        lot: {
            sqft: Number
        }
    },
    photos: [{
        size: String,
        url: String
    }],
    contact: [{
        name: String,
        phone: String
    }],
    aditional: {
        note: String
    }
});

const House = mongoose.model('House', schema, 'houses');

module.exports = House;