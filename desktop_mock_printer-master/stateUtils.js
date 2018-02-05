"use strict";

const { PRINT_TIME, statuses } = require("./constants");
const { idleMsg, doneMsg, printingMsg, pauseMsg } = require("./msgBuilders");

const update = (state, status) => {
    const s = status || state.status;

    switch(s) {
    case statuses.CANCELED:
    case statuses.COMPLETE:
    case statuses.IDLE:
        return Object.assign({},
            state,
            {
                status,
                progress: 0,
                elapsed_time: 0,
                time_remaining: PRINT_TIME
            }
        );
    case statuses.DONE:
        return Object.assign({},
            state,
            {
                status,
                progress: 0
            }
        );
    case statuses.PAUSED:
        return Object.assign({},
            state,
            { status }
        );
    case statuses.BUSY:
        return (
            state.progress < 97 ?
                Object.assign({},
                    state,
                    {
                        status,
                        progress: state.progress + 3,
                        elapsed_time: state.elapsed_time + 1000,
                        time_remaining: state.time_remaining - 1000
                    })

                : Object.assign({},
                    state,
                    {
                        status: statuses.DONE,
                        progress: 100,
                        elapsed_time: 30 * 1000,
                        time_remaining: 0
                    }));
    case statuses.PRINT_AGAIN:
        return Object.assign({},
            state,
            {
                status: statuses.BUSY,
                progress: 0,
                elapsed_time: 0,
                time_remaining: PRINT_TIME
            }
        );
    default:
        return state;
    }
};

const marshalState = state => {
    if(state.status === statuses.DONE) {
        return doneMsg;
    }

    if(state.status === statuses.BUSY) {
        return printingMsg(
            state.progress,
            state.elapsed_time,
            state.time_remaining
        );
    }

    if(state.status === statuses.PAUSED) {
        return pauseMsg(
            state.progress,
            state.elapsed_time,
            state.time_remaining
        );
    }

    return idleMsg;
};

module.exports = {
    statuses,
    update,
    marshalState
};
