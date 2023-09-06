"use client";
import { useEffect, useState } from "react";
import SplitPane, { Pane, SashContent } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

interface ITask {
  id: number;
  title: string;
  description: string;
}

export default function Home() {
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);
  const [sizes, setSizes] = useState([30, 70]);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleTaskClick = (task: ITask) => {
    setSelectedTask(task);
  };

  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div className="h-screen">
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
        sashRender={() => (
          <SashContent
            style={{
              backgroundColor: "#859fac",
              padding: "6px",
              borderRadius: "15px",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              height: "95%",
            }}
          />
        )}
        resizerSize={7}
      >
        <Pane>
          <div className="h-full flex flex-col">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-3 border-b cursor-pointer"
                onClick={() => handleTaskClick(task)}
              >
                {task.title}
              </div>
            ))}
          </div>
        </Pane>
        <div className="h-full p-4">
          {selectedTask ? (
            <div className="bg-gray-200 p-6 rounded-lg h-full text-black">
              <h2 className="text-lg font-bold">{selectedTask.title}</h2>
              <p>{selectedTask.description}</p>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center bg-gray-300 text-black">
              Select a task to see details
            </div>
          )}
        </div>
      </SplitPane>
    </div>
  );
}