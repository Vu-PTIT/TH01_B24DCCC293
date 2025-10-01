import { useState } from "react";

function TodoApp() {
    const [task, setTask] = useState("");         
    const [tasks, setTasks] = useState([]);       

    
    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, task]);  
        setTask("");                  
    };


    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <p><strong>Bài 3: Danh sách công việc</strong>: Có một input để nhập công việc mới và nút Thêm. Danh sách công việc được lưu trong state (mảng). Hiển thị danh sách công việc ra màn hình. Mỗi công việc có nút Xóa.</p>
            <h2>Danh sách công việc</h2>
            <input
                type="text"
                placeholder="Nhập công việc..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Thêm</button>

            <ul>
                {tasks.map((t, index) => (
                <li key={index}>
                    {t}{" "}
                    <button onClick={() => deleteTask(index)}>Xóa</button>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
