import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Home() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [sub1, setsub1] = useState();
  const [sub2, setsub2] = useState();
  const [sub3, setsub3] = useState();
  const [grade, setgrade] = useState("");
  const [rollno, setrollno] = useState("");

  const [isloading, setIsloading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      await axios.post("http://localhost:5000/api/create", {
        name: name,
        rollno: rollno,
        sub1: sub1,
        sub2: sub2,
        sub3: sub3,
        grade: grade,
      });
      setIsloading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="whole">
      <div className="container">
        <form className="form " id="createAccount" onSubmit={handleSubmit}>
          <h1 className="form__title">Add student details</h1>
          <div className="form__message form__message--error"></div>
          <div className="form__input-group">
            <input
              type="text"
              className="form__input"
              autoFocus
              placeholder="Name"
              required
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form__input-group">
            <input
              type="text"
              id="signupUsername"
              className="form__input"
              placeholder="Roll number"
              required
              onChange={(e) => setrollno(e.target.value)}
            />
          </div>
          <div className="form__input-group">
            <input
              type="number"
              className="form__input"
              placeholder="subject1 marks"
              required
              onChange={(e) => setsub1(e.target.value)}
            />
          </div>
          <div className="form__input-group">
            <input
              type="number"
              className="form__input"
              placeholder="subject2 marks"
              required
              onChange={(e) => setsub2(e.target.value)}
            />
          </div>
          <div className="form__input-group">
            <input
              type="number"
              className="form__input"
              placeholder="subject3 marks"
              required
              onChange={(e) => setsub3(e.target.value)}
            />
          </div>
          <div className="form__input-group">
            <input
              type="text"
              className="form__input"
              placeholder="Grade:(A,B,C,D,Fail)"
              required
              onChange={(e) => setgrade(e.target.value)}
            />
          </div>
          {isloading ? (
            <>
              <button
                className="form__button"
                disabled
                style={{ cursor: "progress" }}
              >
                Adding details
              </button>
            </>
          ) : (
            <>
              <button className="form__button">Add</button>
            </>
          )}
          <Link to="/students" className="form__text form__link">
            <p>Search for a student details</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
