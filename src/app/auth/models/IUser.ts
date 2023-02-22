import { ERol } from "./ERol"

export default interface IUser {
  id: number,
  name: string,
  email: string,
  role: ERol
}
