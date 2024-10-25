import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonDemo from "../buttons/ButtonDemo";
import { FaUpload } from "react-icons/fa6";
// import { FaDownload } from "react-icons/fa6";

export function InputFileDemo() {
  return (
    <div className="grid grid-cols-1 w-full max-w-sm items-center gap-5 p-20 ">
      <Label htmlFor="csv/excel">CSV/Excel</Label>
      <Input id="csv/excel" type="file" required />
      <ButtonDemo name={<FaUpload size={16} />} type="submit" />
      <div className="flex items-center justify-center gap-5">
        <ButtonDemo
          name={"Download CSV/PDF"}
          type="submit"
          className="border border-black bg-white text-black"
        />
        <ButtonDemo name={"Show AI prediction"} type="submit" />
      </div>
    </div>
  );
}
