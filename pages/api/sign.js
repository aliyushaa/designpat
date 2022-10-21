import connect from "../../lib/mongodb";
import User from '../../model/schema'

connect()
//proxy patter is provides a substitute or placeholder
//for another object. The idea is to control access to
//the original object, performing some kind of action
//before or after the request gets to the actual original object.


export default async function handler(req,res){
    try {
        const user = await User.create(req.body);
        res.redirect('/')
        if(!user){
            return res.json({"code":'User not created'})
        }
    } catch (error) {
        res.status(400).json({status:'User is not created!'})
    }
}