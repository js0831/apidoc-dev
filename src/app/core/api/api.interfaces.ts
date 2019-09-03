export interface Project {
    id: string;
    name: string;
}

export interface Module {
    id: string;
    name: string;
}

export interface Endpoint {
    id: string;
    name: string;
    description: string;
    url: string;
    method: string;
    json?: {
        request?: string;
        response?: string
    };
}
