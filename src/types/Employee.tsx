export type Employee = {
  id: number;
  name: string;
  role: string;
  counter?: number;
  profile: {
    experience: string;
    department: string;
    techstack: string[];
    profilePicture: string;
  };
};
