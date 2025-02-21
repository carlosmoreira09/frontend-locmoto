const accessLevels = {
    supplier: 0,
    admin: 1
};

export type AccessLevel = keyof typeof accessLevels;

export function hasAccess(userLevel: AccessLevel, requiredLevel: AccessLevel): boolean {
    return accessLevels[userLevel] >= accessLevels[requiredLevel];
}
