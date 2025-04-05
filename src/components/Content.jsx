import React from "react";

const content = ({children}) => {
    return (
        <>
        {/*Main Content */}
        <div className="flex-grow-1 p-4">
        <div>{children}</div>
        </div>
        </>
    );
};

export default content;