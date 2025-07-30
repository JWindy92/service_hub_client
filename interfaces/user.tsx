export interface User {
  id: number;
  email: string;
  Profile: UserProfile;
}

export interface UserProfile {
  ID: number;
  CreatedAt: string;   // Use `Date` if you parse to date objects
  UpdatedAt: string;
  DeletedAt: string | null;
  IsComplete: boolean;
  first_name: string;
  last_name: string;
  phone: string;
  Address: string;
  UserID: number;
}
