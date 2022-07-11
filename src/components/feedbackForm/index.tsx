import { CloseButton } from "../CloseButton"
import IdeiaImage from "../../assets/idea.png"
import BugImage from "../../assets/bug.png"
import ThougtImage from "../../assets/thought.png"
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/feedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";



export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleFeedbackTypeRestart() {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 relative p-4 mb-6 rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >


      {feedbackSent ? (
        <FeedbackSuccessStep />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackTypeRestartRequested={handleFeedbackTypeRestart}
              selectedFeedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />

          )}
        </>
      )}

      <footer className="text-xs text-neutral-400 ">
        Feito com ♡ pela <a href="" className="underline underline-offset-2 ">Rocketseat</a>
      </footer>
    </div>
  )
}