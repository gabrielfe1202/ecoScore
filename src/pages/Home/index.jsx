import { useState } from 'react'
import { motion } from 'framer-motion';
import image1 from '../../assets/image1.png'
import Lottie from 'react-lottie';
import imageEco from "../../assets/imagemEco.jpg"
import animationData from '../../assets/animation.json';
import animationPlacas from '../../assets/placas.json';
import energias from "../../assets/energias.json"

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

  const optionsPlacas = {
    loop: true,
    autoplay: true,
    animationData: animationPlacas,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <section className='flex flex-row justify-center items-center flex-wrap'>
        <div className='w-10/12 md:w-5/12'>
          <h1 className='text-white text-[30px] md:text-[40px] font-mono'>Transforme a energia limpa da sua casa em poder para o futuro. Inovação, tecnologia e sustentabilidade para um mundo mais verde e conectado. </h1>          
        </div>
        <div className='w-full max-w-[700px] max-h-[700px]'>
          <Lottie options={options}/>
        </div>
      </section>

      <section className='flex flex-col-reverse md:flex-row flex-wrap w-full justify-center items-center'>
        <div className='w-10/12 md:w-3/12 flex justify-center items-center mt-12 md:mt-0'>
          <img src={imageEco} className='w-full h-auto rounded-2xl shadow-custom' />
        </div>
        <div className='w-10/12 md:w-6/12 md:pl-16'>
          <h1 className='text-4xl text-white font-mono'>Como Funciona a EcoStore?</h1>
          <p className='text-lg text-white pt-8'>
            A Ecostore é uma plataforma inovadora que transforma a energia limpa gerada em sua casa em uma moeda poderosa: pontos que podem ser convertidos em uma série de benefícios exclusivos. O funcionamento é simples e intuitivo, permitindo que você aproveite ao máximo a energia renovável que produz. Através de tecnologia de ponta, nossa plataforma realiza um monitoramento detalhado do seu consumo e da geração de energia sustentável, recompensando você a cada quilowatt-hora (kWh) de energia limpa gerada.
            <br /><br />
            Além de ajudar o meio ambiente, a Ecostore oferece uma maneira prática de você obter vantagens reais com o uso de energia solar ou outras fontes renováveis. A cada vez que sua residência ou empresa gera energia limpa, você acumula pontos. Esses pontos podem ser convertidos em descontos em uma ampla gama de produtos e serviços sustentáveis, como itens ecológicos para o lar, produtos orgânicos, soluções de transporte sustentável e muito mais.
            <br /><br />
            Nossa missão é tornar a sustentabilidade mais acessível e atraente, proporcionando benefícios tangíveis para quem adota práticas que ajudam o planeta. Com a Ecostore, você tem a oportunidade de economizar dinheiro enquanto investe em um futuro mais verde e consciente.
          </p>
        </div>
      </section>

      <section class="py-28">
        <div class="max-w-7xl mx-auto px-6">
          <h2 class="text-4xl font-mono text-white font-semibold text-center mb-10">Tipos de Energia Sustentável</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {energias.map(item => (
              <div class="energy-card bg-eco-green p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-custom">
                <h3 class="text-2xl font-mono font-bold text-white mb-2">{item.title}</h3>
                <p class="text-white">{item.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className='flex flex-row justify-center items-center flex-wrap'>
        <div className='w-10/12 md:w-5/12'>
          <h1 className='text-white text-4xl font-mono'>Tranforme sua casa com o poder da tecnologia e da inovação</h1>          
          <p className='text-lg mt-5 text-white'>Adotar soluções sustentáveis, como energia solar e automação inteligente, é uma maneira eficaz de transformar sua casa em um ambiente mais eficiente e ecológico. Além de reduzir o impacto ambiental, essas tecnologias proporcionam economia a longo prazo, com menos gastos com eletricidade e manutenção. Investir em energia sustentável é não apenas uma escolha inteligente, mas também uma contribuição importante para um futuro mais verde e consciente.</p>
        </div>
        <div className='w-full max-w-[700px] max-h-[700px]'>
          <Lottie options={optionsPlacas}/>
        </div>
      </section>
    </>
  )
}

export default Home
