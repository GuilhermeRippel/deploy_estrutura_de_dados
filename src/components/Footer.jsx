import { useState } from "react"

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <footer className="w-full bg-gray-950 overflow-hidden text-center text-white">
            <button onClick={toggleModal} className="py-1 hover:underline text-sm sm:text-base">Clique para ver os Integrantes e o Professor envolvido neste projeto</button>
            {!isModalOpen ? isModalOpen : (
                <div className="w-screen h-screen absolute left-0 top-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-3/4 md:w-1/3 h-1/2 bg-white rounded-lg flex flex-col items-center justify-center gap-5 text-black relative pb-10">
                        <p onClick={toggleModal} className="absolute top-2 right-4 cursor-pointer text-xl font-bold">X</p>
                        <div>
                            <h2 className="font-bold text-xl">Nome dos Integrantes</h2>
                            <ul>
                                <li className="hover:underline hover:text-blue-500"><a href="https://www.linkedin.com/in/everson-lobato-8416a12b6/">Everson Lobato</a></li>
                                <li className="hover:underline hover:text-blue-500"><a href="https://www.linkedin.com/in/guilherme-rippel-moraes-1a3571287/">Guilherme Rippel</a></li>
                                <li className="hover:underline hover:text-blue-500"><a href="#">João Ribas</a></li>
                                <li className="hover:underline hover:text-blue-500"><a href="https://www.linkedin.com/in/leonardo-s-ruschel-450310323/">Leonardo S. Ruschel</a></li>
                                <li className="hover:underline hover:text-blue-500"><a href="https://www.linkedin.com/in/matheusnegrinidacosta/">Matheus Negrini</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold text-xl">Nome do Professor</h2>
                            <ul>
                                <li>Arthur Marques de Oliveira</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    )
}
