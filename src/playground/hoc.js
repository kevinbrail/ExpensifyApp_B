console.log('HOC Repoting for duty!')

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//         { props.isAdmin && <p>This is private Info. Please dont Share</p>}
//         <WrappedComponent {...props}/>
//         </div>
//     )
// };
const isAuthMessage = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? 
        <p>You are Logged in.</p> && <WrappedComponent {...props}/>   
        : <p>You Need to log in</p>}
        </div>
    )
};

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = isAuthMessage(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="Salami, Salami, Baloney" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Salami, Salami, Baloney" />, document.getElementById('app'))