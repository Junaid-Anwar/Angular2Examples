import { IAddress } from '../models/address';

export interface IUser {
    name: string,
    email: string,
    address: IAddress
}