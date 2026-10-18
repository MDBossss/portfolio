import { GrLocation } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";
import { Timeline, Text } from "@mantine/core";

const About = () => {
  return (
    <div id="about" className="container about">
      <h3>ABOUT ME.</h3>
      <div className="content">
        <div className="left">
          <div className="title">
            <GrLocation className="icon" />
            <h2>Based in Zagreb, Croatia</h2>
          </div>
          <p>
            I’m a Software Engineer at b2match with 3+ years of professional
            experience. I work across the whole product, from TypeScript and
            React interfaces to backend services, APIs and databases, and I’m
            comfortable picking up whatever language or framework the problem
            needs.
          </p>
          <p>
            I’ve delivered a range of projects, from corporate websites and B2B
            SaaS platforms to dashboards, admin tools and customer-facing
            applications. Outside work I build tools for very real problems,
            like planning every curb and cable in my own house. I care about
            software that is reliable, maintainable and pleasant to use.
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
                title="Bachelor's Degree"
              >
                <Text color="dimmed" size="sm">
                  Computer Science @ Zagreb University of Applied Sciences
                </Text>
                <Text size="xs" mt={4}>
                  2021 - 2024
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<LuGraduationCap size={12} color="#22111a" />}
                title="Master's Degree"
              >
                <Text color="dimmed" size="sm">
                  Computer Science @ Zagreb University of Applied Sciences
                </Text>
                <Text size="xs" mt={4}>
                  2024 - 2026
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
