import { ArrowArcLeft, ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreanshotButton } from "../ScreanshotButton";


interface FeedbackContentStep {
  selectedFeedbackType: FeedbackType;
  onFeedbackTypeRestartRequested: () => void;
  onFeedbackSent: () => void;
}
export function FeedbackContentStep({
  onFeedbackSent,
  selectedFeedbackType,
  onFeedbackTypeRestartRequested
}: FeedbackContentStep) {
  const [screanshot, setScreanshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');


  const feedbackInfo = feedbackTypes[selectedFeedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()

    console.log(
      {comment,
      screanshot}
    )

    onFeedbackSent()
  }


  return (
    <>

      <header>
        <button
          onClick={onFeedbackTypeRestartRequested}
          type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 ">
          <ArrowLeft weight="bold" className="w-4 h-4 " />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 ">
          <img src={feedbackInfo.image.source} alt={feedbackInfo.image.alt} className="w-6 h-6" />
          {feedbackInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 bg-transparent rounded-md  border-zinc-600 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1  resize-none "
          placeholder="Conte-nos o que está acontecendo..."
          onChange={event=>setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2" >
          <ScreanshotButton
            screanshot={screanshot}
            onScreanshotTook={setScreanshot}
          />
          <button 
          type="submit"
          disabled={!comment}
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 ">
            Enviar Feedback
          </button>
        </footer>
      </form>



    </>
  )
}