import { File } from "../model/dataModel";


export async function POST(file) {
  try {
    await File.insertMany(file);
  } catch (error) {
    throw new Error(error);
  }
}
