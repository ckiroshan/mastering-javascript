console.log("<=== Ex Stopwatch object ===>");

/**
 * Design a stopwatch object.
 * properties: duration = 0
 * methods: reset, stop, start
 * Once you call start(), you can't call it again
 *  It throws an error Stopwatch has already started.
 * Once you call stop(), you can't call it again
 *  It throws an error Stopwatch is not started.
 * reset() -> Takes stopwatch to initial state
 */

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("Stopwatch has already started.");
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch is not started");
    }
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();

