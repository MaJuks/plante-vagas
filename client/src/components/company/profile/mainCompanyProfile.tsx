import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil } from "lucide-react";
import Board from "./board";
import { useUser } from "../userContextCompany";
import { getVagasByEmpresa, Vaga } from "@/services/vaga";

export default function MainCompanyProfile() {
  const navigate = useNavigate();
  const { UserData } = useUser();
  const user = UserData.user;
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVagasByEmpresa()
      .then(setVagas)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-lg font-medium text-gray-700 font-SecondFont">
            Veja como os usuários enxergam seu perfil.
          </p>
          <button
            onClick={() => navigate("/empresa/editar")}
            className="inline-flex items-center justify-center gap-2 bg-deepGreen text-white px-5 py-2.5 rounded-xl font-SecondFont font-semibold text-sm hover:bg-mediumGreen transition-colors duration-200 self-start sm:self-auto"
          >
            <Pencil size={16} aria-hidden="true" />
            Editar perfil
          </button>
        </div>

        <Board
          name={user?.fantasyName || user?.name || ""}
          descricao_longa={user?.description ?? ""}
          vagas={vagas}
          loadingVagas={loading}
          logoUrl={user?.logoUrl}
          bannerUrl={user?.bannerUrl}
          facebookUrl={user?.facebookUrl}
          instagramUrl={user?.instagramUrl}
          linkedinUrl={user?.linkedinUrl}
          websiteUrl={user?.websiteUrl}
        />
      </div>
    </div>
  );
}
