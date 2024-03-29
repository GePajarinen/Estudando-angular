import { Address } from 'cluster';
import { Company } from './company';

export class User {
    id: string = "";
    name: string = "";
    username: string = "";
    email: string = "";
    phone: string = "";
    website: string = "";
    address!: Address;
    company!: Company;
}
