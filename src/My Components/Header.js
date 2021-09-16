import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '15vh' }}>
            <div className="my-auto mx-auto">

                <a className="navbar-brand d-flex" href="#"><h2 style={{ fontSize: '3rem' }}>{props.title}</h2></a>

            </div>
        </nav>

    )
}


Header.defaultProps = {
    title: "Your Title Here"
}

Header.propTypes = {
    title: PropTypes.string
}
