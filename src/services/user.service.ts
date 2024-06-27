import User, { IUser } from "../models/User";
import UserToken, { IUserToken } from "../models/UserToken";
interface usertoken {
  email: string;
  token: string;
}

// USER
const create = (body: IUser) => User.create(body);
const getByEmail = (emailRequerido: any) =>
  User.find({ email: emailRequerido });

const getOneByEmail = (emailRequerido: any) =>
  User.findOne({ email: emailRequerido });

const updatePassword = async (
  emailRequerido: any,
  password: any
) => {
  const user = await User.findOne({ email: emailRequerido });
  if (!user) {
    throw "Erro ao atualizar, usuario não encontrado.";
  }
  user.password = password;
  await user.save();
};
// USER TOKEN
const getUserToken = (token: string | any) =>
  UserToken.findOne({ token: token });

const updateUserToken = async (usertoken: IUserToken) => {
  const user = await UserToken.findOne({ email: usertoken.email });
  if (!user) {
    await UserToken.create(usertoken);
  } else {
    user.token = usertoken.token;
    await user.save();
  }
};

const updateSearch = async (email: string) => {
  const user = await User.findOne({ email: email });

  if (!user) {
    throw new Error("Erro ao atualizar, usuario não encontrado.");
  } else {
    user.telefone = user.telefone ?? '99999999999'
    user.search = user.search ? user.search +1 : 1;
    await user.save();
  }
};

export default {
  create,
  getByEmail,
  getOneByEmail,
  getUserToken,
  updateUserToken,
  updatePassword,
  updateSearch,
};
