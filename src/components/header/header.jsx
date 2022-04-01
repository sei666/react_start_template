import React, { Fragment, useEffect, useRef } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

import SVG from 'react-inlinesvg';
import logo from "../media/header/logo_2.svg";



export const Header = React.memo( function Header(props){

    const loginButtonRef = useRef(null);

    useEffect(() => {
        if (props.pathname){
            if (props.pathname === "/"){
                loginButtonRef.current.classList.remove('hide');
                // document.body.classList.remove('bgBodySignin');
            }
            if (props.pathname === "/signin"){
                loginButtonRef.current.classList.add('hide');
                // document.body.classList.add('bgBodySignin');
            }
        }
    },[props.pathname]);
        

    return(
        <Fragment>
            {console.log('rerender Header')}
            <div className="container-fluid headerFluid">
                <div className="container p-0 header">

                    <Link to="/" type="button" className="header__logo"><SVG src={logo} /></Link>
                    
                    <Link ref={loginButtonRef} to="/signin" type="button" className="header__loginButton">Войти</Link>
                    

                </div>
            </div>

        </Fragment>
    )
});