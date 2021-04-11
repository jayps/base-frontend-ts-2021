import {Link} from "react-router-dom";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {logout, selectAuth} from "../auth/authSlice";

export interface DashboardContainerProps {
    children: any;
}

const DashboardContainer: React.FC<DashboardContainerProps> = ({children}) => {
    const auth = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();

    return (
        <div>
            PAGE
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    {
                        auth.token && <button onClick={() => dispatch(logout())}>Logout</button>
                    }
                </ul>
            </nav>
            {children}
        </div>
    )
}

export default DashboardContainer;