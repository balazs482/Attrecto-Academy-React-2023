export interface UserBadgeModel {
    name: string;
    id: number;
    createdAt: Date;
    image: string;
    badges: UserBadgeModel[];
}
