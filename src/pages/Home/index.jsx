import { useState } from 'react'
import { motion } from 'framer-motion';
import image1 from '../../assets/image1.png'
import Lottie from 'react-lottie';
import animationData from '../../assets/animation.json';

function Home() {
  const [count, setCount] = useState(0)

  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <section className='flex flex-row justify-center items-center'>
        <div className='w-5/12'>
          <h1 className='text-white text-[40px] font-mono'>Transforme a energia limpa da sua casa em poder para o futuro. Inovação, tecnologia e sustentabilidade para um mundo mais verde e conectado. </h1>
          <p></p>
        </div>
        <div className=''>
          <Lottie options={options} height={700} width={700} />
        </div>
      </section>

      <section>
        <h1>Como Funciona a Ecostore?</h1>
        <p>A Ecostore transforma a energia limpa que você gera em sua casa em uma moeda poderosa: pontos que podem ser convertidos em benefícios exclusivos. Utilizando tecnologia de ponta, nossa plataforma monitora o consumo e a geração de energia renovável, recompensando você por cada kWh de energia limpa gerada. Com esses pontos, você tem acesso a descontos em produtos sustentáveis, serviços ecológicos e muito mais. É simples, rápido e ainda ajuda o planeta. Na Ecostore, cada ação conta para um futuro mais sustentável!</p>
      </section>
    </>
  )
}

export default Home
