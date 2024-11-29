interface SectionProps {
  title: string;
  content?: string | string[];
}

export function Section({ title, content }: SectionProps) {
  if (!content) return null;
  
  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-disc pl-6 space-y-2">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    
    return (
      <div className="space-y-4">
        {content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    );
  };
  
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {renderContent()}
    </div>
  );
}
