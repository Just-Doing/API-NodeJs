import Schema from "validate";

export default new Schema( {
    menuCode: {
        type: String,
        required: true,
        length: { min: 3, max: 50 },
    },
    parentMenuCode: {
        type: String,
        required: true,
        length: { min: 3, max: 50 },
    },
    menuName: {
        type: String,
        required: true,
        length: { min: 3, max: 50 },
    },
    menuType: {
        type: String,
        required: true,
        length: { max: 30 },
    },
    icon: {
        type: String,
        length: { max: 30 },
    },
    isShow: {
        type: Boolean,
        required: true,
    },
    operateTime: {
        type: Date,
        required: true,
    },
    enable: {
        type: Boolean,
        required: true,
    },
} );
