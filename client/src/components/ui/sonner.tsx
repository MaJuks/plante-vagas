import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      position="top-center"
      className="toaster group"
      toastOptions={{
        style: {
          fontFamily: "Poppins, sans-serif",
        },
        classNames: {
          toast: "border shadow-md rounded-md",
          success: "!bg-[#12372a] !text-[#d9e2d1] !border-[#436850]",
          error: "!bg-red-700 !text-white !border-red-900",
          loading: "!bg-[#F0F0F0] !text-[#12372a] !border-[#ADBD9F]",
          info: "!bg-[#436850] !text-[#d9e2d1] !border-[#ADBD9F]",
          description: "!text-[#ADBD9F]",
          actionButton: "!bg-[#ADBD9F] !text-[#12372a]",
          cancelButton: "!bg-[#d9e2d1] !text-[#12372a]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
