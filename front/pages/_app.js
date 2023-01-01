import React from 'react';
import PropTypes from "prop-types";
import AppLayout from "../components/AppLayout";

const NodeBird = ({Component}) => {
    return(
        <AppLayout>
            <Component />
        </AppLayout>
    )
}

NodeBird.propTypes = {
    Component: PropTypes.elementType,
}


export default NodeBird;