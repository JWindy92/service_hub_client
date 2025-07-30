
// TODO: Currently LoginResponse and Session are redundant. Once Auth flow is solidified, consider consolidating if nothing has changed where this makes sense
export interface LoginResponse {
    token: string
    user: {
        id: number;
    };
}

export interface Session {
    token: string
    user: {
        id: number;
    };
}