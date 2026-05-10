import { Settings } from 'lucide-react';

interface SubHeaderProps {
  isEditing?: boolean;
  isSaving?: boolean;
  onEdit?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
}

export default function SubHeader({ isEditing, isSaving, onEdit, onSave, onCancel }: SubHeaderProps) {
  return (
    <>
      <h1 className="text-xl">Dados Pessoais</h1>
      <hr className="my-2"/>
      <div className='flex justify-between'>
        <h1 className="text-xl">Informações Pessoais</h1>
        <div className='flex gap-2 items-center'>
          {isEditing ? (
            <>
              <button onClick={onCancel} className='underline text-center cursor-pointer text-gray-400'>
                Cancelar
              </button>
              <button onClick={onSave} disabled={isSaving} className='underline text-center cursor-pointer'>
                {isSaving ? 'Salvando...' : 'Salvar'}
              </button>
            </>
          ) : (
            <>
              <Settings className="w-5 h-5 text-gray-600" />
              <button onClick={onEdit} className='underline text-center cursor-pointer'>Editar</button>
            </>
          )}
        </div>
      </div>
      <br />
    </>
  );
}
