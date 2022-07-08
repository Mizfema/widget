import { ChatTeardropDots } from "phosphor-react"
import { Popover } from '@headlessui/react'
import { useState } from "react"
import { WidgetForm } from "../components/feedbackForm"

export function Widget() {

  
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end ">
     <Popover.Panel>
       <WidgetForm/>
     </Popover.Panel>

      <Popover.Button className="bg-violet-500 px-3 rounded-full h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}