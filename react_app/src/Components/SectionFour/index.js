import WImage from "../../stories/Image"
import { Heading, WParagraph } from "../../stories/Typography"

const SectionFour = () => {
    return (
        <>
            <div class="grid grid-cols-2 gap-4 px-44 py-20">
                <div>
                    <Heading label={"Grow your audience, keep it organized"} className={""} />
                    <WParagraph className="pt-16" label={"Landing page users have seen the growth rate for their Mailchimp audience increase by an average of 36%. Keep your audience organized and email marketing targeted by setting up your landing page to automatically tag contacts based on their interests when they sign up."}/>                  
                </div>
                <div className="h-9/12 w-10/12 pl-16">
                    <WImage src={"https://eep.io/images/yzco4xsimv0y/7u5mU5q8O5BNeSCHkmNyXy/393e2f5031e96d332eabe8db09367b19/156_Landing-Pages_AUI.png?w=760&fm=webp&q=80"} />
                </div>

            </div>
        </>
    )
}

export default SectionFour