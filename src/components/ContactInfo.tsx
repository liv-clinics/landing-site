// src/components/ContactInfo.tsx
interface ContactInfoProps {
    icon: React.ReactNode;
    title: string;
    info: string;
  }
  
  export function ContactInfo({ icon, title, info }: ContactInfoProps) {
    return (
      <div className="text-center">
        <div className="text-blue-600 flex justify-center mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{info}</p>
      </div>
    );
  }