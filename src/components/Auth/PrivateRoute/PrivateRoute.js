import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    signedInUser.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};
export default PrivateRoute;