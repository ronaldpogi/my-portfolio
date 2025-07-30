export interface User {
    status:  string;
    message: string;
    data:    Data;
    
}

export interface Data {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: null;
    created_at:        Date;
    updated_at:        Date;
}
