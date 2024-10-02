import {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import logoCesuca from '../assets/logo_cesuca.webp'

function Retangle(){
    const alturaRef = useRef(0)
    const baseRef = useRef(0)
    const [area, setArea] = useState(0)

    function calcularArea(){
        const altura = parseFloat(alturaRef.current.value)
        const base = parseFloat(baseRef.current.value)

        if(!isNaN(altura) && !isNaN(base)){
        setArea(altura * base)
        } else {
            alert("Digite valores válidos")
        }
    }

    return (
        <div className="w-screen h-screen bg-gray-800 flex flex-col">
            <header className="w-full h-20 bg-gray-950 flex items-center justify-center">
                <img src={logoCesuca} alt="Logo Cesuca" className="w-36 absolute left-5"/>
                <h1 className="text-white font-bold text-3xl">Cálculo da Área do Retângulo!</h1>
            </header>
            <main className="flex-grow w-full p-11 flex justify-around items-center">
                <div className=" w-1/5 flex flex-col gap-5">
                    <input type="number" min='1' max='10' className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500" placeholder="Insira um valor para Base" ref={baseRef}/>
                    <input type="number" min='1' max='10' className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500" placeholder="Insira um valor para Altura" ref={alturaRef}/>
                    <button className="mt-5 w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500" onClick={calcularArea}>
                        Calcular Área
                    </button>
                </div>
                <div className="font-bold text-white text-lg">
                    <div className="flex items-center gap-3">
                        <p>Altura: {alturaRef.current.value}</p>
                        <div className="w-96 h-40 bg-transparent border-8 border-gray-950 flex items-center justify-center">Área: {area}</div>
                    </div>
                    <div className="w-full text-right pr-48">
                        <p>Base: {baseRef.current.value}</p>
                    </div>
                </div>
                <div className="w-72 h-60 flex flex-col items-center text-xl justify-evenly font-bold text-gray-300">
                    <h3>Fórmula:</h3>
                    <div>
                        <p>B = {baseRef.current.value}</p>
                        <p>H = {alturaRef.current.value}</p>
                    </div>
                    <p>B * H = {area}</p>
                    <p>{baseRef.current.value} * {alturaRef.current.value} = {area}</p>
                </div>
            </main>
            <footer className="w-full h-10 bg-gray-950 flex items-center justify-center overflow-hidden">
                <p className="text-lg text-gray-500 font-bold whitespace-nowrap animate-marquee">
                    Nome dos Integrantes: <span className="text-white font-bold mr-2">Everson Lobato, Guilherme Rippel Moraes, João Ribas, Matheus Negrini da Costa, Leonardo Ruschel</span>
                    Nome do Professor: <span className="text-white font-bold mr-2">Arthur Marques de Oliveira</span>
                    Disciplina: <span className="text-white font-bold">Estrutura de Dados</span>
                </p>
            </footer>
            <div className='absolute bottom-14 left-9'>
            <Link to="/"><button className="mt-5 w-24 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500">Voltar</button></Link>
            </div>
        </div>
    )
}

export default Retangle