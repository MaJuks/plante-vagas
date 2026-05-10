import { useState } from "react";
import SubHeader from "../../home-page/headers/subHeader";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { deleteUser, updateUser } from "../../../services/users";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { Lock, PencilLine } from "lucide-react";

const inputBase = "w-full border rounded-sm mt-1 p-1 pl-4 transition-all duration-200";
const inputLocked = `${inputBase} bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200`;
const inputEditable = `${inputBase} bg-white text-gray-800 border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`;

function LockedLabel() {
  return (
    <span className="flex items-center gap-1 text-xs text-gray-400 ml-1">
      <Lock className="w-3 h-3" /> Não editável
    </span>
  );
}

export default function MyData() {
  const { UserData, refreshUser } = useUser();
  const { user } = UserData;
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [formData, setFormData] = useState({ phone: "", disablePerson: "" });

  const dateFormatted = user.dateNasc
    ? new Date(user.dateNasc).toISOString().split("T")[0]
    : "";

  const handleEdit = () => {
    setFormData({ phone: user.phone, disablePerson: user.disablePerson });
    setIsEditing(true);
  };

  const handleCancel = () => setIsEditing(false);

  const handleSave = async () => {
    setIsSaving(true);
    const loadingToast = toast.loading("Salvando dados...");
    try {
      await updateUser({
        phone: formData.phone || undefined,
        disablePerson: formData.disablePerson || undefined,
      });
      await refreshUser();
      setIsEditing(false);
      toast.success("Dados atualizados com sucesso", { id: loadingToast });
    } catch (error: any) {
      toast.error("Erro ao atualizar dados", { id: loadingToast, description: error.message });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    const loadingToast = toast.loading("Excluindo conta...");
    try {
      await deleteUser();
      localStorage.clear();
      toast.success("Conta excluída com sucesso", { id: loadingToast });
      navigate("/login");
    } catch (error: any) {
      toast.error("Erro ao excluir conta", { id: loadingToast, description: error.message });
    }
  };

  return (
    <>
      <div className="flex flex-col p-8 md:p-36 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
        <SubHeader
          isEditing={isEditing}
          isSaving={isSaving}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
        />

        {!isEditing && (
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 mb-4">
            <PencilLine className="w-4 h-4 shrink-0" />
            Clique em <strong>Editar</strong> para modificar telefone e portador de deficiência.
          </div>
        )}

        {isEditing && (
          <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2 mb-4">
            <PencilLine className="w-4 h-4 shrink-0" />
            Modo edição ativo. Campos com borda verde podem ser alterados.
          </div>
        )}

        {/* Nome */}
        <div className="flex flex-col md:flex-row my-4 md:my-6 text-DeepGray gap-4">
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-1">
              <label>Nome completo</label>
              {isEditing && <LockedLabel />}
            </div>
            <input
              type="text"
              disabled
              value={user.name}
              className={inputLocked}
            />
          </div>
        </div>

        {/* Data e Gênero */}
        <div className="flex flex-col md:flex-row my-4 md:my-6 text-DeepGray gap-4">
          <div className="flex flex-col w-full md:w-1/3">
            <div className="flex items-center gap-1">
              <label>Data de Nascimento</label>
              {isEditing && <LockedLabel />}
            </div>
            <input
              type="date"
              disabled
              value={dateFormatted}
              className={inputLocked}
            />
          </div>

          <div className="flex flex-col w-full md:w-2/3">
            <div className="flex items-center gap-1">
              <label>Gênero</label>
              {isEditing && <LockedLabel />}
            </div>
            <div className={`flex flex-wrap gap-4 mt-1 p-2 rounded-sm ${isEditing ? "opacity-50 pointer-events-none" : ""}`}>
              {["feminino", "masculino", "outro", "prefiroNaoDizer"].map((g) => (
                <div key={g} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={g}
                    name="gender"
                    value={g}
                    checked={user.gender === g}
                    readOnly
                  />
                  <label htmlFor={g}>
                    {{ feminino: "Feminino", masculino: "Masculino", outro: "Outro", prefiroNaoDizer: "Prefiro não dizer" }[g]}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Portador de deficiência */}
        <div className="flex flex-col my-4">
          <h1 className="text-lg md:text-xl">Portador de deficiência:</h1>
          <p className="text-gray-500 text-sm mt-1">
            Gostaria de se candidatar às vagas como portador de deficiência?
          </p>
          <div className={`flex gap-4 md:gap-8 mt-2 ${isEditing ? "text-gray-800" : "text-gray-400"}`}>
            {["yes", "no"].map((v) => (
              <label
                key={v}
                htmlFor={`disable-${v}`}
                className={`flex items-center gap-2 cursor-pointer select-none px-4 py-2 rounded-md border transition-all duration-150 ${
                  (isEditing ? formData.disablePerson : user.disablePerson) === v
                    ? isEditing
                      ? "border-green-500 bg-green-50 text-green-800 font-medium"
                      : "border-gray-300 bg-gray-100 text-gray-600"
                    : "border-transparent"
                } ${!isEditing ? "pointer-events-none" : ""}`}
              >
                <input
                  type="radio"
                  id={`disable-${v}`}
                  name="disablePerson"
                  value={v}
                  className="accent-green-600"
                  checked={(isEditing ? formData.disablePerson : user.disablePerson) === v}
                  onChange={() => isEditing && setFormData((f) => ({ ...f, disablePerson: v }))}
                  readOnly={!isEditing}
                />
                {v === "yes" ? "Sim" : "Não"}
              </label>
            ))}
          </div>
        </div>

        {/* Telefone e Email */}
        <h1 className="text-lg md:text-xl mt-6 mb-2">Informações Pessoais:</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-1/2 text-DeepGray">
            <label>Telefone</label>
            <input
              type="text"
              value={isEditing ? formData.phone : user.phone}
              disabled={!isEditing}
              onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Digite o telefone" : ""}
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2 text-DeepGray">
            <div className="flex items-center gap-1">
              <label>Email</label>
              {isEditing && <LockedLabel />}
            </div>
            <input
              type="text"
              disabled
              value={user.email}
              className={inputLocked}
            />
          </div>
        </div>

        <div className="mt-10">
          <button
            onClick={() => setConfirmDeleteOpen(true)}
            className="px-6 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors"
          >
            Excluir conta
          </button>
        </div>
      </div>

      <ConfirmDialog
        open={confirmDeleteOpen}
        onOpenChange={setConfirmDeleteOpen}
        title="Excluir conta"
        description="Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita."
        onConfirm={handleDelete}
      />
    </>
  );
}
