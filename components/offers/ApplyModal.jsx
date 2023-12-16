import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ApplyDropDown from "./ApplyDropDown";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ApplyModal = ({ open, onCLose }) => {
  return (
    <Dialog>
      <DialogTrigger className=" w-full ">
        <Button className={"w-full min-w-full  "}>Apply Now</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">Apply for This Offer</DialogTitle>
          <DialogDescription>
            <ApplyDropDown className={"outline-none bg-red-500 "} />
            <Textarea></Textarea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyModal;
