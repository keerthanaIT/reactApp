import { Button } from "../../stories/Button"
import WImage from "../../stories/Image"
import { Heading, WParagraph } from "../../stories/Typography"

const Main = () => {
	return (
		<>
			<div class="grid grid-cols-2 gap-4">
				<div className="h-full w-10/12 pl-48 pt-28">
					<WImage src={"https://eep.io/images/yzco4xsimv0y/2xM9aLUgBPwXcV5mNUVMOW/ce0f910aa94cdfd5890dc5aa4b94dfd5/domain_b_w.png?w=760&fm=webp&q=80"} />
				</div>
				<div>
					<Heading label={"Your landing page starts with the right domain. Claim yours today"} className={"px-14 pt-32 pb-8"} />
					<WParagraph className={"px-14 pr-40 py-4"} label={"Start with a custom domain and get your business online now. Bring your free website and landing pages under one domain to keep your brand in harmony."}/>
				  <Button label={"Find your Domain"} className="border-solid border-2 border-indigo-600 relative left-14 p-4 w-3/12" />
				</div>
			</div>
		</>
	)
}

export default Main