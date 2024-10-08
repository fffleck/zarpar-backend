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

const getAll = () =>  User.find();
  

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

const updateCountLogin = async (email: string) => {
  const user = await User.findOne({ email: email });

  if (!user) {
    throw new Error("Erro ao atualizar, usuário não encontrado.");
  }

  const now = new Date();
  const lastLogin = user.lastLogin || now; // Se não houver `lastLogin`, considere o login atual
  const sameMonthAndYear = now.getMonth() === lastLogin.getMonth() && now.getFullYear() === lastLogin.getFullYear();

  if (!sameMonthAndYear) {
    // Se o mês mudou, reinicie o contador
    user.countLogin = 1;
  } else {
    // Se o mês não mudou, incremente o contador
    user.countLogin = (user.countLogin || 0) + 1;
  }

  // Atualize a data de último login para a data atual
  user.lastLogin = now;

  // Salva as alterações no banco
  await user.save();
};



export default {
  create,
  getAll,
  getByEmail,
  getOneByEmail,
  getUserToken,
  updateUserToken,
  updatePassword,
  updateSearch,
  updateCountLogin,
};
