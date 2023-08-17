import { Profile } from "./Profile";

export type Employee = {
  id: number;
  name: string;
  role: string;
  counter?: number;
  profile: Profile;
};
