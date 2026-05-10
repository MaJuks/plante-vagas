import { useState } from "react";
import SubHeader from "../../home-page/headers/subHeader";
import { useUser } from "../userContext";
import { toast } from "sonner";
import { updateUser } from "../../../services/users";
import { Lock, PencilLine } from "lucide-react";

const inputBase = "w-full border rounded-sm mt-1 p-1 pl-4 transition-all duration-200";
const inputLocked = `${inputBase} bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200`;
const inputEditable = `${inputBase} bg-white text-gray-800 border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`;

export default function InfoLogin() {
  const { UserData } = useUser();
  const { user } = UserData;

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleEdit = () => {
    setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setIsEditing(true);
  };

  const handleCancel = () => setIsEditing(false);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((f) => ({ ...f, [field]: e.target.value }));

  const handleSave = async () => {
    if (!formData.currentPassword || !formData.newPassword) {
      toast.error("Preencha a senha atual e a nova senha");
      return;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("A nova senha e a confirmação não coincidem");
      return;
    }
    setIsSaving(true);
    const loadingToast = toast.loading("Atualizando senha...");
    try {
      await updateUser({
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });
      setIsEditing(false);
      toast.success("Senha atualizada com sucesso", { id: loadingToast });
    } catch (error: any) {
      toast.error("Erro ao atualizar senha", { id: loadingToast, description: error.message });
    } finally {
      setIsSaving(false);
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
            Clique em <strong>Editar</strong> para alterar sua senha.
          </div>
        )}

        {isEditing && (
          <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2 mb-4">
            <PencilLine className="w-4 h-4 shrink-0" />
            Preencha os campos abaixo para alterar sua senha.
          </div>
        )}

        <div className="flex flex-col text-DeepGray mt-4">

          {/* Email — sempre bloqueado */}
          <div className="flex flex-col my-4">
            <div className="flex items-center gap-1">
              <label>Email</label>
              {isEditing && (
                <span className="flex items-center gap-1 text-xs text-gray-400 ml-1">
                  <Lock className="w-3 h-3" /> Não editável
                </span>
              )}
            </div>
            <input
              type="text"
              disabled
              value={user.email}
              className={`${inputLocked} md:w-3/4 lg:w-2/3`}
            />
          </div>

          {/* Senha */}
          <div className="flex flex-col my-2">
            <label>Senha</label>

            {!isEditing && (
              <input
                type="text"
                disabled
                value="••••••••••••••"
                className={`${inputLocked} w-full sm:w-1/2 md:w-2/5`}
              />
            )}

            {isEditing && (
              <div className="flex flex-col gap-4 mt-2 w-full md:w-2/3">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Senha atual *</label>
                  <input
                    type="password"
                    value={formData.currentPassword}
                    onChange={set("currentPassword")}
                    className={inputEditable}
                    placeholder="Digite sua senha atual"
                    autoComplete="current-password"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Nova senha *</label>
                  <input
                    type="password"
                    value={formData.newPassword}
                    onChange={set("newPassword")}
                    className={inputEditable}
                    placeholder="Digite a nova senha"
                    autoComplete="new-password"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Confirmar nova senha *</label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={set("confirmPassword")}
                    className={inputEditable}
                    placeholder="Repita a nova senha"
                    autoComplete="new-password"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
