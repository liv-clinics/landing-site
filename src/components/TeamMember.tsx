import { Card } from '@/components/ui/card';
import { Users } from 'lucide-react';

// src/components/TeamMember.tsx
interface TeamMemberProps {
    name: string;
    role: string;
    credentials: string;
  }
  
  export function TeamMember({ name, role, credentials }: TeamMemberProps) {
    return (
      <Card className="p-6 text-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Users className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{credentials}</p>
        <p className="text-gray-500">{role}</p>
      </Card>
    );
  }