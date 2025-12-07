

const args = process.argv.slice(2);
const dataDir = args[0];
const flags = args.slice(1);

if (!dataDir) {
  console.error("Error: Please provide a data directory path.");
  process.exit(1);
}



for (let i = 0; i < flags.length; i++) {
  switch (flags[i]) {
    // Yearly report 
    case "-e": {
      i++;
      break;
    }

    // Monthly Average Report
    case "-a": {
      i++;
      break;
    }

    // Monthly Chart Report
    case "-c": {
     
      i++;
      break;
    }

    default:
      // Ignore unknown flags
      break;
  }
}
