import { FaPhone, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import Contact from "../Contact/Contact";

const Footer = () => {

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

	return (
		<div className="footer-wrapper">
			<div className="container footer">
				<div className="title">
					<h1>LET'S TALK</h1>
				</div>
				<div className="content-wrapper">
					<div className="contacts">
						<div className="column">
							<Contact text="+385 958207068" icon={<FaPhone />} />
							<a href="mailto:mislavdobrinic@gmail.com">
								<Contact text="mislavdobrinic@gmail.com" icon={<FaPaperPlane />} />
							</a>
						</div>
						<div className="column">
							<Contact text="/mislav-dobrinic" icon={<FaLinkedin />} />
							<Contact text="/mdbossss" icon={<FaGithub />} />
						</div>
					</div>
					<div className="return-top">
                        <div className="icon-wrapper" onClick={handleClick}>
                            <AiOutlineArrowUp/>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
