import Schema from "validate";

export default new Schema( {
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
    gander: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    operateTime: {
        type: Date,
        required: true,
    },
} );
