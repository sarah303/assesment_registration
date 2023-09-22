export interface AddressList {
    city?: string;
    state?: string;
    pinCode?: string;
    collapse: boolean;
}

export interface User {
    userName?: string;
    email?: string;
    address?: AddressList[]
}

export enum LimitSet { addLimit = 5, deleteLimit = 1 };
