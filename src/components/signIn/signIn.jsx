import React, { Fragment, useEffect, useRef, useState } from "react";
import "./signIn.scss";
// import { Link } from "react-router-dom";

import SVG from 'react-inlinesvg';
import signinBG from "../media/singin/entry-pic-2.png";
import eye from "../media/singin/eye.svg";
import eyeSlash from "../media/singin/eye-slash.svg";
import { auth } from "../../services/userRequestsService";
import { useNavigate } from "react-router-dom";


export const Signin = React.memo( function Signin(props){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordSvg, setPasswordSvg] = useState(false);
    let navigate = useNavigate();

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const floatingLabelUserName = useRef(null);
    const showPasswordRef = useRef(null);
    const passworInputdRef = useRef(null);


    function onSubmit(event){
        event.preventDefault();
        passwordRef.current.classList.remove("form-group__error");
        usernameRef.current.classList.remove("form-group__error");
        auth(username, password)
            .then(response => {
                console.log(response.data.token);
                localStorage.setItem('token', response.data.token);
                navigate('../panel');
            })
            .catch(e => {
                if (e.response.data.password == "wrong"){
                    passwordRef.current.classList.add("form-group__error");
                }
                if (e.response.data.user == "not found"){
                    usernameRef.current.classList.add("form-group__error");
                }

                console.log(e);
            });
    }

    useEffect(() => {
        document.body.classList.add('bgBodySignin');
        return () => {
            document.body.classList.remove('bgBodySignin');
        }
    },[]);


    useEffect(() => {
        if (username){
            floatingLabelUserName.current.classList.add('floating-label__custom');
        }
        else{
            floatingLabelUserName.current.classList.remove('floating-label__custom');
        }
      }, [username]);

    useEffect(() => {
        if(password){
            showPasswordRef.current.classList.remove("hideShowPasswordButton");
        }
        else{
            showPasswordRef.current.classList.add("hideShowPasswordButton");
        }
    },[password]);


    function showPassword() {
        if (passworInputdRef.current.type === "password"){
            passworInputdRef.current.type = "text";
            setPasswordSvg(true);
        }
        else{
            passworInputdRef.current.type = "password";
            setPasswordSvg(false);
        }
    }
        

    return(
        <Fragment>
            {console.log('rerender Signin')}
            <div className="container-fluid signinFluid">
                <div className="container p-0 signin">
                    <div className="row">

                        

                        <div className="col-sm signinDesktopLeft">
                            <h1 className="textHeaderLeft">Введите почту и пароль</h1>
                            <img src={signinBG}/>
                        </div>

                        <div className="col-sm signinDesktopRight">
                            <div className="signinDesktopBlock">

                                <span className="textHeader">Войти</span>
                                

                                <form onSubmit={onSubmit}>
                                    <div ref ={usernameRef} className="form-group marginTopCustom" data-error="Не найдена">
                                        <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="off" type="email" className="form-control inputLineBottom" required />
                                        <span ref={floatingLabelUserName} className="floating-label">Введите почту</span>
                                    </div>
                                    <div ref = {passwordRef} className="form-group marginTopCustom" data-error="Неверный">
                                        <input ref={passworInputdRef} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" type="password" className="form-control inputLineBottom --padding" required id="exampleInputPassword1" /> 
                                        <span className="floating-label">Пароль</span>
                                        <div ref={showPasswordRef} onClick = {showPassword} className="showPasswordButton hideShowPasswordButton">
                                            <SVG src={passwordSvg ? eyeSlash : eye}/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center flex-column marginTopCustom">
                                        <button type="submit" className="blueButton">Войти</button>
                                    </div>
                                </form>


                            </div>
                        </div>          
                    </div>
                </div>
            </div>

        </Fragment>
    )
});