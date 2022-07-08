import { CloseButton } from "./CloseButton"
import IdeiaImage from "../assets/idea.png"
import BugImage from "../assets/bug.png"
import ThougtImage from "../assets/thought.png"
import { useState } from "react";



const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: BugImage,
      alt: 'imagem de uma insecto'
    }
  },

  IDEA: {
    title: 'Ideia',
    image: {
      source: IdeiaImage,
      alt: 'imagem de uma lampada'
    }
  },

  OTHER: {
    title: 'Problema',
    image: {
      source: ThougtImage,
      alt: 'imagem de um balão de pensamento'
    }
  }

};

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState(null)

  return (
    <div className="bg-zinc-900 relative p-4 mb-6 rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >
      <header>
        <span className="text-xl leading-6">Deixe o seu Feedback</span>
        <CloseButton/>
      </header>     

      <div className="flex gap-2 py-4 w-full">
        {
          Object.entries(feedbackTypes).map(([Key, value]) => {
            return (
              <button className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border border-transparent hover:border-blue-500 focus:border-blue-500 focus:outline-none " 
                key="button"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title} </span>
              </button>
            )
          })
        }

      </div>

      <footer className="text-xs text-neutral-400 ">
        Feito com ♡ pela <a href="" className="underline underline-offset-2 ">Rocketseat</a>
      </footer>
    </div>
  )
}