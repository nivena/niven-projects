type ProjectCardProps = {
    title: string;
    description: string;
  };
  
  export default function ProjectCard({ title, description }: ProjectCardProps) {
    return (
      <div className="p-4 border rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-2xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  