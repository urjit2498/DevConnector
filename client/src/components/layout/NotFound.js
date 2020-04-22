import React, { Fragment } from 'react'

const NotFound = props => {
    return (
        <Fragment>
            <h1 className="x-large text-primary">
                <i className="fas fa-exclamation-triangle"></i> Page Not Found
            </h1>
            <p>Sorry! This page does not exist</p>
        </Fragment>
    )
}

NotFound.propTypes = {

}

export default NotFound
