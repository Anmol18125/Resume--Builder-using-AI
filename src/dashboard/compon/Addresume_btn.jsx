import { PlusSquare, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const AddResumeBtn = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreate = async () => {
    if (!resumeTitle) {
      console.error("Resume title is required!");
      return;
    }

    setLoading(true); // Start spinner
    try {
      const uuid = uuidv4(); // Generate unique ID

      // Simulate async task or API call, if necessary
      await new Promise((resolve) => setTimeout(resolve, 500));

      setLoading(false); // Stop spinner once the title process is complete

      // Start navigation after spinner stops
      navigate(`/dashboard/resume/${uuid}/edit`);
      setOpenDialog(false); // Close the dialog
    } catch (error) {
      console.error("Error during creation:", error);
      setLoading(false); // Ensure spinner stops in case of error
    }
  };

  return (
    <div>
      {/* Trigger to Open Dialog */}
      <div
        className="h-[280px] p-14 py-24 border 
          items-center flex justify-center
          bg-secondary rounded-lg
          cursor-pointer
          hover:scale-105 transition-all hover:shadow-md"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Your Resume</DialogTitle>
            <DialogDescription>
              <p>Add a Title for the New Resume</p>
              <Input
                className="mt-2"
                placeholder="Enter Resume Name"
                value={resumeTitle}
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5 mt-4">
              {/* Cancel Button */}
              <Button variant="Ghost" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>

              {/* Create Button */}
              <Button
                disabled={!resumeTitle || loading}
                onClick={onCreate}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResumeBtn;
