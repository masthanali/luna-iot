import { Button } from "@/components/ui/button";
import { RefreshCcw,FileUp } from "lucide-react";
import type { StatusType } from "@/types/device";

interface StatusCardProps {
  status?: StatusType
}

const FileUploadCard = (props:StatusCardProps) => {
    return <div className="bg-white rounded-2xl p-5 border flex flex-col items-start gap-2 max-w-5xl w-full">
        <div className="text-2xl font-semibold px-1 mb-3 flex flex-row justify-between w-full items-center">
          <div>⚡ Files Uploaded</div>
          <div>
            <Button size={"icon-sm"}>
              <RefreshCcw />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="text-lg px-2 my-1 font-medium border w-full">
            Device - {props.status?.name || "No status"}
          </div>
          <div className="px-2 mt-5 w-full">
            <Button className="w-full"><FileUp/>Upload File</Button>
          </div>
        </div>
      </div>
}

export default FileUploadCard;