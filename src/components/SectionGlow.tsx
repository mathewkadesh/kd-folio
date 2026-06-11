import { cn } from '@/lib/cn'

interface Props {
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
}

export default function SectionGlow({ className, intensity = 'medium' }: Props) {
  const opacityMap = {
    subtle: 'opacity-40',
    medium: 'opacity-60',
    strong: 'opacity-80',
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-x-0 top-0 h-64',
        'bg-glow-section',
        opacityMap[intensity],
        className,
      )}
    />
  )
}
