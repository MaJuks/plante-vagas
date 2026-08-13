import { Check, Briefcase, UserCheck, ListChecks } from "lucide-react";

const steps = [
  { id: "criarVaga", label: "Dados da vaga", icon: Briefcase },
  { id: "processoSeletivo", label: "Processo Seletivo", icon: UserCheck },
  { id: "etapas", label: "Etapas", icon: ListChecks },
];

const Stepper = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const activeIndex = steps.findIndex((s) => s.id === activeTab);

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-6">
        <div className="flex items-center">
          {steps.map((step, index) => {
            const isCompleted = index < activeIndex;
            const isActive = index === activeIndex;
            const isDone = isCompleted || isActive;

            return (
              <div key={step.id} className={`flex items-center ${index < steps.length - 1 ? "flex-1" : ""}`}>
                <button
                  type="button"
                  onClick={() => setActiveTab(step.id)}
                  className="flex flex-col items-center gap-2 group px-1"
                >
                  <span
                    className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full font-SecondFont font-semibold transition-colors duration-300 flex-shrink-0 ${
                      isDone
                        ? "bg-deepGreen text-white"
                        : "bg-white border-2 border-gray-200 text-gray-400 group-hover:border-mediumGreen/50"
                    }`}
                  >
                    {isCompleted ? <Check size={18} aria-hidden="true" /> : <step.icon size={16} aria-hidden="true" />}
                  </span>
                  <span
                    className={`text-[11px] sm:text-xs font-SecondFont font-medium text-center leading-tight max-w-[70px] sm:max-w-none ${
                      isDone ? "text-deepGreen" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </button>

                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-2 -mt-6">
                    <div className={`h-full transition-colors duration-300 ${isCompleted ? "bg-deepGreen" : "bg-gray-200"}`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
