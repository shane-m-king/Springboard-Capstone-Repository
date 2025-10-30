// Statuses for users to set for specific games on their profiles
// Part of GameUser Model

export const STATUSES = ["Owned", "Wishlisted", "Unowned", "Blacklisted"] as const;
export type Status = typeof STATUSES[number];