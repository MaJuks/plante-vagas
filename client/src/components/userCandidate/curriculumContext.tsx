import { createContext, ReactNode, useContext,  useState , useEffect} from "react";

import { CurriculumPayload, getCurriculum, createCurriculum, updateCurriculum, updateCurriculumSection } from "../../services/curriculum";

interface CurriculumContextType {
    curriculum : CurriculumPayload
    existCurriculum : boolean
    saveSection: (section: any, data: any) => Promise<void>
    importAll: (data: CurriculumPayload) => Promise<void>
}


const CurriculumContext = createContext<CurriculumContextType>({} as CurriculumContextType);

export const CurriculumProvider = ({ children }: { children: ReactNode }) => {
    const [curriculumData, setCurriculumData] = useState<CurriculumPayload>({experiencias: [],
      formacoes: [],
      certificados: [],
      idiomas: [],
      diferenciais: [],
      operacoesAgricolas: [],
      operacoesPecuarias: [],
      operacoesFlorestais: [],
      culturas: [],
      maquinas: [],
      tecnologias: [], })
    const [existCurriculum, setExistCurriculum]  = useState(false)

    useEffect(() => {
        const FetchCurriculumData = async () => {
        const userCurriculum = await getCurriculum()

         setCurriculumData(userCurriculum)

         if (userCurriculum) {

            setExistCurriculum(true)

         }
        };

        FetchCurriculumData();
      }, []);


      const saveSection = async (section: any, data: any) => {
        const updated = {...curriculumData, [section]:data}

        if (existCurriculum) {
            await updateCurriculumSection(section, data)
        } else {
           await createCurriculum(updated)
           setExistCurriculum(true)
        }

        setCurriculumData(updated)
      }

      const importAll = async (data: CurriculumPayload) => {
        if (existCurriculum) {
          await updateCurriculum(data)
        } else {
          await createCurriculum(data)
          setExistCurriculum(true)
        }
        setCurriculumData(data)
      }

    return (
    <CurriculumContext.Provider value={{ curriculum: curriculumData, existCurriculum: existCurriculum, saveSection, importAll }}>
      {children}
    </CurriculumContext.Provider>
  );


}

export const useCurriculum = () => {
  const context = useContext(CurriculumContext);
  if (!context) {
    throw new Error("Precisa estar em um UserProvider");
  }
  return context;
};

export default CurriculumContext;
