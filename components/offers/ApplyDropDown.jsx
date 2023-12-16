import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ApplyDropDown = () => {
  return (
    <Select className={"bg-red-500"}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Position(s)" />
      </SelectTrigger>
      <SelectContent className={"bg-white border-none outline-none"}>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ApplyDropDown;
