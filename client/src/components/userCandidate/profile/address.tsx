import { useState } from "react";
import SubHeader from "../../home-page/headers/subHeader";
import { useUser } from "../userContext";
import { toast } from "sonner";
import { updateUser } from "../../../services/users";
import { PencilLine } from "lucide-react";

const inputBase = "w-full border rounded-sm mt-1 p-1 pl-4 transition-all duration-200";
const inputLocked = `${inputBase} bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200`;
const inputEditable = `${inputBase} bg-white text-gray-800 border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`;

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

  const display = (value?: string | null) => (isEditing ? undefined : value || "—");

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
            Clique em <strong>Editar</strong> para atualizar seu endereço.
          </div>
        )}

        {isEditing && (
          <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2 mb-4">
            <PencilLine className="w-4 h-4 shrink-0" />
            Modo edição ativo. Preencha os campos e clique em Salvar.
          </div>
        )}

        <h1 className="text-xl my-4">Endereço</h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-DeepGray">
          <div className="flex flex-col w-full md:w-1/4">
            <label>CEP *</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.postalCode : (addr?.postalCode || "—")}
              onChange={set("postalCode")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "00000-000" : ""}
            />
          </div>
          <div className="flex flex-col w-full md:w-2/4">
            <label>Logradouro *</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.street : (addr?.street || "—")}
              onChange={set("street")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Nome da rua" : ""}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <label>Número *</label>
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

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-DeepGray mt-4">
          <div className="flex flex-col w-full md:w-1/3">
            <label>Bairro *</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.district : (addr?.district || "—")}
              onChange={set("district")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Nome do bairro" : ""}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/3">
            <label>Complemento</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.complement : (addr?.complement || "—")}
              onChange={set("complement")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Apto, bloco..." : ""}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/3">
            <label>Cidade *</label>
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

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-DeepGray mt-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label>País</label>
            <input
              type="text"
              disabled={!isEditing}
              value={isEditing ? formData.country : (addr?.country || "—")}
              onChange={set("country")}
              className={isEditing ? inputEditable : inputLocked}
              placeholder={isEditing ? "Ex: Brasil" : ""}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label>Estado</label>
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
    </>
  );
}
