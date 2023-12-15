import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ApplyDropDown from "./ApplyDropDown";
import { Textarea } from "../ui/textarea";

const ApplyModal = ({ open, onCLose }) => {
  return (
    <Dialog>
      <DialogTrigger className="w-[200px] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 p-4 bg-indigo600 text-white  hover:bg-indigo50 hover:text-indigo600">
        Apply now
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">Apply for This Offer</DialogTitle>
          <DialogDescription>
            <ApplyDropDown />
            <Textarea></Textarea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyModal;
