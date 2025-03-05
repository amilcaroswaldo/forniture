import Link from "next/link"
import Image from "next/image"

interface CategoryCardProps {
  title: string
  image: string
  href: string
}

export function CategoryCard({ title, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={300}
          className="h-[180px] w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="text-white font-medium">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

