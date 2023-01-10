import React from 'react';
import { Component1 } from './Component1';
import { Component2 } from './Component2';
import { HashLink } from 'react-router-hash-link';

export const Home = props => 
{
    return (<>
        <HashLink to="/component0">
            <button>Button component 0</button>
        </HashLink>
        <Component1/>
        <Component2/>
    </>);
}


