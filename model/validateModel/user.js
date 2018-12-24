import Schema from "validate";

export default new Schema( {
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
