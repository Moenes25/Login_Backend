import { Admin } from "../../../model/schemaDB";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_APP = "DARK-NIGHT-TO-CODE";

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_APP);
    return decoded;
  } catch (error) {
    return null;
  }
}
// import verifyToken from '../../../utils/authorization'
export const Mutation = {
  Mutation: {
    login: async (parent, { password , username},ctx) => {
      if(username === 'undefined' && typeof username !== String){
        throw new Error('Wrong UserName or Password')
      }
        const user = await Admin.findOne({ username })
        if (!user) {
          throw new Error('Wrong UserName or Password');
        };
         const passwordMatch = await bcrypt.compare(  password, user.password);
         if (!passwordMatch) {
            throw new Error('Wrong UserName or Password');
          } 
          const FindCompany = await Admin.find({ _company:user._company }).select('-password')
          const token = jwt.sign({ 
            _id: user._id ,
            username: user.username,
            admin: user.admin,
            _company: user._company,
             FindCompany
          }, 
            "DARK-NIGHT-TO-CODE");
            
            // testing the token 
            // const ds = await verifyToken(token)
            // console.log('this is user =>',ds)
          const options = {
            maxAge: 1000 * 60 * 60 * 24, //expires in a day
              httpOnly: true, // cookie is only accessible by the server,
            //  domain: 'barac.io'
            // secure: process.env.NODE_ENV === 'prod', // only transferred over https
            // sameSite: true, // only sent for requests to the same FQDN as the domain in the cookie
          }
         ctx.res.cookie('USER', token, options)
         // ctx.res.clearCookie("USER")
        // console.log(ctx.req.headers.cookie)
        //  console.log(ctx.res)
        // const tosken = ctx.req.headers.cookie.substring(5);
        // var match = ctx.req.headers.cookie.match(new RegExp('(^| )' + 'USER' + '=([^;]+)'));
        // var d = match[0].split('=')[1] || '';
        // const verifCookies = await verifyToken(d) 
        // console.log(verifCookies)
        // console.log(token)
          return user;
      }
  }
};
