interface SectionProps {
  title: string;
  content?: string;
}

export function Section({ title, content }: SectionProps) {
  if (!content) return null;
  
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
