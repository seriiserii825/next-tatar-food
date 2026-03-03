export interface ILoginResponse {
  redirect: boolean;
  token: string;
  user: IUser;
}
interface IUser {
  name: string;
  email: string;
  emailVerified: boolean;
  image: null;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}
