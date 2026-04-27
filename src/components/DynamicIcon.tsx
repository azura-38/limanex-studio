import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

export interface DynamicIconProps extends LucideProps {
  name: string;
  className?: string;
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    return <Icons.HelpCircle {...props} />;
  }

  return <IconComponent {...props} />;
};
