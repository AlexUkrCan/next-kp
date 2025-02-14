import {IUsers} from "@/models/users-model/IUsers";

export interface IUsersObjects {
    users:IUsers[];
    total: number;
    skip: number;
    limit: number;
}