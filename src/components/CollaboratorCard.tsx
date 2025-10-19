import { CheckCircle2, ExternalLink } from "lucide-react";
import { Collaborator } from "@/data/collaborators";

interface CollaboratorCardProps {
  collaborator: Collaborator;
}

const CollaboratorCard = ({ collaborator }: CollaboratorCardProps) => {
  const CardWrapper = collaborator.profileUrl ? "a" : "div";
  const linkProps = collaborator.profileUrl
    ? {
        href: collaborator.profileUrl,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <CardWrapper
      {...linkProps}
      className="group bg-card rounded-xl p-6 border border-border card-hover block"
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-2xl font-bold text-primary">
          {collaborator.name.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {collaborator.name}
            </h3>
            {collaborator.verified && (
              <CheckCircle2 className="text-primary" size={18} />
            )}
            {collaborator.profileUrl && (
              <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors ml-auto" size={16} />
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {collaborator.role}
          </p>
        </div>
      </div>
    </CardWrapper>
  );
};

export default CollaboratorCard;
