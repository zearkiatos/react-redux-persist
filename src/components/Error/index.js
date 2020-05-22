import React, { Fragment } from "react";

const Error = ({message}) => {
    return(
        <Fragment>
            <h1>
                {message}
            </h1>
        </Fragment>
    )
}

export default Error;