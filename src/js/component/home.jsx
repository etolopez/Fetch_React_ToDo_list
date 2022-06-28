import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
  const [task, setTask] = useState([]);
  const [isShown, setIsShown] = useState(-1);


  const handleDeleteTask = function (index) {
    setTask(
      task.filter((e, currentIndex) => {
        return currentIndex !== index;
      })
    );
  };

  let style1 = {
    height: "15px",
    backgroundColor: "white",
    zIndex: -1,
}

  return (
    <div className="text-center container m-auto">
      <div className="row justify-content-center mt-2">
        <div className="shadow p-3 col-12 mt-3 border bg-white rounded">
          <h1 className="text-muted">Todo List</h1>
          <div className="row">
            <div className="col">
              <input
                className="text-dark border-none"
                type="text"
                size={30}
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
                  className="row mt-1 p-0 border-top"
                  onMouseEnter={() => setIsShown(index)}
                  onMouseLeave={() => setIsShown(-1)}
                >
                  <div className="col-11 mt-3 pt-2 pb-2" key={index}>
                    <div className="col" id="textList">
                      {e}
                    </div>
                  </div>
                  {isShown == index ? (
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
          {task.length === 0 ? (
            <div className="row border-top">
            <div className="col-8 mt-2">
              <p> No Items on the list</p>
            </div>
            <div className="col-4"></div>
          </div>
          ) : (
            <div className="row border-top">
            <div className="col-8 mt-2 ">
              <p>{task.length} Items on the list</p>
            </div>
            <div className="col-4"></div>
          </div>
          ) }
        </div>
          <div className="row mt-0 rounded shadow" style={style1} id="paginas">
          </div>
          <div className="row mt-0 rounded shadow" style={style1} id="paginas1">
          </div>
      </div>
    </div>
  );
};

export default Home;
