import { FC } from "react";

import "./NavBar.scss";

const NavBar: FC = () => {
    return <>
        <div className="container">
            <div className="nav-bar">
                <div className="nav-bar-left">
                    <div className="nav-bar-logo"><img src="/gym_health.png" alt="GymBroIcon" width={48} /></div>
                    <div className="nav-bar-title">GymBro</div>
                </div>
                <div className="nav-bar-right">
                    <div className="nav-bar-links">
                        <div className="link-home">Home</div>
                        <div className="link-profile">Profile</div>
                        <div className="link-about">About</div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};
export default NavBar;
