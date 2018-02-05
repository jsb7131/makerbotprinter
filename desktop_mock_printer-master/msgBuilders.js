"use strict";

const { printingProcess, doneProcess, pausedProcess } = require("./processes");

const stateBuilder = (state, current_process) => ({
    status: { state: state },
    current_process
});

const printerBase = {
    name: "My Awesome Printer",
    model: "Makerbot"
};

const idleMsg = Object.assign({},
    printerBase,
    stateBuilder("Idle")
);

const printingMsg = (progress, elapsed_time, time_remaining) =>
    Object.assign({},
        printerBase,
        stateBuilder(
            "Busy",
            printingProcess(progress, elapsed_time, time_remaining)
        )
    );

const doneMsg = Object.assign({},
    printerBase,
    stateBuilder(
        "Idle",
        doneProcess
    )
);

const pauseMsg = (progress, elapsed_time, time_remaining) =>
    Object.assign({},
        printerBase,
        stateBuilder(
            "Paused",
            pausedProcess(progress, elapsed_time, time_remaining)
        )
    );

module.exports = {
    idleMsg,
    printingMsg,
    doneMsg,
    pauseMsg
};
