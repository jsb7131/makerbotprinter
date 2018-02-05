# Desktop coding challenge

The desktop software communicates with the printer through JSON notifications. The shape of the JSON data can 
change depending on what the printer is doing at that point in time. The user can also send commands to the
printer. Write a React (ES6) app to show the current status of the printer to the user, with buttons that
can implement certain actions (process methods).

You'll need to connect to the mock printer via WebSockets and consume status updates from the printer, and also send commands to the printer.
Read the mock printer's README for usage.

- The `process` methods in `current_process` indicate what actions can happen next. Show buttons for these, but only those currently available.
- In the printer's "Idle" state, you can send a "PRINT" command to begin printing.

Below, there are example notifications. 

## Example Notifications

```json
{
   "name": "My Awesome Printer",
   "model": "Makerbot",
   "status": {
       "state": "Idle",
   }
}

{
   "name": "My Awesome Printer",
   "model": "Makerbot",
   "status": {
       "state": "Busy"
   },
   "current_process": {
        "name": "PrintProcess",
        "step": "printing",
        "progress": 23,
        "elapsed_time": 3600,
        "time_remaining": 7200,
        "process_methods": [
            "CANCEL",
            "PAUSE"
        ]
    }
}

{
   "name": "My Awesome Printer",
   "model": "Makerbot",
   "status": {
       "state": "Busy"
   },
   "current_process": {
        "name": "PrintProcess",
        "step": "paused",
        "progress": 76,
        "elapsed_time": 7200,
        "time_remaining": 3600,
        "process_methods": [
            "RESUME",
            "CANCEL"
        ]
    }
}

{
   "name": "My Awesome Printer",
   "model": "Makerbot",
   "status": {
       "state": "Idle"
   },
   "current_process": {
        "name": "PrintProcess",
        "step": "done",
        "progress": 100,
        "elapsed_time": 10800,
        "time_remaining": 0,
        "process_methods": [
            "PRINT_AGAIN",
            "COMPLETE"
        ]
    }
}
```

## Setting up project

Download modules:

```
$ npm install
```

Start server:

```
$ npm start
```
