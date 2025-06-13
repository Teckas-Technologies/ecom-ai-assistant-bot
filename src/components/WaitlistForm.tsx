import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WaitlistFormProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WaitlistForm = ({ isOpen, setIsOpen }: WaitlistFormProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const script = document.createElement("script");
    script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <div
          id="getWaitlistContainer"
          data-waitlist_id="29343"
          data-widget_type="WIDGET_1"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistForm;
