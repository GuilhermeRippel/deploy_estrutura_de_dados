import { useState, useRef } from "react"
import Footer from "../components/Footer"
import ButtonBack from "../components/ButtonBack"
import Header from "../components/Header"

function Square() {
    const alturaRef = useRef(0)
    const baseRef = useRef(0)
    const [area, setArea] = useState(0)

    function calcularArea() {
        const altura = parseFloat(alturaRef.current.value)
        const base = parseFloat(baseRef.current.value)

        if (!isNaN(altura) && !isNaN(base)) {
            setArea(altura * base)
        } else {
            alert("Digite valores válidos")
        }
    }

    return (
        <div className="w-screen h-screen bg-gray-800 flex flex-col">
            <Header title="Área do Quadrado" />
            <main className="flex-grow w-full p-2 flex flex-col justify-around items-center">
                <div className="flex flex-col md:flex-row justify-around w-full items-center">
                    <div className="w-full sm:w-3/5 md:w-2/5 lg:w-1/5 xl:1/5 flex md:flex-col flex-row gap-5 mb-5 md:mb-0">
                        <input type="number" min="1" max="10" className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500" placeholder="Base" ref={baseRef} />
                        <input type="number" min="1" max="10" className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500" placeholder="Altura" ref={alturaRef} />
                        <button className="lg:mt-5 w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500" onClick={calcularArea}>
                            Calcular Área
                        </button>
                    </div>
                    <div className="h-1/2 md:h-auto font-bold text-white text-lg flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3">
                            <p>Altura: {alturaRef.current.value}</p>
                            <div className="w-52 h-52 bg-transparent border-8 border-gray-950 flex items-center justify-center">
                                Área: {area}
                            </div>
                        </div>
                        <div className="w-full text-right pr-16">
                            <p>Base: {baseRef.current.value}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full gap-3 flex flex-col items-center text-xl font-bold text-gray-300">
                    <h3>Fórmula:</h3>
                    <p className="text-center text-base flex flex-col">
                        Multiplique o valor de um dos lados por ele mesmo.
                        <span>Por exemplo, se o lado do quadrado mede 5 unidades, a área será 5 × 5 = 25 unidades quadradas.</span>
                    </p>
                </div>
            </main>

            <Footer />
            <ButtonBack />
        </div>
    )
}

export default Square