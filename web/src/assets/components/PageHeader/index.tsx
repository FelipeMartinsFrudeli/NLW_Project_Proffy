import React from 'react';

import logoImg from '../../../assets/images/logo.svg';
import backIcon from '../../../assets/images/icons/back.svg';

import './style.css';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="backIcon"/>
                    </Link>

                    <img src={logoImg} alt="logoImg"/>
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>
                    { props.description && <p>{props.description}</p>}

                    {props.children}
                </div>

                {props.children}
            </header>
    );
}

export default PageHeader