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
            I’m a Frontend Developer with 2+ years of professional experience
            building modern, scalable web applications. My expertise includes
            React, Next.js, React Native, Vue.js, TypeScript, TailwindCSS,
            Strapi, and API integrations (REST & GraphQL).
          </p>
          <p>
            I’ve delivered a range of projects, from corporate websites and B2B
            SaaS platforms to dynamic dashboards, admin tools, and
            customer-facing applications. My focus is on creating responsive,
            performant, and maintainable solutions with clean code and modern
            development practices. I thrive in collaborative environments, enjoy
            solving complex technical challenges, and always aim to deliver
            user-friendly products that create business value.
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
