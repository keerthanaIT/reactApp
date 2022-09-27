import { AnchorLink } from "../../stories/AnchorLink"
import { Button } from "../../stories/Button";
import WImage from "../../stories/Image";
import Logo from '../../Asserts/img/logo.svg';

const Header = () => {
	let navtitle = ["Products", "Resources", "Inspiration", "Pricing",]
	return (
		<>
			<nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0  px-4  text-lg  ">
				<div className="hidden w-full md:flex md:items-center md:w-auto">
					<ul className=" pt-4 text-base  md:flex md:justify-between md:pt-0">
						{navtitle?.map((title) => {
							return (
								<AnchorLink label={title}/>
							);
						})}
					</ul>
					<WImage
              src={Logo}
              alt="logo"
              className="w-2/6 relative left-[15rem]"
            />
					<span className="float-left relative left-[45%]">Sales:</span>
					<i class="fa fa-globe relative left-[47%]"></i>
					<i class="fa fa-search relative left-[49%]"></i>
					<Button label={"Log In"} className="border-solid border-2 border-indigo-600 text-sm relative left-[51%] p-2 px-8 w-full" />
					<Button label={"SignUp"} className="bg-cyan-600 text-white text-sm relative left-[53%] p-3 px-8 w-full" />
				</div>
			</nav>
		</>
	)
}

export default Header