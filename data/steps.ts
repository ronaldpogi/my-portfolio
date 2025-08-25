export interface stepsItem {
    name: string,
    description: string,
    icon: string
}

const steps: stepsItem[] = [
    {
        name: "Containerization", 
        icon: "lucide:container",
        description: "Built a Docker image for the app (Nuxt frontend) with production configuration."
    },
    {
        name: "Image Repository", 
        icon: "hugeicons:repository",
        description: "Pushed the image to Amazon ECR to store and manage versioned builds."
    },
    {
        name: "Automated Builds", 
        icon: "material-symbols:build",
        description: "Configured AWS CodeBuild with a buildspec.yml to authenticate to ECR, build the Docker image, and push updates automatically."
    },
    {
        name: "Orchestration", 
        icon: "eos-icons:cluster",
        description: "Created an ECS cluster and defined a task definition specifying container details (image URI, ports, memory)."
    },
    {
        name: "Service Management", 
        icon: "carbon:cloud-service-management",
        description: "Deployed an ECS service to run containers, scale automatically, and integrate with a load balancer for public access."
    },
    {
        name: "CI/CD Pipeline", 
        icon: "eos-icons:pipeline",
        description: "Set up AWS CodePipeline to pull code from the repository, trigger builds in CodeBuild, and deploy updated containers to ECS seamlessly."
    },

]

export default steps;