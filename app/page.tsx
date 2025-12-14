import StatusCard from "@/components/StatusCard";
import FileUploadCard from "@/components/FileUpload";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-3 p-2 flex-col md:flex-row justify-center items-center h-screen">
      <StatusCard/>
      <StatusCard/>
      <StatusCard/>
      <FileUploadCard/>    
    </div>
  );
};

export default Dashboard;
