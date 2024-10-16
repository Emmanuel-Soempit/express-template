import Jwt from 'jsonwebtoken';
import env  from '../../env';

export default class JwtService {

   public generateToken({email,id,duration}:{email:string,id:number,duration:string}){
        const token = Jwt.sign({email:email,id:id},env.JWT_TOKEN,duration ? {expiresIn:duration}:{})
        return token
    }
    public decodeToken(token:string):{email:string,id:string}{
        const data = Jwt.verify(token, env.JWT_TOKEN)
        return data as {email:string,id:string}
    }
}