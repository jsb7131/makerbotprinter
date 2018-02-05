"use strict";

const PRINT_TIME = 33 * 1000; // 30 seconds

const statuses = Object.freeze({
    IDLE: "Idle",
    BUSY: "Busy",
    PAUSED: "Paused",
    DONE: "Done",
    CANCELED: "CANCELED",
    PRINT_AGAIN: "PRINT_AGAIN",
    COMPLETE: "Complete"
});

const actions = Object.freeze({
    PRINT: "PRINT",
    CANCEL: "CANCEL",
    PAUSE: "PAUSE",
    RESUME: "RESUME",
    DONE: "DONE",
    PRINT_AGAIN: "PRINT_AGAIN",
    COMPLETE: "COMPLETE"
});

const allowedActions = {
    [statuses.IDLE]: [ actions.PRINT ],
    [statuses.BUSY]: [
        actions.PAUSE,
        actions.CANCEL
    ],
    [statuses.PAUSED]: [
        actions.RESUME,
        actions.CANCEL
    ],
    [statuses.DONE]: [
        actions.PRINT_AGAIN,
        actions.COMPLETE
    ],
    [statuses.CANCELED]: [
        actions.PRINT,
        actions.DONE
    ],
    [statuses.COMPLETE]: [
        actions.PRINT
    ]
};


module.exports = { PRINT_TIME, statuses, actions, allowedActions };
