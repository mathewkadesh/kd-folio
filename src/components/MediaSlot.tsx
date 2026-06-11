import { Film, Image } from 'lucide-react'
import { cn } from '@/lib/cn'
import { getMedia } from '@/data/media'

interface Props {
  id: string
  className?: string
  iconSize?: number
}

const ratioClass: Record<string, string> = {
  '16:9':   'aspect-video',
  '1:1':    'aspect-square',
  'poster': 'aspect-[2/3]',
  '3:2':    'aspect-[3/2]',
  'wide':   'aspect-[21/6]',
}

export default function MediaSlot({ id, className, iconSize = 32 }: Props) {
  const entry = getMedia(id)

  if (entry.src) {
    return (
      <div className={cn('overflow-hidden', ratioClass[entry.ratio] ?? 'aspect-video', className)}>
        <img
          src={entry.src}
          alt={entry.alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: entry.objectPosition }}
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        ratioClass[entry.ratio] ?? 'aspect-video',
        className,
      )}
      aria-label={entry.alt}
      role="img"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-surface2 via-surface to-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center"
        aria-hidden="true"
      >
        {entry.ratio === '1:1' ? (
          <Image size={iconSize} className="text-cinema/60" />
        ) : (
          <Film size={iconSize} className="text-cinema/60" />
        )}
        <span className="font-mono text-xs text-faint tracking-widest uppercase">
          {entry.idealDimensions}
        </span>
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-[inherit]" />
    </div>
  )
}
