let interval = 100;
let symbol = '\r\\   ';
while (interval < 1800) {
  setTimeout(() => {
    if (symbol === '\r|   ') { symbol = '\r/   '; process.stdout.write(symbol)}
    else if (symbol === '\r/   ') { symbol = '\r-   '; process.stdout.write(symbol) }
    else if (symbol === '\r-   ') { symbol = '\r\\   '; process.stdout.write(symbol) }
    else if (symbol === '\r\\   ') { symbol = '\r|   '; process.stdout.write(symbol) };
  }, interval);
  interval += 200;
};