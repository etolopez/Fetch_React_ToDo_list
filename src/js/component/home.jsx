import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
  const [task, setTask] = useState([]);
  const [isShown, setIsShown] = useState(false);

  const handleDeleteTask = function (index) {
    setTask(
      task.filter((e, currentIndex) => {
        return currentIndex !== index;
      })
    );
  };

  const style = {
    position: "relative",
    width: "90rem",
    height: "20px",
    zIndex: "-1",
    top: "60px",
    backgroundColor: "white",
  };

  const style1 = {
    position: "relative",
    width: "75rem",
    height: "30px",
    left: "5px",
    zIndex: "-2",
    top: "40px",
    backgroundColor: "white",
  };

  return (
    <div className="text-center container m-auto">
      <div className="row justify-content-center mt-2">
        <div className="shadow p-3 mb-5 col-12 mt-3 border bg-white rounded">
          <h1 className="text-muted">Todo List</h1>
          <div className="row">
            <div className="col">
              <input
                className="text-dark"
                type="text"
                size={35}
                placeholder="What else should we add?"
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    setTask([...task, e.target.value]);
                  }
                }}
              ></input>
            </div>
            {task.map((e, index) => {
              return (
                <div
                  className="row mt-1 p-0"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  <div className="col-11 mt-3 pt-2 pb-2" key={index}>
                    <div className="col" id="textList">
                      {e}
                    </div>
                  </div>
                  {isShown ? (
                    <div className="col-1 pt-4">
                      <span onClick={() => handleDeleteTask(index)}>X</span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col float-left">
              <p> {task.map((e, lastIndex) => {
            let lastElem = lastIndex + 1;
            if (lastElem >= 1){
              return lastElem
            } else if (lastIndex = 0){
              return 0
            };
          })} Items on the list</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
