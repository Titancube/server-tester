import { CommandLineOptions, OptionDefinition } from 'command-line-args';

const commandLineArgsOptions: OptionDefinition[] = [
  {
    name: 'port',
    alias: 'p',
    type: Number,
  },
];

export default commandLineArgsOptions;
