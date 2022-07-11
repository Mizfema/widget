import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "./Loading";


interface ScreanshotButtonProps {
  screanshot: string | null,
  onScreanshotTook: (screanshot: string | null) => void
}

export function ScreanshotButton({ screanshot, onScreanshotTook }: ScreanshotButtonProps) {

  const [isTakeScreanshot, setIsTakeScreanshot] = useState(false)

  async function handleTakeScreanshot() {
    setIsTakeScreanshot(true)

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    onScreanshotTook(base64Image)

    setIsTakeScreanshot(false)
  }

  if (screanshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-500 hover:text-zinc-100"
        onClick={() => onScreanshotTook(null)}
        style={{
          backgroundImage: `url(${screanshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 200,
        }}
      >
        <Trash />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreanshot}
      className="p-2 bg-zinc-900 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakeScreanshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" />}
    </button>
  )
}