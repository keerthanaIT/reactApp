import WImage from "../../stories/Image"
import { SubHeading } from "../../stories/Typography"

const SectionThree =() =>{
    return (
        <>
          <div class="grid grid-cols-2 gap-4 px-52 py-20 bg-neutral-100">
                <div>
                    <SubHeading label={"You can publish unlimited landing pages for free. Check out this webinar to learn how easy it is to create a beautiful, simple landing page, all at no cost."} className={"relative top-[8rem] right-[4rem] text-3xl"} />                    
                </div>
                <div className="h-9/12 w-10/12 ">
                    <WImage src={"https://eep.io/images/yzco4xsimv0y/3zw8vivu1fLBmhJIh0QNYr/8ad5d959b3020b6b76f10775edd8f5e4/153_Landing-Pages_AUI.png?w=760&fm=webp&q=80"} />
                </div>

            </div>
        </>
    )
}

export default SectionThree