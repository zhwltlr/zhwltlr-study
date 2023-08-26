"use client";
import { useState } from "react";
import SplitPane, { Pane, SashContent } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

interface ITask {
  id: number;
  title: string;
  description: string;
}

const sampleTodoList: ITask[] = [
  {
    id: 1,
    title: "Task 1",
    description:
      "Description for Task 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    title: "Task 2",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 3,
    title: "Task 3",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
  },
  {
    id: 4,
    title: "Task 4",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
];

export default function Home() {
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);
  const [sizes, setSizes] = useState([30, 70]);

  const handleTaskClick = (task: ITask) => {
    setSelectedTask(task);
  };

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
            {sampleTodoList.map((task) => (
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
