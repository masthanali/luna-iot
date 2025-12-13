import StatusCard from "@/components/StatusCard";
import FileUploadCard from "@/components/FileUpload";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-3 p-2 flex-col md:flex-row justify-center items-center h-screen">
      <StatusCard/>
      <StatusCard/>
      <StatusCard/>
<div className="flex flex-wrap flex-col gap-3 w-full">
  <FileUploadCard />
  <FileUploadCard />
</div>      
    </div>
  );
};

export default Dashboard;
