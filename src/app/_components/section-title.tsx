interface SectionTitleProps {
  title: string
  subtitle: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="">
      <span className="font-mono text-primary leading-6">{title}</span>
      <h1 className="text-4xl font-medium mt-2 leading-10">{subtitle}</h1>
    </div>
  )
}
