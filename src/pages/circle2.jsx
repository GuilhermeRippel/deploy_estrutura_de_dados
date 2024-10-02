import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import logoCesuca from '../assets/logo_cesuca.webp'

function Circle2() {
    const raioRef = useRef(0)
    const [circunferencia, setCircunferencia] = useState(0)

    function calcularArea() {
        const raio = parseFloat(raioRef.current.value)

        if (!isNaN(raio)) {
        const pi = Math.PI;
        const result = (2 * pi) * raio;
        setCircunferencia(result.toFixed(2))
        } else {
            alert("Digite valores válidos")
        }
    }

    return (
        <div className="w-screen h-screen bg-gray-800 flex flex-col">
            <header className="w-full h-20 bg-gray-950 flex items-center justify-center">
                <img src={logoCesuca} alt="Logo Cesuca" className="w-36 absolute left-5"/>
                <h1 className="text-white font-bold text-3xl">Cálculo da Circunferência do Círculo!</h1>
            </header>
            <main className="flex-grow w-full p-11 flex justify-around items-center">
                <div className=" w-1/5 flex flex-col gap-5">
                    <input type="number" min='1' max='10' className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500" placeholder="Insira um valor para Raio" ref={raioRef} />
                    <button className="mt-5 w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500" onClick={calcularArea}>
                        Calcular Circinferência
                    </button>
                </div>
                <div className="font-bold text-white text-lg">
                    <div className="flex items-center gap-3">
                        <p>Raio: {raioRef.current.value}</p>
                        <div className="w-52 h-52 bg-transparent border-8 border-gray-950 flex items-center justify-center rounded-full">Circunferência: {circunferencia}</div>
                    </div>
                </div>
                <div className="w-72 h-60 flex flex-col items-center text-xl justify-evenly font-bold text-gray-300">
                    <h3>Fórmula:</h3>
                    <div>
                        <p>r = {raioRef.current.value}</p>
                    </div>
                    <p>C = 2 x π x {raioRef.current.value} = {circunferencia}</p>
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


export default Circle2