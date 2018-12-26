import Schema from "validate";

export default new Schema( {
    userId: {
        type: String,
        required: true,
        length: { min: 3, max: 32 },
    },
    role: {
        type: Array,
        required: true,
        each: {
            roleCode: String,
        },
    },
} );
