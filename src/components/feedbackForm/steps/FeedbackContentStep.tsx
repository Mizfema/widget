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
      <div className="flex gap-2 py-4 w-full">
        <form className="my-4 w-full">
          <textarea 
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 bg-transparent rounded-md  border-zinc-600 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1  resize-none "
          placeholder="Conte-nos o que está acontecendo..."></textarea>
        </form>

      </div>
    </>
  )
}