import React from 'react';
import NavaLink from './NavLink';

const MenuOverlay = ({links}) => {
    return (
        <ul className='flex flex-col items-center py-4'>
            {
                 links && links.map((links, index) => (
                    <li key={index}>

                        <NavaLink href={links.path} title={links.title} />
                    </li>
                ))
            }
        </ul>
    )
}

export default MenuOverlay
