import React, { Fragment } from "react";


export const PanelMaster = React.memo( function PanelMaster(props){
        

    return(
        <Fragment>
            {console.log('rerender panelMaster')}
            <div className="container-fluid panelMaster">
                <div className="container p-0">
                    
                    <h1>panelMaster</h1>

                </div>
            </div>

        </Fragment>
    )
});