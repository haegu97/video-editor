import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ButtonComponent from "../../components/ButtonComponent";

const Data = {
  id: "test@programmers.com",
  pw: "1234abcd!!",
};

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (idValid && pwValid) {
      setValid(false);
      return;
    }
    setValid(true);
  }, [idValid, pwValid]);

  const handleId = (e) => {
    setId(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(id)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const index = id.indexOf("@");

  const nickname = id.slice(0, index);

  const onClickConfirm = () => {
    if (id === Data.id && pw === Data.pw) {
      localStorage.setItem("id", id.split("@")[0]);
      alert("로그인 성공!");
      navigate("/video-editor");
    } else {
      alert("로그인 실패!");
    }
  };

  return (
    <div className="login_frame">
      <Header
        btnMiddle={
          <ButtonComponent
            onClick={() => navigate("/video-editor")}
            text={"비디오 편집"}
          />
        }
        btnRight={<ButtonComponent text={"로그인"} />}
      />
      <div className="loginBody">
        <div className="loginName">Video-Editor</div>
        <form className="loginForm">
          <label>Id</label>
          <input
            className="loginInput"
            placeholder="test@programmers.com"
            onChange={handleId}
            type="text"
            value={id}
          />
          <label>Password</label>
          <input
            className="loginInput"
            loginForm
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            onChange={handlePw}
            type="password"
            value={pw}
          />
          <br />
          <button
            disabled={valid}
            onClick={onClickConfirm}
            className="loginBtn"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
