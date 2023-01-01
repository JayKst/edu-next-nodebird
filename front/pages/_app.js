import React from 'react';
import AppLayout from "../components/AppLayout";

const NodeBird = ({Component}) => {
    return(
        <AppLayout>
            <Component />
        </AppLayout>
    )
}

export default NodeBird;