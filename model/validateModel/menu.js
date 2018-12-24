import Schema from "validate";

export default new Schema( {
    menuCode: {
        type: String,
        required: true,
        length: { min: 3, max: 32 },
    },
    menuName: {
        type: String,
        required: true,
        length: { min: 3, max: 32 },
    },
    menuType: {
        type: String,
        required: true,
        length: { max: 32 },
    },
    icon: {
        type: String,
        length: { max: 32 },
    },
} );
