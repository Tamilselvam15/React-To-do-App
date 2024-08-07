/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (

        <div className='head'>
            <div className='title'>
                <h2>Todo-App</h2>
            </div>

            <div className='head-content'>
                <Link to="/" className='lins'>Home</Link>
                <Link to="/list" className='lins'>list</Link>
                <Link to="/about" className='lins'>About</Link>



            </div>


        </div>
    )
}

export default Header
