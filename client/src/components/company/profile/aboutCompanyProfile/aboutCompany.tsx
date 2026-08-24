import { Building2, Facebook, Instagram, Linkedin, Globe } from "lucide-react";

type Props = {
  descricao_longa: string;
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  linkedinUrl?: string | null;
  websiteUrl?: string | null;
};

export default function AboutCompany({
  descricao_longa,
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  websiteUrl,
}: Props) {
  const socialLinks = [
    { icon: Facebook, href: facebookUrl, label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Instagram, href: instagramUrl, label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: linkedinUrl, label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Globe, href: websiteUrl, label: "Website", color: "hover:bg-gray-600" },
  ].filter((social): social is typeof social & { href: string } => !!social.href);

  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-paleGreen rounded-xl flex items-center justify-center">
            <Building2 size={20} className="text-deepGreen" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-deepGreen font-PrimaryFont">
            Sobre a Empresa
          </h3>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <p className="font-SecondFont text-gray-700 leading-relaxed">
            {descricao_longa || "Nenhuma descrição cadastrada ainda."}
          </p>
        </div>
      </section>

      {socialLinks.length > 0 && (
        <section>
          <h3 className="text-lg font-bold text-deepGreen font-PrimaryFont mb-4">
            Redes Sociais
          </h3>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-xl
                         font-SecondFont font-medium transition-all duration-300
                         hover:text-white hover:shadow-lg ${social.color}`}
              >
                <social.icon size={20} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
