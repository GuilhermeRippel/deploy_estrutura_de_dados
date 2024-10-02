import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logoCesuca from '../assets/logo_cesuca.webp'

function Triangle() {
    const lado1Ref = useRef(0)
    const lado2Ref = useRef(0)
    const lado3Ref = useRef(0)
    const [perimetro, setPerimetro] = useState(0)

    function calcularArea() {
        const lado1 = parseFloat(lado1Ref.current.value)
        const lado2 = parseFloat(lado2Ref.current.value)
        const lado3 = parseFloat(lado3Ref.current.value)

        if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3)) {
            setPerimetro(lado1 + lado2 + lado3)
        } else {
            alert("Digite valores válidos")
        }
    }

    return (
        <div className="w-screen h-screen bg-gray-800 flex flex-col">
            <header className="w-full h-20 bg-gray-950 flex items-center justify-center">
                <img src={logoCesuca} alt="Logo Cesuca" className="w-36 absolute left-5" />
                <h1 className="text-white font-bold text-3xl">Cálculo do Perímetro do Triângulo!</h1>
            </header>
            <main className="flex-grow w-full p-11 flex justify-around items-center">
                <div className=" w-1/5 flex flex-col gap-5">
                    <input type="number" min='1' max='10' className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500" placeholder="Lado esquerdo" ref={lado1Ref} />
                    <input type="number" min='1' max='10' className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500" placeholder="Lado direito" ref={lado2Ref} />
                    <input type="number" min='1' max='10' className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500" placeholder="Lado inferior" ref={lado3Ref} />
                    <button className="mt-5 w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500" onClick={calcularArea}>
                        Calcular Perímetro
                    </button>
                </div>
                <div className="font-bold text-white text-lg">
                    <div className="flex items-center gap-3">
                        <p>Lado esquerdo: {lado1Ref.current.value}</p>
                        <div className="relative flex items-center justify-center">
                            <div className="w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[300px] border-b-gray-950 bg-transparent"></div>
                            <p className="absolute text-center" style={{ top: "50%", transform: "translateY(-50%)" }}>Perímetro: {perimetro}</p>
                        </div>
                        <p>Lado Direito: {lado2Ref.current.value}</p>
                    </div>
                    <div className="w-full text-right pr-52">
                        <p>Lado Inferior: {lado3Ref.current.value}</p>
                    </div>
                </div>
                <div className="w-72 h-60 flex flex-col items-center text-xl justify-evenly font-bold text-gray-300">
                    <h3>Fórmula:</h3>
                    <div>
                        <p>L1 = {lado1Ref.current.value}</p>
                        <p>L2 = {lado2Ref.current.value}</p>
                        <p>L3 = {lado3Ref.current.value}</p>
                    </div>
                    <p>B * H / 2 = {perimetro}</p>
                    <p>{lado1Ref.current.value} + {lado2Ref.current.value} + {lado3Ref.current.value}= {perimetro}</p>
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

export default Triangle