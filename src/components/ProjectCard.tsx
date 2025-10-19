import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.gameUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card rounded-xl overflow-hidden border border-border card-hover"
    >
      <div className="aspect-video overflow-hidden bg-secondary">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x225?text=Game+Image";
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" size={20} />
        </div>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
