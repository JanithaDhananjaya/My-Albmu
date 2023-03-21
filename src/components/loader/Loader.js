import './loaderStyles.css';

/* This is a functional component that renders a Loader */

function Loader() {
    return (
        <div className='loading-container'>
            <div className='loading-spinner'></div>
        </div>
    )
}

export default Loader;