
export default {
    roleCode: {
        type: String,
        required: true,
    },
    roleName: {
        type: String,
        required: true,
    },
    maxUserCount: {
        type: Number,
    },
    location: {
        type: Number,
    },
    operateTime: {
        type: Date,
        required: true,
    },
    enable: {
        type: Boolean,
    },
};