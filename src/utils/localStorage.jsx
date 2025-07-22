const employees = [
  {
    id: "EMP001",
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        title: "Complete frontend UI",
        description: "Design and develop the user interface for the dashboard.",
        date: "2025-07-21",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix navbar responsiveness",
        description: "Ensure the navbar works properly on mobile devices.",
        date: "2025-07-18",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Add unit tests for the login module.",
        date: "2025-07-20",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: "EMP002",
    email: "jane.smith@example.com",
    password: "123",
    tasks: [
      {
        title: "Create backend API",
        description: "Develop API for employee management.",
        date: "2025-07-15",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Integrate MongoDB",
        description: "Connect project with MongoDB Atlas.",
        date: "2025-07-19",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Document REST APIs",
        description: "Create documentation for all backend routes.",
        date: "2025-07-21",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix data validation",
        description: "Improve validation logic for user input.",
        date: "2025-07-17",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: "EMP003",
    email: "michael.brown@example.com",
    password: "123",
    tasks: [
      {
        title: "Design logo",
        description: "Create a modern logo for the new platform.",
        date: "2025-07-16",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Improve UX flow",
        description: "Review and enhance the user journey on main pages.",
        date: "2025-07-20",
        category: "UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Accessibility testing",
        description: "Ensure accessibility standards are met.",
        date: "2025-07-21",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: "EMP004",
    email: "emily.jones@example.com",
    password: "123",
    tasks: [
      {
        title: "Deploy on Vercel",
        description: "Deploy frontend on Vercel and test production build.",
        date: "2025-07-18",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Set up CI/CD",
        description: "Implement CI/CD pipeline using GitHub Actions.",
        date: "2025-07-21",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prepare sprint report",
        description: "Summarize progress for the last 2 sprints.",
        date: "2025-07-20",
        category: "Management",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Handle user feedback",
        description: "Categorize and prioritize user suggestions.",
        date: "2025-07-19",
        category: "Customer Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: "EMP005",
    email: "david.wilson@example.com",
    password: "123",
    tasks: [
      {
        title: "Optimize SEO",
        description: "Improve SEO ranking for landing page.",
        date: "2025-07-17",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Post blog update",
        description: "Write and publish July blog post.",
        date: "2025-07-20",
        category: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update FAQ section",
        description: "Revise FAQs based on user queries.",
        date: "2025-07-19",
        category: "Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: "ADMIN001",
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}