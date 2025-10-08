const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email:"e1@e.com",
    password: "123",
    taskStats: {
      active: 2,
      completed: 1,
      new: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Fix Login Bug",
        description: "Resolve the bug in the login form that prevents correct authentication.",
        date: "2025-07-15",
        category: "Bug Fix",
        action: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Readme",
        description: "Add latest API documentation in the Readme file.",
        date: "2025-07-12",
        category: "Documentation",
        action: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Review Pull Requests",
        description: "Review and merge PRs assigned to you.",
        date: "2025-07-14",
        category: "Code Review",
        action: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Isha",
    email: "e2@e.com",
    password: "123",
    taskStats: {
      active: 2,
      completed: 1,
      new: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Design Home Page",
        description: "Create mockup designs for the new home page layout.",
        date: "2025-07-10",
        category: "Design",
        action: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Present the monthly progress report to the client.",
        date: "2025-07-13",
        category: "Meeting",
        action: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Reduce size of website images for performance improvement.",
        date: "2025-07-15",
        category: "Performance",
        action: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix CSS Issues",
        description: "Correct padding/margin issues across all pages.",
        date: "2025-07-11",
        category: "Frontend",
        action: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "e3@e.com",
    password: "123",
    taskStats: {
      active: 2,
      completed: 1,
      new: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Write Unit Tests",
        description: "Add test cases for all service functions.",
        date: "2025-07-09",
        category: "Testing",
        action: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Payment Gateway",
        description: "Resolve timeout issues in the payment integration.",
        date: "2025-07-13",
        category: "Backend",
        action: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Clean Codebase",
        description: "Remove unused files and redundant code blocks.",
        date: "2025-07-10",
        category: "Refactoring",
        action: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Add Search Feature",
        description: "Implement global search functionality across modules.",
        date: "2025-07-15",
        category: "Feature",
        action: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 1,
      completed: 1,
      new: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Deploy to Production",
        description: "Deploy latest stable build to production server.",
        date: "2025-07-16",
        category: "DevOps",
        action: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Dockerize Application",
        description: "Create Dockerfile for the backend and frontend.",
        date: "2025-07-14",
        category: "DevOps",
        action: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Security Audit",
        description: "Run a basic vulnerability scan on the APIs.",
        date: "2025-07-12",
        category: "Security",
        action: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Kunal",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 3,
      completed: 1,
      new: 3,
      failed: 0
    },
    tasks: [
      {
        title: "Create Blog Post",
        description: "Write a blog on performance optimization techniques.",
        date: "2025-07-11",
        category: "Content",
        action: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Add Dark Mode",
        description: "Implement dark/light theme toggle across the site.",
        date: "2025-07-15",
        category: "UI/UX",
        action: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix 404 Pages",
        description: "Handle all unregistered routes with custom 404 page.",
        date: "2025-07-10",
        category: "Routing",
        action: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API Rate Limit",
        description: "Add rate limiting to all public APIs.",
        date: "2025-07-13",
        category: "Backend",
        action: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Accessibility Improvements",
        description: "Improve ARIA labels and keyboard navigation.",
        date: "2025-07-14",
        category: "Accessibility",
        action: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];



const admin = [
  {
    "id": 1,
    "firstName":"Navdeep",
    "email": "admin@e.com",
    "password": "123"
  }
]
 
export const setLocalStorage = () => {
  const rawEmployees = localStorage.getItem('employees')
  const rawAdmin = localStorage.getItem('admin')

  let shouldSeedEmployees = false
  let shouldSeedAdmin = false

  try {
    const parsedEmployees = rawEmployees ? JSON.parse(rawEmployees) : null
    if (!Array.isArray(parsedEmployees) || parsedEmployees.length === 0) {
      shouldSeedEmployees = true
    }
  } catch {
    shouldSeedEmployees = true
  }

  let parsedAdmin = null
  try {
    parsedAdmin = rawAdmin ? JSON.parse(rawAdmin) : null
    if (!Array.isArray(parsedAdmin) || parsedAdmin.length === 0) {
      shouldSeedAdmin = true
    }
  } catch {
    shouldSeedAdmin = true
  }

  if (shouldSeedEmployees) {
    localStorage.setItem('employees', JSON.stringify(employees))
  }
  if (shouldSeedAdmin) {
    localStorage.setItem('admin', JSON.stringify(admin))
  } else {
    // Ensure default admin exists; if missing, reset to default list
    const hasDefaultAdmin = parsedAdmin && parsedAdmin.some((a) => a && a.email === 'admin@e.com')
    if (!hasDefaultAdmin) {
      localStorage.setItem('admin', JSON.stringify(admin))
    }
  }
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))

  return { employees, admin }
} 
