import React from 'react';
import { HashLink } from 'react-router-hash-link';

export const Component0 = props => 
{
    return (<>
        <HashLink smooth to="/#section-component1">
            <button>Component1</button>
        </HashLink>
        
        <HashLink smooth to="/#section-component2">
            <button>Component2</button>
        </HashLink>
    </>);
}

