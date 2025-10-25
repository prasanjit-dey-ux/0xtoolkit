
"use client"
import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, Clipboard } from "lucide-react"

interface UploadBoxProps {
  label: string
  onChange: (value: string) => void
}

export const UploadBox = ({ label, onChange }: UploadBoxProps) => {
  const [preview, setPreview] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreview(url)
      onChange(url)
    }
  }, [onChange])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] }
  })

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      if (text.startsWith("http")) {
        setPreview(text)
        onChange(text)
      }
    } catch (err) {
      console.error("Clipboard access denied")
    }
  }

  const clear = () => {
    setPreview(null)
    onChange("")
  }

  if (preview) {
    return (
      <div className="relative group">
        <img
          src={preview}
          alt={label}
          className="rounded-lg w-full h-32 object-cover border border-neutral-200"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
          <button
            onClick={handlePaste}
            className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30"
            title="Replace"
          >
            <Upload className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={clear}
            className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30"
            title="Remove"
          >
            ✕
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
        isDragActive ? "border-orange-400 bg-orange-50" : "border-neutral-300 hover:bg-neutral-50"
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="w-5 h-5 mx-auto text-neutral-400 mb-2" />
      <p className="text-neutral-600 text-sm">
        Drag & Drop or <span className="text-orange-500 font-medium">Choose file</span> to upload
      </p>
      <button
        type="button"
        onClick={handlePaste}
        className="mt-3 inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-orange-500"
      >
        <Clipboard className="w-3 h-3" /> Paste URL
      </button>
    </div>
  )
}
