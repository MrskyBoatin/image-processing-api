import {
  DisplayProcessor,
  SpecReporter,
  StacktraceOption,
} from "jasmine-spec-reporter";

// Options for the SpecReporter
const specReporterOptions = {
  spec: {
    // Do not display the stack trace for failed tests
    displayStacktrace: StacktraceOption.NONE,
  },
  // Use a custom processor to modify the output of the reporter
  customProcessors: [
    class CustomProcessor extends DisplayProcessor {
      public displayJasmineStarted(
        info: jasmine.JasmineStartedInfo,
        log: string
      ): string {
        // Return the log without modification
        return log;
      }
    },
  ],
};

// Create a new instance of the SpecReporter using the options above
const specReporter = new SpecReporter(specReporterOptions);

// Clear any existing reporters and add the specReporter to the list of reporters
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(specReporter);
