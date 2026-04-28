import * as bcrypt from 'bcrypt';

export async function HashPassword(password:string) {
    return bcrypt.hash(password, 10)
}