import { Card } from '@/components/ui/card';

// src/components/ServiceCard.tsx
interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  export function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Card>
    );
  }
  