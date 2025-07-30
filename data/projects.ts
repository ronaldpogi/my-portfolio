export interface ProjectsItem {
    order: string,
    name: string,
    img: string,
    imgTwo: string,
    description: string
}

const projects: ProjectsItem[] = [
    {
        order: "01",
        name: "HR Portal",
        description: "I contributed as a back-end developer to a web-based Human Resources management system designed to streamline employee and HR processes. Using Laravel, I developed and maintained core features such as employee records management, leave and attendance tracking. I built and integrated RESTful APIs for frontend consumption and optimized data handling with MySQL.",
        img: "/hr-portal.png",
        imgTwo: "/hr-portal-dashboard.png"
    },
    {
        order: "02",
        name: "Thermal LRMS",
        description: "I worked as a full-stack developer on the Thermal Land Resource Management System (LRMS), a web application built with Laravel and Vue. This project was developed to manage and monitor land-related operations, specifically focusing on tracking permits, generating reports, managing litigation records, and handling contracts. On the back-end, I implemented core logic, RESTful APIs, and database structures using Laravel and MySQL. On the front-end, I developed dynamic components with Vue to ensure a seamless user experience. The system aimed to centralize and digitize critical land data for better efficiency, transparency, and compliance.",
        img: "/thermal.png",
        imgTwo: "/thermal-dashboard.png"
    },
    {
        order: "03",
        name: "Hedcor LRMS",
        description: "I also served as a full-stack developer for the Hedcor branch of the Land Resource Management System (LRMS), a web application built using Laravel and Vue. Similar to the Thermal LRMS, this system was designed to manage and track land-related operations, including permits, reports, litigation, and contracts. I was responsible for developing both back-end functionalities and front-end interfaces, ensuring consistent performance and user experience across branches. The project aimed to provide Hedcor with a centralized platform for efficient and accurate land resource management aligned with organizational and legal requirements.",
        img: "/lrms.png",
        imgTwo: ""
    },
    {
        order: "04",
        name: "CASH",
        description: "The purpose of CASH (Commercial Application for Sales Handling) is to help the Commercial team prepare monthly billings faster and more accurately. It collects important data from the OGP team, like Fault Reports, Nominations, Restrictions, and the Polar Report. Instead of doing everything manually, CASH computes and organizes the data automatically. This helps avoid mistakes and saves time. The goal is to make the billing process easier, more accurate, and on time every month.",
        img: "/cash.png",
        imgTwo: "/cash-dashboard.png"
    },
    {
        order: "05",
        name: "IAP",
        description: "The IAP-CR project is made to help with planning and approving flight (helicopter) requests. It makes sure that each flight going to the SWP (Shallow Water Platform) is planned properly. This is important because the SWP is in the middle of the sea and has limited space. The system helps check if the site can handle the flight and keeps the whole process clear and organized.",
        img: "/iap.png",
        imgTwo: "/iap-dashboard.png"
    },
    {
        order: "06",
        name: "PTS",
        description: "The purpose of PTS (Permit Tracking System) is to help teams manage and keep track of permits that need to be renewed on time. It reminds users when a permit is almost due or has not been updated. The goal is to avoid missed renewals, reduce delays, and make sure all permits are handled properly. It also helps action owners and PLT owners stay updated and responsible for their assigned permits.",
        img: "/pts.png",
        imgTwo: "/pts-dashboard.png"
    }
]

export default projects;