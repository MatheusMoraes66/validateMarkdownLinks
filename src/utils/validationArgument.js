export function validationArgument(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];

    if ((arg === "--folder" || arg === "-f") && argv[i + 1]) {
      args.folder = argv[++i];
    }

    // Check for --validation or -v without needing a following value
    else if (arg === "--validation" || arg === "-v") {
      args.validation = true;
    }
  }

  return args;
}
