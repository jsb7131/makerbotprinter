"use strict";

const printingProcess = (progress, elapsed_time, time_remaining) => ({
    name: "PrintProcess",
    step: "printing",
    progress,
    elapsed_time,
    time_remaining,
    process_methods: [
        "PAUSE",
        "CANCEL"
    ]
});

const pausedProcess = (progress, elapsed_time, time_remaining) => ({
    name: "PrintProcess",
    step: "paused",
    progress,
    elapsed_time,
    time_remaining,
    process_methods: [
        "RESUME",
        "CANCEL"
    ]
});

const doneProcess = {
    name: "PrintProcess",
    step: "done",
    progress: 100,
    elapsed_time: 10800,
    time_remaining: 0,
    process_methods: [
        "PRINT_AGAIN",
        "COMPLETE"
    ]
};

module.exports = {
    doneProcess,
    printingProcess,
    pausedProcess
};
