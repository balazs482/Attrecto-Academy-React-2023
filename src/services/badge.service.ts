import { UserBadgeModel } from "../models/badge.model";
import request, { Methods } from "../util/request";

class BadgesService {
  async getBadges() {
    return request<UserBadgeModel[]>({ method: Methods.GET, resource: "badges" });
  }
}

export const badgesService = new BadgesService();
