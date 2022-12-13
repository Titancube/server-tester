import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).send('Success');
  } catch (error) {
    return res.status(500).send('Error');
  }
});

app.listen(8004, () => {
  console.log('app is running');
});
