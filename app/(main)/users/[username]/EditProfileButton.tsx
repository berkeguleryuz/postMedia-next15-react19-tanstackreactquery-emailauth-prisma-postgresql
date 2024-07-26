"use client";
import { Button } from "@/components/ui/button";
import { UserData } from "@/lib/types";
import React, { useState } from "react";
import EditProfileDialog from "./EditProfileDialog";

interface EditProfileButtonProps {
  user: UserData;
}
const EditProfileButton = ({ user }: EditProfileButtonProps) => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="">
      <Button variant={"default"} onClick={() => setShowDialog(true)}>
        Edit Profile
      </Button>
      <EditProfileDialog
        user={user}
        open={showDialog}
        onOpenChange={setShowDialog}
      />
    </div>
  );
};

export default EditProfileButton;
