import { createContext, ReactNode, useContext,  useState , useEffect} from "react";

import { CurriculumPayload, getCurriculum, createCurriculum, updateCurriculum, 
 } from "../../services/curriculum";

interface CurriculumContextType { 
    curriculum : CurriculumPayload
    existCurriculum : boolean
      saveSection: (section: any, data: any) => Promise<void> 
}


const CurriculumContext = createContext<CurriculumContextType>({} as CurriculumContextType);

export const CurriculumProvider = ({ children }: { children: ReactNode }) => {
    const [curriculumData, setCurriculumData] = useState<CurriculumPayload>({experiencias: [],                                                                                                                                                            
      formacoes: [],
      certificados: [],                                                                                                                                                            
      idiomas: [],
      diferenciais: [], })
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

        if (existCurriculum ) {

            await updateCurriculum(updated)
        } else {

           await createCurriculum(updated)
        }

        setCurriculumData(updated)

      }

    return (
    <CurriculumContext.Provider value={{ curriculum: curriculumData, existCurriculum: existCurriculum, saveSection }}>
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
