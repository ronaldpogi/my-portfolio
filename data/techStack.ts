export interface TechStackItem {
  name: string;
  icon: string;
  description: string;
}

const techStacks: TechStackItem[] = [
  { 
    name: "VueJS", 
    icon: "flowbite:vue-solid",
    description: "We used Vue for the front-end, including composables, Vuex, and Pinia."
  },
  { 
    name: "Laravel", 
    icon: "mdi:laravel",
    description: "Laravel was our main back-end framework. We utilized Eloquent, the query builder, cron jobs and other Laravel features essential for our projects."
  },
  {
    name: "MySQL",
    icon: "lineicons:mysql",
    description: "MySQL was our primary database in all our projects."
  },
  {
    name: "MSSQL",
    icon: "devicon-plain:microsoftsqlserver",
    description: "Also MSSQL in other projects"
  },
  {
    name: "Docker",
    icon: "mdi:docker",
    description: "For deployment, we used Docker together with CI/CD pipelines, primarily using GitHub Actions to automate our build and deployment processes."
  },
  {
    name: "Nuxt",
    icon: "mdi:nuxt",
    description: "We used Nuxt as well, primarily for building server-side rendered (SSR) and statically generated Vue applications, which improved performance, SEO, and overall user experience."
  },
  {
    name: "Ant Design",
    icon: "simple-icons:antdesign",
    description: "We also used Ant Design as a UI framework to build clean and responsive user interfaces efficiently."
  },
  {
    name: "Tailwind",
    icon: "mdi:tailwind",
    description: "We also used Tailwind CSS for utility-first styling, allowing us to build responsive and consistent designs quickly."
  },
  {
    name: "Bootstrap",
    icon: "mdi:bootstrap",
    description: "Bootstrap was also part of our UI toolkit, helping us create responsive and mobile-friendly designs efficiently."
  },
  {
    name: "Git",
    icon: "mdi:git",
    description: "We used Git for version control to manage our codebase, collaborate efficiently, and maintain a clean development workflow."
  },
  {
    name: "Postman",
    icon: "lineicons:postman",
    description: "Postman was an essential tool for us in testing RESTful APIs, debugging requests, and collaborating on API documentation."
  }
];

export default techStacks;
