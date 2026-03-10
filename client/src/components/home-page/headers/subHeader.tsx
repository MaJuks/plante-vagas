import { Settings } from 'lucide-react';

export default function SubHeader() {
  return (
    <>
  
        <h1 className="text-xl">Dados Pessoais</h1>
    
        <hr className="my-2"/>
        
        <div className='flex justify-between'>
            <h1 className="text-xl ">Informações Pessoais</h1>
            <div className='flex gap-2 items-center'>
              <Settings className="w-5 h-5 text-gray-600" />
              <button className='underline text-center cursor-pointer'>Editar</button>
            </div>
        </div>

        <br />
        
    </>
  );
}
