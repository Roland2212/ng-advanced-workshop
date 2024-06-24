export interface Description {
  description: string;
}

export interface Country extends Description {
  id: string;
  description: string;
}

export interface State extends Description {
  id: number;
  code: string;
  countryCode: string;
}

export type ButtonState = "start" | "loading" | "finished";
