'use server'
import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import { dbConnect } from "@/lib/mongo";
import bcrypt from "bcryptjs"

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  //Create a db connection
  await dbConnect();

  //Encrypt the password
const hashedPassword = await bcrypt.hash(password, 5)

  //Form a DB payload
  const newUser = {
    name,
    password: hashedPassword,
    email,
  };

  try {
    await createUser(newUser);
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }

  //update the password

  return new NextResponse("User has been created", {
    status: 201,
  });
};
