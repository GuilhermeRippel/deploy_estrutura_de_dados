import logoCesuca from '../assets/logo_cesuca.webp'
import PropTypes from 'prop-types'
import light_mode from '../assets/light_mode.svg'

export default function Header({title, title2}) {
    return (
        <header className="w-full h-24 bg-gray-950 flex items-center justify-around">
            <img src={logoCesuca} alt="Logo Cesuca" className="w-20 sm:w-24 lg:w-32" />
            <h1 className="text-white font-bold text-lg sm:text-2xl lg:text-3xl flex flex-col py-1">{title}<span className="text-center">{title2}</span></h1>
            <a href="https://estruturasdedados.matheusnegrinidacosta.com/"><img src={light_mode} alt="Ícone do light mode" className='cursor-pointer'/></a>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired
}