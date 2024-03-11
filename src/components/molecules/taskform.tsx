import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CustomTextField from "../atoms/textfield";
import { addTask } from "../../store/TaskStore/taskslice";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  creationDate: Date;
  dueDate: Date;
  priority: "Low" | "Medium" | "High" | "Urgent";
}

interface TaskFormProps {

}

const TaskForm: React.FC<TaskFormProps> = () => {
  const dispatch = useDispatch();
  const [idCounter, setIdCounter] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState<
    "Low" | "Medium" | "High" | "Urgent"
  >("Low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      !dueDate ||
      !priority
    ) {
      return;
    }

    const newTask: Task = {
      id: idCounter,
      title: title,
      description: description,
      completed: false,
      creationDate: new Date(),
      dueDate: dueDate,
      priority: priority,
    };

    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setDueDate(new Date());
    setPriority("Low");
    setIdCounter(idCounter + 1);
  };

  const isFormValid =
    title.trim() !== "" && description.trim() !== "" && dueDate && priority;

  const handlePriorityChange = (
    selectedPriority: "Low" | "Medium" | "High" | "Urgent"
  ) => {
    setPriority(selectedPriority);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CustomTextField
          label="Task title"
          value={title}
          onChange={(value) => setTitle(value)}
          required
        />
        <CustomTextField
          label="Task description"
          value={description}
          onChange={(value) => setDescription(value)}
          required
        />
        <CustomTextField
          type="date"
          label="Due date"
          value={dueDate.toISOString().split("T")[0]}
          onChange={(value) => setDueDate(new Date(value))}
          required
        />
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            padding: "10px 0",
          }}
        >
          <button
            onClick={() => handlePriorityChange("Low")}
            style={{
              backgroundColor: priority === "Low" ? "green" : "grey",
              padding: "5px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            Low
          </button>
          <button
            onClick={() => handlePriorityChange("Medium")}
            style={{
              backgroundColor: priority === "Medium" ? "yellow" : "grey",
              padding: "5px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            Medium
          </button>
          <button
            onClick={() => handlePriorityChange("High")}
            style={{
              backgroundColor: priority === "High" ? "orange" : "grey",
              padding: "5px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            High
          </button>
          <button
            onClick={() => handlePriorityChange("Urgent")}
            style={{
              backgroundColor: priority === "Urgent" ? "red" : "grey",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Urgent
          </button>
        </div>
      
      </form>
    </div>
  );
};

export default TaskForm;


