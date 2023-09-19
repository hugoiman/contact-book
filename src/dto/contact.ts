interface ContactDto {
    data(data: any): unknown;
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    photo: string;
}

interface CreateUpdateContactDto {
    firstName: string;
    lastName: string;
    age: number;
    photo: string;
}

export type {ContactDto, CreateUpdateContactDto};