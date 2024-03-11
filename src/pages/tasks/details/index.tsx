import React, { useState } from "react";
import TaskCard from "../../../components/molecules/taskcard";
import Navbar from "@/components/organisms/navbar";
import VideoDetails from "@/components/organisms/videoDetails";
import { Task } from "@/components/molecules/taskform";

const DetailsPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <VideoDetails />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;

