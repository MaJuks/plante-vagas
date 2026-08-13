import { useState } from "react";
import SubHeader from "../../home-page/headers/subHeader";
import { useUser } from "../userContext";
import { toast } from "sonner";
import { updateUser } from "../../../services/users";
import { Info } from "lucide-react";

const inputBase = "w-full px-4 py-3 rounded-xl border transition-all duration-200";
const inputLocked = `${inputBase} bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200`;
const inputEditable = `${inputBase} bg-white text-gray-800 border-gray-200 focus:outline-none focus:ring-2 focus:ring-mediumGreen focus:border-transparent`;
const labelClass = "block text-sm font-medium text-gray-700 mb-2";

export default function Address() {
  const { UserData, refreshUser } = useUser();
  const addr = UserData.user.Address;

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    postalCode: "",
    street: "",
    number: "",
    district: "",
    complement: "",
    city: "",
    state: "",
    country: "",
  });

  const handleEdit = () => {
    setFormData({
      postalCode: addr?.postalCode || "",
      street: addr?.street || "",
      number: addr?.number || "",
      district: addr?.district || "",
      complement: addr?.complement || "",
      city: addr?.city || "",
      state: addr?.state || "",
      country: addr?.country || "",
    });
    setIsEditing(true);
  };

  const handleCancel = () => setIsEditing(false);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((f) => ({ ...f, [field]: e.target.value }));

  const handleSave = async () => {
    if (!formData.postalCode || !formData.street || !formData.number || !formData.district || !formData.city) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }
    setIsSaving(true);
    const loadingToast = toast.loading("Salvando endereço...");
    try {
      await updateUser({ address: formData });
      await refreshUser();
      setIsEditing(false);
      toast.success("Endereço atualizado com sucesso", { id: loadingToast });
    } catch (error: any) {
      toast.error("Erro ao atualizar endereço", { id: loadingToast, description: error.message });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 font-SecondFont">
        <SubHeader
          title="Endereço"
          subtitle="Onde você está localizado"
          isEditing={isEditing}
          isSaving={isSaving}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
        />

        <div className="flex items-start gap-2 text-sm bg-paleGreen/20 border border-paleGreen rounded-xl px-4 py-3 mb-6">
          <Info size={16} className="text-deepGreen flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-gray-700">
            {isEditing
              ? "Modo edição ativo. Preencha os campos e clique em Salvar."
              : "Clique em Editar para atualizar seu endereço."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] gap-5">
          <div>
            <label className={labelClass}>CEP *</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.postalCode : (addr?.postalCode || "—")}
              onChange={set("postalCode")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "00000-000" : ""}
            />
          </div>
          <div>
            <label className={labelClass}>Logradouro *</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.street : (addr?.street || "—")}
              onChange={set("street")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Nome da rua" : ""}
            />
          </div>
          <div>
            <label className={labelClass}>Número *</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.number : (addr?.number || "—")}
              onChange={set("number")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Ex: 123" : ""}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
          <div>
            <label className={labelClass}>Bairro *</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.district : (addr?.district || "—")}
              onChange={set("district")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Nome do bairro" : ""}
            />
          </div>
          <div>
            <label className={labelClass}>Complemento</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.complement : (addr?.complement || "—")}
              onChange={set("complement")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Apto, bloco..." : ""}
            />
          </div>
          <div>
            <label className={labelClass}>Cidade *</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.city : (addr?.city || "—")}
              onChange={set("city")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Nome da cidade" : ""}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <div>
            <label className={labelClass}>País</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.country : (addr?.country || "—")}
              onChange={set("country")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Ex: Brasil" : ""}
            />
          </div>
          <div>
            <label className={labelClass}>Estado</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.state : (addr?.state || "—")}
              onChange={set("state")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Ex: PR" : ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
