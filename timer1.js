const { argv } = require("process");
timers = argv.splice(2);

for (i = 0; i < timers.length; i++) {
  timers[i] = parseInt(timers[i]);
  if (timers[i] > 0 && timers[i]!= NaN) {
    setTimeout(() => process.stdout.write("\x07"), 1000 * timers[i]);
  }
}

