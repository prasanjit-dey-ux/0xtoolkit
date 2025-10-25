interface UploadPreviewProps {
  image: string | null
  alt: string
}

export const UploadPreview = ({ image, alt }: UploadPreviewProps) => {
  if (!image) return null

  return (
    <div className="rounded-lg overflow-hidden border border-neutral-200 shadow-sm">
      <img src={image} alt={alt} className="w-full h-32 object-cover" />
    </div>
  )
}
