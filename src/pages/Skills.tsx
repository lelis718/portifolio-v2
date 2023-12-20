import React from "react";
import { SkillLevelBar } from "../components/SkillLevelBar";

const skillTree = [
  {
    name: "Back-End Languages",
    items: [
      { icon: "csharp", title: "C#", level: 4 },
      { icon: "java", title: "Java / Spring", level: 4 },
      { icon: "graphql", title: "GraphQL", level: 4 },
      { icon: "nodejs", title: "NodeJS", level: 4 },
      { icon: "python", title: "Python", level: 4 },
      { icon: "php", title: "PHP", level: 4 },
      { icon: "dart", title: "Dart", level: 2 },
    ],
  },
  {
    name: "Back-End Frameworks and Systems",
    items: [
      { icon: "dotnet", title: ".Net Framework", level: 4 },
      { icon: "solr", title: "Apache Solr", level: 4 },
      { icon: "camunda", title: "Camunda", level: 4 },
      { icon: "cucumber", title: "Cubumber Test Framework", level: 4 },
      { icon: "coremedia", title: "Coremedia CMS Platform", level: 4 },
      { icon: "rabbitmq", title: "Rabbit MQ", level: 3 },
      { icon: "kafka", title: "Apache Kafka", level: 3 },
    ],
  },
  {
    name: "Front-End",
    items: [
      { icon: "html5", title: "HTML", level: 4 },
      { icon: "css3", title: "CSS3", level: 4 },
      { icon: "javascript", title: "JavaScript", level: 4 },
      { icon: "angular", title: "ANgular", level: 4 },
      { icon: "angularjs", title: "AngularJS", level: 4 },
      { icon: "jquery", title: "JQuery", level: 4 },
      { icon: "flash", title: "Flash / Flex", level: 4 },
      { icon: "unity", title: "Unity", level: 4 },
      { icon: "react", title: "React", level: 4 },
      { icon: "sencha", title: "Sencha", level: 4 },
    ],
  },
  {
    name: "Mobile",
    items: [
      { icon: "cordova", title: "Apache Cordova", level: 4 },
      { icon: "ionic", title: "Ionic Framework", level: 4 },
      { icon: "react", title: "React Native", level: 4 },
      { icon: "flutter", title: "Flutter", level: 4 },
      { icon: "android", title: "Android Native (Kotlin, Java)", level: 3 },
      { icon: "apple", title: "IOS (Objective C)", level: 2 },
      { icon: "windows-phone", title: "Windows Phone (Xamarin)", level: 3 },
    ],
  },
  {
    name: "Databases",
    items: [
      { icon: "sqlite", title: "SQLite", level: 4 },
      { icon: "sqlserver", title: "SQL Server", level: 4 },
      { icon: "postgresql", title: "PostgreSQL", level: 4 },
      { icon: "mysql", title: "MySQL", level: 4 },
      { icon: "oracle", title: "Oracle", level: 3 },
      { icon: "mongodb", title: "MongoDB", level: 3 },
      { icon: "firebird", title: "Firebird", level: 3 },
    ],
  },
  {
    name: "Devops",
    items: [
      { icon: "docker", title: "Docker", level: 4 },
      { icon: "jenkins", title: "Jenkins", level: 4 },
    ],
  },
  {
    name: "Monitoring tools",
    items: [
      { icon: "kibana", title: "Kibana", level: 4 },
      { icon: "grafana", title: "Grafana", level: 4 },
      { icon: "new-relic", title: "New Relic", level: 3 },
    ],
  },
];

export function Skills() {
  return (
    <div className="skills-container">
      <p>
        "Somewhere, Something Incredible Is Waiting To Be Known" - Carl Sagan
      </p>
      <p>
        I have been trough a lot of projects during my carrer. Gathered some experience on each job that I was focused on. Below are some of the tech that I was abble to work.
      </p>
      <p>&nbsp;</p>
      {skillTree.map((area,id) => (
        <React.Fragment key={id}>
          <h3>{area.name}</h3>
          {area.items.map((item, id) => (
            <div className="skill" key={id}>
              <div className={`skill-icon ${item.icon}`}>{item.title}</div>
              <div className="skill-level-container">
                <SkillLevelBar level={item.level} />
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
      <p>&nbsp;</p>
    </div>
  );
}
