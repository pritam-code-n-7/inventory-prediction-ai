"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonDemo from "../buttons/ButtonDemo";
import { FaUpload } from "react-icons/fa6";
import UploadButton from "../buttons/UploadButton";
import { FormEvent, useState } from "react";
import * as XLSX from "xlsx";
import { salesDataCreateBulk } from "@/app/actions/salesDataUploadAction";
import { SalesDataType } from "@/types/SalesDataType";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function InputFileDemo() {
  const [file, setFile] = useState<File | null>(null);
  const [tableData, setTableData] = useState<SalesDataType[]>([]);

  console.log(file);
  console.log("table data is" + JSON.stringify(tableData));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file) {
      try {
        const data = await file.arrayBuffer(); // Read file as array buffer
        const workbook = XLSX.read(data, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const workSheet = workbook.Sheets[sheetName];

        const json: SalesDataType[] = XLSX.utils.sheet_to_json(workSheet);
        console.log(json);

        setTableData(json);

        // Ensure that we are passing plain objects
        const plainObjects = json.map(({ Name, Age, City, Occupation }) => ({
          Name,
          Age,
          City,
          Occupation,
        }));

        console.log("plain objects" + JSON.stringify(plainObjects));

        //save to mongodb
        try {
          await salesDataCreateBulk(plainObjects);
        } catch (error) {
          console.error(error);
        }

        console.log("Parsed JSON data:", json);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  return (
    <div>
      <form
        className="grid grid-cols-1 w-full max-w-sm items-center gap-5 p-20"
        onSubmit={handleSubmit}
      >
        <Label htmlFor="csv/xls/xlsx">CSV/XLS/XLSX</Label>
        <Input
          id="csv/xls/xlsx"
          type="file"
          name="data"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          accept=".xls, .xlsx, .csv"
          required
        />
        <UploadButton btnname={<FaUpload size={16} />} type="submit" />
        <div className="flex items-center justify-center gap-5">
          <ButtonDemo
            name={"Download as PDF"}
            type="button"
            className="border border-black bg-white text-black"
          />
          <ButtonDemo name={"AI prediction Preview"} type="button" />
          <ButtonDemo
            name={"Table Preview"}
            type="submit"
            className="border border-black bg-white text-black"
          />
        </div>
      </form>
      {/* display as a table */}

     
        <Table >
          <TableCaption>A list of your inventory</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>City</TableHead>
              <TableHead className="text-right">Occupation</TableHead>
            </TableRow>
          </TableHeader>
          {tableData.map((item, index) => (
          <TableBody key={index}>
            <TableRow>
              <TableCell className="font-medium">{item.Name}</TableCell>
              <TableCell>{item.Age}</TableCell>
              <TableCell>{item.City}</TableCell>
              <TableCell className="text-right">{item.Occupation}</TableCell>
            </TableRow>
          </TableBody>
             ))}
        </Table>
   
    </div>
  );
}
