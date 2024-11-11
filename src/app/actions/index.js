"use server";

import { signIn, signOut } from "../../auth";

export async function doLogout() {
  const logout = await signOut({ redirectTo: "/" });
  console.log(logout);
}

export async function doSocialLogin(formData) {
  try {
    const action = formData.get("action");
     await signIn(action, {
      redirectTo: "/dashboard",
      //redirect:false,
    });

    

    console.log(action);
  } catch (error) {
    // throw new Error(error);
    console.error(error)
  }
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
