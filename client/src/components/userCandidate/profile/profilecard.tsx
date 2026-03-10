import { UserCircle, GraduationCap, Award } from "lucide-react";
import { useUser } from "../userContext";

const ProfileCard = () => {
  const { UserData } = useUser();

  const UserInformations = [
    {
      id: 1,
      name: "Maria Julia",
      age: "21",
      college: "Costa e Silva",
      graduation: "Enfermages",
      city: "Palotina",
      state: "Parana",
    },
  ];

  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-40 lg:p-40 w-full bg-MediumGray max-w-6xl mx-auto font-SecondFont">
      <section className="flex flex-col justify-center items-center w-full">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full">
          <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-oliveGreen rounded-full flex items-center justify-center mb-4 md:mb-0">
            <UserCircle
              size={48}
              className="text-deepGreen md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
          </div>

          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-deeGgreen my-1">
              {" "}
              {UserData.user.name}
            </h2>
            <p className="text-DeepGray text-sm sm:text-base">Anos</p>
            <p className="text-DeepGray text-sm sm:text-base">
              {UserInformations[0].city}, {UserInformations[0].state}
            </p>
          </div>

          <div className="hidden md:block w-[1px] bg-black h-16 md:h-20 lg:h-[100px]"></div>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-start my-2">
              <GraduationCap size={18} className="text-DeepGray mr-2" />
              <span className="text-DeepGray text-sm sm:text-base">
                Estudou no {UserInformations[0].college}
              </span>
            </div>

            <div className="flex items-center justify-start">
              <Award size={18} className="mr-2 text-DeepGray" />
              <span className="text-DeepGray text-sm sm:text-base">
                Cursando técnico em {UserInformations[0].graduation}
              </span>
            </div>
          </div>
        </div>
      </section>

      <br />

      <section className="flex flex-col p-4 sm:p-6 md:p-10 max-w-4xl mx-auto text-left font-SecondFont">
        <h1 className="text-left text-xl sm:text-2xl mb-2">Seu perfil</h1>
        <p className="text-sm sm:text-base">
          Atualize seus dados e os mantenha seguros. Tenha suas informações de
          currículo atuais, empregadores verão essas informações.
        </p>
      </section>
    </div>
  );
};

export default ProfileCard;
