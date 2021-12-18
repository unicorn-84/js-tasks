import { TSizeName } from '.';

export type TDevice = {
  [key in TSizeName]: string;
};
