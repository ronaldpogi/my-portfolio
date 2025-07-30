export interface Token {
    status:  string;
    message: string;
    data:    Data;
}

export interface Data {
    token: string;
}
