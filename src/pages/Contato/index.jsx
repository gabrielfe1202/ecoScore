import contatoImage from '../../assets/contato.jpg'

export default function Contato(){
    return( 
        <>
            <section className="flex flex-row justify-center items-center min-h-[70vh] py-24">
                <div className="flex justify-end pr-20">
                    <img src={contatoImage} className='w-full max-w-[50vh] rounded-3xl shadow-custom' />
                </div>
                <form className="bg-[#04253D] rounded-3xl w-5/12 flex flex-col gap-7 px-7 py-24 shadow-custom">
                    <h1 className='text-4xl font-mono font-bold text-white'>Fale conosco</h1>
                    <input type="text" placeholder="Nome" className="py-2 px-4 rounded-lg bg-[#528229] text-white placeholder:text-white border-none outline-none text-lg"/>
                    <input type="text" placeholder="Email" className="py-2 px-4 rounded-lg bg-[#528229] text-white placeholder:text-white border-none outline-none text-lg"/>
                    <input type="text" placeholder="Telefone" className="py-2 px-4 rounded-lg bg-[#528229] text-white placeholder:text-white border-none outline-none text-lg"/>
                    <textarea placeholder="Mensagem" rows={5} className="py-2 px-4 rounded-lg bg-[#528229] text-white placeholder:text-white border-none outline-none text-lg"></textarea>
                </form>
            </section>
        </>
    )
}