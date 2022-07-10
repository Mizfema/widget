import { ArrowArcLeft, ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"


interface FeedbackContentStep {
  selectedFeedbackType: FeedbackType;
  onFeedbackTypeRestartRequested: ()=> void
}
export function FeedbackContentStep({ 
  selectedFeedbackType,
  onFeedbackTypeRestartRequested 
}: FeedbackContentStep) {

  const feedbackInfo = feedbackTypes[selectedFeedbackType];

  return (
    <>

      <header>
        <button 
        onClick={onFeedbackTypeRestartRequested}
        type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 ">
          <ArrowLeft weight="bold" className="w-4 h-4 "  />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 ">
          <img src={feedbackInfo.image.source} alt={feedbackInfo.image.alt} className="w-6 h-6" />
          {feedbackInfo.title}
        </span>

        <CloseButton />
      </header>
     
        <form className="my-4 w-full">
          <textarea 
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 bg-transparent rounded-md  border-zinc-600 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1  resize-none "
          placeholder="Conte-nos o que está acontecendo..."></textarea>
        </form>
        
        <footer>
          <button className="p-2 bg-brand-500 flex-1 flex justify-center items-center rounded-md border-transparent">
            Enviar Feedback
          </button>
        </footer>

    </>
  )
}