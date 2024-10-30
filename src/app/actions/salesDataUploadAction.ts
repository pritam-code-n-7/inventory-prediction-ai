"use server";
import { File } from "@/model/dataModel";
import { SalesDataType } from "@/types/SalesDataType";

//upload single sales data
export async function salesDataCreate(data: SalesDataType) {
  try {
    const sale = await File.create({
      Name: data.Name,
      Age: data.Age,
      City: data.City,
      Occupation: data.Occupation,
    });
    console.log(sale);

    return sale;
  } catch (error) {
    console.error(error);
  }
}

//upload bulk sales data
export async function salesDataCreateBulk(sales: SalesDataType[]) {
  try {
    for (const sale of sales) {
      // console.log(sale);
      await salesDataCreate(sale);
    }
  } catch (error) {
    console.error(error);
  }
}
