import { Button } from "../Button"
import { Heading, SubHeading } from "../Typography"
import './index.css';

const Accordian = () => {
let details=[
{
    id: "headingOne",
    collapseId: "collapseOne",
    label:"Create a buzz for your new business",
    description:"Test out your products, messaging, and ideas before you launch, so you can find your future customers, optimize your conversion rates, and get people excited about your brand."
},{
    id: "headingTwo",
    collapseId: "collapseTwo",
    label:"Highlight products",
    description:"Our landing page builder pulls product imagery directly from your connected e‑commerce store so you can feature a top seller or promote your latest collection."
},{
    id: "headingThree",
    collapseId: "collapseThree",
    label:"Offer a free download",
    description:"Grow your Mailchimp audience by offering a special download to new contacts."
},{
    id: "headingfour",
    collapseId: "collapsefour",
    label:"Hold a contest",
    description:"Run your own giveaway to collect email addresses and turn potential customers into loyal ones."
},

]

    return (
        <>
            <div className="accordion pl-52" id="accordionExample">
                {details.map((d) => {
                    return (
                <div className="accordion-item ">
                    <SubHeading className="accordion-header mb-0"  id={d.id}>
                        <Button data-bs-toggle="collapse" data-bs-target={`#${d.collapseId}`} aria-expanded="true" className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-nonetransitionfocus:outline-none">
                        <Heading label={d.label} className="text-4xl" />
                        </Button>
                    </SubHeading>
                    <div id={d.collapseId} className="accordion-collapse collapse" aria-labelledby={d.id}
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            {d.description}
                          </div>
                    </div>
                </div>
                )})
                }
            </div>
        </>
    )
}

export default Accordian