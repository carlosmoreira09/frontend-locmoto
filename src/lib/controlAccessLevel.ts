const accessLevels = {
    atendente: 0,
    admin: 1,
    master: 2,
};

export type AccessLevel = keyof typeof accessLevels;

export function hasAccess(userLevel: AccessLevel, requiredLevel: AccessLevel): boolean {
    return accessLevels[userLevel] >= accessLevels[requiredLevel];
}
