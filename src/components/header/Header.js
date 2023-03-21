import './HeaderStyles.css';
import {useDispatch, useSelector} from 'react-redux';

/* This is a functional component that renders a Header */

function Header() {
    const order = useSelector((state) => state.value);
    const dispatch = useDispatch();

    const onChange = (e) => {
        const order = e.target.value;
        if (order === 'asc') {
            dispatch({type: 'ASC'});
        } else if (order === 'desc') {
            dispatch({type: 'DESC'});
        }
    };

    return (
        <header className="header">
            <h1 className="header__title">My Albums</h1>
            <nav className="header__nav">
                <div className="dropdown">
                    <select className="dropdown__select" onChange={onChange}>
                        <option key='1' value='asc'>
                            Sort by Title ASC
                        </option>
                        <option key='2' value='desc'>
                            Sort by Title DESC
                        </option>
                    </select>
                </div>
            </nav>
        </header>);
}

export default Header;