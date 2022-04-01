import React, { Fragment } from "react";
import "./welcomePage.scss";
import { Link } from "react-router-dom";

// import SVG from 'react-inlinesvg';
// import logo from "../media/welcomePage/logo_2.svg";

import mainScreen from "../media/welcomePage/main-screen.png";


export const WelcomePage = React.memo( function WelcomePage(props){
        

    return(
        <Fragment>
            {console.log('rerender WelcomePage')}
            <div className="container-fluid welcomePage">
                <div className="container p-0">
                    <h1>Автоматическая отправка фото</h1>

                    <div>
                        <div className="welcomePage__items">
                            <div className="welcomePage__sub-title">
                                Quick Shot автоматически отправит самые важные и дорогие Вам фотографи в облако.
                            </div>
                            <div className="welcomePage__image">
                                <img src={mainScreen} alt=""/>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>

        </Fragment>
    )
});