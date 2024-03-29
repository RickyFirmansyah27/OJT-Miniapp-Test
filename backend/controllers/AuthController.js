import User from "../models/UserModel.js";
import argon2 from "argon2";


export const Register = async (req, res) => {
    const { name, email, gender, password } = req.body;
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            name: name,
            email: email,
            gender: gender,
            password: hashPassword,

        });
        res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}


export const Login = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    const match = await argon2.verify(user.password, req.body.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const name = user.name;
    const gender = user.gender;
    const email = user.email;
    res.status(200).json({ uuid, name, email, gender });
}

// export const Me = async (req, res) => {
//     const user = await User.findOne({
//         attributes: ['uuid', 'name', 'email', 'gender'],
//         where: {
//           uuid: req.session.userId
//         }
//       });
      
//       if (!user) {
//         return res.status(404).json({ msg: "User tidak ditemukan" });
//       }
      
//       // hash uuid menggunakan Argon2
//       const hashedUuid = await argon2.hash(user.uuid);
      
//       // kirim respons JSON dengan UUID yang di-hash
//       res.status(200).json({
//         uuid: hashedUuid,
//         name: user.name,
//         email: user.email,
//         gender: user.gender
//       });
      
// }

export const Me = async (req, res) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"});
    }
    const user = await User.findOne({
        attributes:['uuid','name','email','gender'],
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    res.status(200).json(user);
}

export const logOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
        res.status(200).json({ msg: "Anda telah logout" });
    });
}