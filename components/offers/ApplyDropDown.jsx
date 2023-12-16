import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ApplyDropDown = () => {
  return (
    <Select className={""}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Position(s)" />
      </SelectTrigger>
      <SelectContent className={"bg-white border-none outline-none border-indigo700"}>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ApplyDropDown;
