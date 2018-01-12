// Dependencies
import React, {Component } from 'react';
import PropTypes from 'prop-types'; 
// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        const { title , items} = this.props;

        return ( 
            <div className = "Header" > 
                <header className = "Logo" > 
                    <img src = { logo } className = "logo"alt = "logo" / > 
                    <h1 className = "title" >{title}  </h1> 
                    <ul className="Menu">
                        {items && items.map((item, key ) => <li key={key}> <a href={item.url}>{item.title}</a> </li> )}
                    </ul>
                </header> 
            </div>);
    }
}
export default Header;