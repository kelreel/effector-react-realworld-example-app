export type Form = Readonly<{
  username: string;
  email: string;
  password: string;
}>;

export type Errors = Readonly<{
  errors: Readonly<Record<string, string>>;
}>;
