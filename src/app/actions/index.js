"use server";

import { signIn, signOut } from "../../auth";

export async function doLogout() {
  const logout = await signOut({ redirectTo: "/" });
  console.log(logout);
  
}

export async function doCredentialLogin(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
