import { PencilLine, Loader2 } from "lucide-react";

interface SubHeaderProps {
  title: string;
  subtitle?: string;
  isEditing?: boolean;
  isSaving?: boolean;
  onEdit?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
}

export default function SubHeader({ title, subtitle, isEditing, isSaving, onEdit, onSave, onCancel }: SubHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-deepGreen font-PrimaryFont">{title}</h1>
        {subtitle && <p className="text-gray-600 font-SecondFont mt-1">{subtitle}</p>}
      </div>

      <div className="flex gap-3">
        {isEditing ? (
          <>
            <button
              onClick={onCancel}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors duration-200 font-SecondFont font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={onSave}
              disabled={isSaving}
              className="flex items-center gap-2 bg-deepGreen text-white px-5 py-2.5 rounded-xl hover:bg-mediumGreen transition-colors duration-200 font-SecondFont font-semibold disabled:opacity-60"
            >
              {isSaving && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
              {isSaving ? "Salvando..." : "Salvar"}
            </button>
          </>
        ) : (
          <button
            onClick={onEdit}
            className="flex items-center gap-2 border border-deepGreen text-deepGreen px-5 py-2.5 rounded-xl hover:bg-deepGreen hover:text-white transition-colors duration-200 font-SecondFont font-semibold"
          >
            <PencilLine size={16} aria-hidden="true" />
            Editar
          </button>
        )}
      </div>
    </div>
  );
}
