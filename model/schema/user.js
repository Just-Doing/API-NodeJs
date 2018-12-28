
export default {
    userCode: {
        type: String,
        required: true,
        length: { min: 3, max: 32 },
    },
    userName: {
        type: String,
        required: true,
        length: { min: 3, max: 32 },
    },
    accountName: {
        type: String,
        required: true,
        length: 8,
    },
    pwd: {
        type: String,
        required: true,
        length: { min: 8, max: 16 },
    },
    gander: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    address: {
        type: String,
    },
    QQ: {
        type: String,
        length: 9,
    },
    email: {
        type: String,
        validate: {
            validator: /^\w+@\w+\.com$/,
        },
    },
    phone: {
        type: String,
        validate: {
            validator: /^0\d{2,3}\d{7,8}/,
        },
    },
    operateTime: {
        type: Date,
        required: true,
    },
    enable: {
        type: Boolean,
    },
};
