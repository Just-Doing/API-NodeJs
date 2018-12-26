import Schema from "validate";

export default new Schema( {
    roleId: {
        type: String,
        required: true,
        length: { min: 3, max: 32 },
    },
    menu: {
        type: Array,
        required: true,
        each: {
            menuCode: String,
        },
    },
} );
