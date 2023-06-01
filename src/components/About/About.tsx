import { GrLocation } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";
import { Timeline, Text } from "@mantine/core";

const About = () => {
	return (
		<div className="container about">
			<h3>ABOUT ME.</h3>
			<div className="content">
				<div className="left">
					<div className="title">
						<GrLocation className="icon" />
						<h2>Based in Zagreb, Croatia</h2>
					</div>
					<p>
						I am a Junior Front-End Developer currently pursuing a Bachelor's degree in Computer
						Science at Zagreb University of Applied Sciences. With a strong skill set encompassing
						HTML, CSS, JavaScript, TypeScript, React, Tailwind, and SCSS, I am adept at creating and
						managing responsive websites that provide users with a seamless experience. My focus is
						on crafting engaging interfaces by employing clean and optimized code, utilizing the
						latest development tools and techniques. I thrive in collaborative environments and
						enjoy working with cross-functional teams to deliver exceptional web applications.
					</p>
				</div>
				<div className="right">
					<div className="title">
						<LuGraduationCap className="icon" />
						<h2>Education</h2>
					</div>
					<div className="timeline-wrapper">
						<Timeline active={1} bulletSize={24} lineWidth={2} color="primary">
							<Timeline.Item
								bullet={<LuGraduationCap size={12} color="#22111a" />}
								title="High School Diploma"
							>
								<Text color="dimmed" size="sm">
									Technical School Ruđer Bošković
								</Text>
								<Text size="xs" mt={4}>
									2017 - 2021
								</Text>
							</Timeline.Item>

							<Timeline.Item
								bullet={<LuGraduationCap size={12} color="#22111a" />}
								title="Bachelor's Degree"
							>
								<Text color="dimmed" size="sm">
									Computer Science @ Zagreb University of Applied Sciences
								</Text>
								<Text size="xs" mt={4}>
									2021 - present
								</Text>
							</Timeline.Item>
						</Timeline>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
