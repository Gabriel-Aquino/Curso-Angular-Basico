export class User {
    constructor(public email: string, public name: string, private password: string) {

    }

    matches(another: User): boolean {
        return another !== undefined &&
        another.email === this.email &&
        another.password === this.password;
    }
}

export const users: {[key: string]: User} = {
    'gabriel@email.com': new User('gabriel@email.com', 'Gabriel', 'gabriel-123'),
    'aquino@email.com': new User('aquino@email.com', 'aquino', 'aquino-123'),
}
