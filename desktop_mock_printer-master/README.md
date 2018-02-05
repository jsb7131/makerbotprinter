# Makerbot Mock Printer

For use in Desktop coding challenge. It uses web sockets to simulate a printer.

## Usage

```
$ npm start
```

Then connect via websockets to `ws://localhost:8080`.

## Sample Responses

```
{
   "name": "My Awesome Printer",
   "model": "Makerbot",
   "status": {
       "state": "Idle"
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
