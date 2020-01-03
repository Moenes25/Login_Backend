import jwt from 'jsonwebtoken';

const SECRET_APP = "DARK-NIGHT-TO-CODE";
const SESSION_TIME = 3600;
 
// export function generateToken(userId) {
//   return jwt.sign({
//     userid: userId,
//   }, SECRET_APP, { expiresIn: SESSION_TIME });
// }
export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_APP);
    return decoded;
  } catch (error) {
    return null;
  }
}