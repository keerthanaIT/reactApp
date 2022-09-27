import Accordian from "../../stories/Accordian"
import WImage from "../../stories/Image"
import { Heading } from "../../stories/Typography"

const SectionTwo = () => {
    return (
        <>
            <div class="grid grid-cols-2 gap-4 pb-48">
                <div>
                    <Heading label={"Landing page templates that work hard for you"} className={"pl-56 pt-32 pb-8"} />
                    <Accordian />                    
                </div>
                <div className="h-9/12 w-10/12 pl-24 pt-28">
                    <WImage src={"https://eep.io/images/yzco4xsimv0y/6IB2x0milDinV5FpNIZMoe/14f4806c23fcf15cbe231527d16c2735/151_Landing-Pages_AUI.png?w=760&fm=webp&q=80"} />
                </div>

            </div>
        </>
    )
}

export default SectionTwo