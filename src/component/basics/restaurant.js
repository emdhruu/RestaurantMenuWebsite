import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi.js'
import MenuCard from './MenuCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, fabars } from '@fortawesome/free-solid-svg-icons';

const Resturant = () => {

    const [menuData, setmenuData] = useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setmenuData(updatedList);
    };
    return (
        <>
            <nav className='navbar'>
                <div className="btn-group">
                    <buton className="btn-group__item" onClick={
                        () => filterItem("breakfast")
                    }>Breakfast</buton>
                    <buton className="btn-group__item"
                        onClick={
                            () => filterItem("lunch")
                        }>Lunch</buton>
                    <buton className="btn-group__item"
                        onClick={
                            () => filterItem("evening")
                        }>Evening</buton>
                    <buton className="btn-group__item last-item"
                        onClick={
                            () => filterItem("dinner")
                        }>Dinner</buton>
                    <buton className="btn-group__item last-item"
                        onClick={
                            () => setmenuData(Menu)
                        }>All</buton>

                </div>
            </nav>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant