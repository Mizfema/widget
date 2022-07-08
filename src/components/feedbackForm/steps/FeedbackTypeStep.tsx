import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackTypeProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe o seu Feedback</span>
        <CloseButton />
      </header>
      <div className="flex gap-2 py-4 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border border-transparent hover:border-blue-500 focus:border-blue-500 focus:outline-none "
                onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                key="button"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title} </span>
              </button>
            )
          })
        }

      </div>
    </>
  )
}