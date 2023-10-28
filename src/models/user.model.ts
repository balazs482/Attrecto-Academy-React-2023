import { UserBadgeModel } from "./badge.model";

export interface UserModel {
  name: string;
  id: number;
  createdAt: Date;
  image: string;
  badges: UserBadgeModel[];
}
