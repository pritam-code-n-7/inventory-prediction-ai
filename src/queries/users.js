import { User } from "@/model/userModel";

export async function createUser(user) {
  try {
    await User.create(user);
  } catch (error) {
    throw new Error(error);
  }
}
