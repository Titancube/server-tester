import express, { NextFunction, Request, Response } from 'express';
import commandLineArgs from 'command-line-args';
import commandLineArgsOptions from './config';

const app = express();
const options = commandLineArgs(commandLineArgsOptions);

if ([null, undefined, ''].includes(options.port)) {
  throw new Error(
    `Port has not been set. you could pass the port either with 'yarn start --port=PORT' or 'npm run start -- --port=PORT'`
  );
}

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).send('Under construction. See you later');
  } catch (error) {
    return res.status(500).send('Error');
  }
});

app.listen(options.port, () => {
  console.log(`# Server tester is now running on port ${options.port}`);
});
