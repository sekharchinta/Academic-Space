// Course data
const courses = [
    {
        id: 1,
        icon: "🌐",
        category: "Web Development",
        level: "Beginner",
        title: "Web Development Fundamentals",
        description: "Master HTML, CSS, and JavaScript basics for web development",
        modules: [
            {
                title: "HTML5 Essential",
                description: "Learn the building blocks of web development with HTML5. Understand semantic elements, forms, and modern HTML features.",
                videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
                resources: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                completed: false
            },
            {
                title: "CSS3 Styling",
                description: "Master CSS layouts, flexbox, grid, and responsive design principles.",
                videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
                resources: "https://css-tricks.com/guides/",
                completed: false
            },
            {
                title: "JavaScript Foundations",
                description: "Learn JavaScript fundamentals, DOM manipulation, and event handling.",
                videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
                resources: "https://javascript.info/",
                completed: false
            }
        ],
        quiz: [
            {
                question: "What does HTML stand for?",
                options: ["HyperText Machine Language", "HyperText Markup Language", "HyperTool Multi Language", "HyperText Manipulation Language"],
                correct: 1
            },
            {
                question: "What is the purpose of the <a> tag in HTML?",
                options: ["To display images", "To create links", "To style text", "To create tables"],
                correct: 1
            },
            {
                question: "Which attribute is used to specify a unique identifier for an HTML element?",
                options: ["id", "class", "name", "type"],
                correct: 0
            },
            {
                question: "What does CSS stand for?",
                options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Custom Style Sheets"],
                correct: 2
            },
            {
                question: "Which property is used to change the text color of an element?",
                options: ["color", "text-color", "font-color", "background-color"],
                correct: 0
            },
            {
                question: "How do you add a background color to an element in CSS?",
                options: ["color: blue;", "bg-color: blue;", "background-color: blue;", "background: blue;"],
                correct: 2
            },
            {
                question: "What is the default position of elements in CSS?",
                options: ["relative", "absolute", "static", "fixed"],
                correct: 2
            },
            {
                question: "What does JavaScript do in a webpage?",
                options: ["Styles the webpage", "Adds interactivity to the webpage", "Creates the structure of the webpage", "Stores the webpage content"],
                correct: 1
            },
            {
                question: "How do you declare a variable in JavaScript?",
                options: ["let myVar;", "var myVar;", "const myVar;", "All of the above"],
                correct: 3
            },
            {
                question: "Which method is used to find the length of a string in JavaScript?",
                options: ["size()", "len()", "length", "getLength()"],
                correct: 2
            }
        ]
    },
    {
        id: 2,
        icon: "🐍",
        category: "Programming",
        level: "Beginner",
        title: "Python Programming",
        description: "Learn Python from basics to advanced concepts",
        modules: [
            {
                title: "Python Basics",
                description: "Introduction to Python syntax, variables, and basic programming concepts.",
                videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
                resources: "https://docs.python.org/3/tutorial/",
                completed: false
            },
            {
                title: "Data Structures in Python",
                description: "Master lists, dictionaries, sets, and tuples in Python.",
                videoUrl: "https://www.youtube.com/embed/R-HLU9Fl5ug",
                resources: "https://realpython.com/python-data-structures/",
                completed: false
            }
        ],
        quiz: [
            {
                question: "What is the correct file extension for Python files?",
                options: [".py", ".python", ".pyt", ".pt"],
                correct: 0
            },
            {
                question: "Which keyword is used to create a function in Python?",
                options: ["function", "def", "fun", "lambda"],
                correct: 1
            },
            {
                question: "What is the output of print(2 + 3 * 4)?",
                options: ["20", "14", "18", "23"],
                correct: 1
            },
            {
                question: "How do you insert comments in Python code?",
                options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "` This is a comment"],
                correct: 1
            },
            {
                question: "Which data type is used to store True or False values in Python?",
                options: ["int", "str", "bool", "float"],
                correct: 2
            },
            {
                question: "What does the len() function do in Python?",
                options: ["Returns the length of an object", "Checks if a value is empty", "Adds elements to a list", "Finds the maximum value in a list"],
                correct: 0
            },
            {
                question: "How do you create a list in Python?",
                options: ["Using parentheses ()", "Using square brackets []", "Using curly braces {}", "Using angle brackets <>"],
                correct: 1
            },
            {
                question: "What is the output of print('Hello' + ' World')?",
                options: ["HelloWorld", "Hello World", "Hello+World", "Error"],
                correct: 1
            },
            {
                question: "Which of the following is a mutable data type in Python?",
                options: ["Tuple", "String", "List", "Integer"],
                correct: 2
            },
            {
                question: "What does the 'input()' function do in Python?",
                options: ["Outputs data to the console", "Takes input from the user", "Terminates the program", "Executes a block of code"],
                correct: 1
            }
        ]
    },
    {
        id: 3,
        icon: "⚛️",
        category: "Web Development",
        level: "Intermediate",
        title: "React.js Development",
        description: "Build modern web applications with React.js",
        modules: [
            {
                title: "React Fundamentals",
                description: "Learn React components, props, and state management.",
                videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
                resources: "https://react.dev/learn",
                completed: false
            },
            {
                title: "React Hooks",
                description: "Master React hooks for state and side effects management.",
                videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q",
                resources: "https://react.dev/reference/react",
                completed: false
            }
        ],
        quiz: [
            {
                question: "What is React.js?",
                options: [
                    "A backend framework for building APIs",
                    "A JavaScript library for building user interfaces",
                    "A database management system",
                    "A CSS preprocessor"
                ],
                correct: 1
            },
            {
                question: "Who developed React.js?",
                options: ["Google", "Facebook", "Microsoft", "Amazon"],
                correct: 1
            },
            {
                question: "What is a React component?",
                options: [
                    "A reusable piece of code that represents part of the UI",
                    "A styling module",
                    "A database query",
                    "A debugging tool"
                ],
                correct: 0
            },
            {
                question: "Which syntax is used to write React components?",
                options: ["HTML", "XML", "JSX", "CSS"],
                correct: 2
            },
            {
                question: "How do you create a functional component in React?",
                options: [
                    "Using a class definition",
                    "By extending React.Component",
                    "Using a function that returns JSX",
                    "Using the render method"
                ],
                correct: 2
            },
            {
                question: "Which method is used to update the UI in a React component?",
                options: ["render()", "update()", "setState()", "updateUI()"],
                correct: 2
            },
            {
                question: "What is the purpose of props in React?",
                options: [
                    "To store internal state data",
                    "To pass data from one component to another",
                    "To define event handlers",
                    "To manage the component's lifecycle"
                ],
                correct: 1
            },
            {
                question: "Which hook is used to manage state in functional components?",
                options: ["useEffect", "useContext", "useReducer", "useState"],
                correct: 3
            },
            {
                question: "What is the virtual DOM in React?",
                options: [
                    "A representation of the UI in memory",
                    "A real DOM element",
                    "A database for storing data",
                    "A debugging tool"
                ],
                correct: 0
            },
            {
                question: "How do you pass data from a parent component to a child component in React?",
                options: ["Using hooks", "Using props", "Using state", "Using refs"],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        icon: "📊",
        category: "Data & AI",
        level: "Intermediate",
        title: "Data Science",
        description: "Introduction to data science and analysis",
        modules: [
            {
                title: "Python for Data Science",
                description: "Learn NumPy, Pandas, and data manipulation techniques.",
                videoUrl: "https://www.youtube.com/embed/LHBE6Q9XlzI",
                resources: "https://pandas.pydata.org/docs/",
                completed: false
            },
            {
                title: "Data Visualization",
                description: "Create compelling visualizations with Matplotlib and Seaborn.",
                videoUrl: "https://www.youtube.com/embed/q7Bo_J8x_dw",
                resources: "https://matplotlib.org/stable/tutorials/index.html",
                completed: false
            }
        ],
        quiz: [
            {
                question: "What is the primary goal of Data Science?",
                options: [
                    "To create databases",
                    "To extract knowledge and insights from data",
                    "To design websites",
                    "To build hardware devices"
                ],
                correct: 1
            },
            {
                question: "Which programming language is most commonly used in Data Science?",
                options: ["Python", "Java", "C++", "HTML"],
                correct: 0
            },
            {
                question: "What is a dataset?",
                options: [
                    "A group of variables",
                    "A collection of structured or unstructured data",
                    "A statistical model",
                    "A data visualization tool"
                ],
                correct: 1
            },
            {
                question: "Which library in Python is used for data manipulation and analysis?",
                options: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
                correct: 1
            },
            {
                question: "What does 'EDA' stand for in Data Science?",
                options: [
                    "Enhanced Data Analysis",
                    "Exploratory Data Analysis",
                    "Extractive Data Analytics",
                    "Extra Data Assessment"
                ],
                correct: 1
            },
            {
                question: "What is a machine learning algorithm?",
                options: [
                    "A set of rules for writing code",
                    "A statistical model that improves with experience",
                    "A method for creating databases",
                    "A data visualization technique"
                ],
                correct: 1
            },
            {
                question: "Which of the following is a supervised learning algorithm?",
                options: [
                    "K-Means Clustering",
                    "Linear Regression",
                    "Principal Component Analysis",
                    "DBSCAN"
                ],
                correct: 1
            },
            {
                question: "What is overfitting in machine learning?",
                options: [
                    "When a model performs well on training data but poorly on new data",
                    "When a model cannot find a solution",
                    "When a model ignores training data",
                    "When a model has insufficient data to train"
                ],
                correct: 0
            },
            {
                question: "Which visualization library in Python is used to create plots and graphs?",
                options: ["Matplotlib", "Scikit-learn", "TensorFlow", "Keras"],
                correct: 0
            },
            {
                question: "What is the purpose of data cleaning in Data Science?",
                options: [
                    "To analyze data trends",
                    "To remove errors and inconsistencies from data",
                    "To build predictive models",
                    "To optimize algorithms"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 5,
        icon: "📱",
        category: "Mobile",
        level: "Intermediate",
        title: "Mobile App Development",
        description: "Learn to build mobile apps with React Native",
        modules: [
            {
                title: "React Native Basics",
                description: "Understanding mobile app development with React Native.",
                videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc",
                resources: "https://reactnative.dev/docs/getting-started",
                completed: false
            },
            {
                title: "Mobile UI Development",
                description: "Create beautiful and responsive mobile interfaces.",
                videoUrl: "https://www.youtube.com/embed/ur6I5m2nTvk",
                resources: "https://reactnative.dev/docs/style",
                completed: false
            }
        ],
        quiz: [
            {
                question: "What is mobile app development?",
                options: [
                    "The process of designing websites",
                    "The process of creating software applications for mobile devices",
                    "The creation of hardware for smartphones",
                    "The process of developing desktop software"
                ],
                correct: 1
            },
            {
                question: "Which programming language is commonly used for Android app development?",
                options: ["Swift", "Kotlin", "Ruby", "C#"],
                correct: 1
            },
            {
                question: "Which framework is used for cross-platform mobile app development?",
                options: ["React Native", "Django", "Flask", "TensorFlow"],
                correct: 0
            },
            {
                question: "What is the name of Apple's official IDE for iOS app development?",
                options: ["Xcode", "Android Studio", "IntelliJ IDEA", "Visual Studio Code"],
                correct: 0
            },
            {
                question: "Which file format is used for Android application packages?",
                options: [".apk", ".exe", ".ipa", ".app"],
                correct: 0
            },
            {
                question: "What is the primary language used for iOS app development?",
                options: ["Python", "Swift", "Java", "Kotlin"],
                correct: 1
            },
            {
                question: "What does 'responsive design' mean in mobile app development?",
                options: [
                    "An app design that works on all screen sizes and resolutions",
                    "An app that responds to user feedback",
                    "An app that supports multiple languages",
                    "An app optimized for fast loading"
                ],
                correct: 0
            },
            {
                question: "Which tool is used to test mobile applications on virtual devices?",
                options: ["Emulator", "Debugger", "Compiler", "SDK"],
                correct: 0
            },
            {
                question: "What is the purpose of an API in mobile app development?",
                options: [
                    "To manage app permissions",
                    "To integrate external services or data into the app",
                    "To store app data",
                    "To compile the app code"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of an app store in mobile app development?",
                options: [
                    "To design user interfaces",
                    "To distribute and manage mobile applications",
                    "To test mobile applications",
                    "To store user data"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 6,
        icon: "🎨",
        category: "Design",
        level: "Beginner",
        title: "UI/UX Design",
        description: "Master the principles of user interface and experience design",
        modules: [
            {
                title: "Design Principles",
                description: "Learn fundamental principles of good UI/UX design.",
                videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
                resources: "https://www.interaction-design.org/literature",
                completed: false
            },
            {
                title: "Figma Essentials",
                description: "Create modern designs using Figma.",
                videoUrl: "https://www.youtube.com/embed/FTFaQWZBqQ8",
                resources: "https://help.figma.com/hc/en-us",
                completed: false
            }
        ],
        quiz: [
            {
                question: "What does UI stand for?",
                options: ["User Interface", "User Integration", "User Interaction", "User Improvement"],
                correct: 0
            },
            {
                question: "What does UX stand for?",
                options: ["User Excellence", "User Experience", "User Exploration", "User Execution"],
                correct: 1
            },
            {
                question: "What is the primary goal of UX design?",
                options: [
                    "To create visually appealing layouts",
                    "To enhance user satisfaction by improving usability and accessibility",
                    "To code the back-end of a website",
                    "To market a product to users"
                ],
                correct: 1
            },
            {
                question: "What is wireframing in UI/UX design?",
                options: [
                    "A tool for editing images",
                    "A visual guide that represents the skeletal framework of a website or app",
                    "A method for creating animations",
                    "A process for debugging code"
                ],
                correct: 1
            },
            {
                question: "Which tool is commonly used for creating UI designs?",
                options: ["Figma", "Python", "MySQL", "TensorFlow"],
                correct: 0
            },
            {
                question: "What is a prototype in UX design?",
                options: [
                    "The final product ready for launch",
                    "A sample or simulation of the final product used for testing and feedback",
                    "A method for data analysis",
                    "An algorithm for user authentication"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of user personas in UX design?",
                options: [
                    "To define the app's color scheme",
                    "To understand the target audience's needs, behaviors, and goals",
                    "To code the front-end of a website",
                    "To test the performance of a website"
                ],
                correct: 1
            },
            {
                question: "What is the main focus of UI design?",
                options: [
                    "The functionality of the product",
                    "The visual and interactive elements of a product",
                    "The back-end logic of an app",
                    "The marketing strategy of the product"
                ],
                correct: 1
            },
            {
                question: "Which principle is important for good UX design?",
                options: [
                    "Consistency in design and interactions",
                    "Adding as many features as possible",
                    "Using complex navigation systems",
                    "Focusing solely on aesthetics"
                ],
                correct: 0
            },
            {
                question: "What is usability testing in UX design?",
                options: [
                    "Testing the app on multiple devices",
                    "Evaluating how easily users can complete tasks on a product",
                    "Debugging the app's code",
                    "Analyzing marketing performance"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 7,
        icon: "🗄️",
        category: "Data & AI",
        level: "Intermediate",
        title: "Database Management",
        description: "Learn SQL and database management systems",
        modules: [
            {
                title: "SQL Fundamentals",
                description: "Master SQL queries and database operations.",
                videoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
                resources: "https://www.w3schools.com/sql/",
                completed: false
            },
            {
                title: "Database Design",
                description: "Learn to design efficient and scalable databases.",
                videoUrl: "https://www.youtube.com/embed/ztHopE5Wnpc",
                resources: "https://www.postgresql.org/docs/",
                completed: false
            }
        ],
        quiz: [
            {
                question: "What does DBMS stand for?",
                options: ["Database Management System", "Data Backup Management System", "Digital Backup Management System", "Database Maintenance System"],
                correct: 0
            },
            {
                question: "Which of the following is an example of a relational database?",
                options: ["MongoDB", "MySQL", "Redis", "Cassandra"],
                correct: 1
            },
            {
                question: "What is the purpose of a primary key in a database table?",
                options: [
                    "To allow duplicate rows",
                    "To uniquely identify each record in the table",
                    "To encrypt the table",
                    "To link multiple databases"
                ],
                correct: 1
            },
            {
                question: "Which SQL command is used to retrieve data from a database?",
                options: ["INSERT", "SELECT", "DELETE", "UPDATE"],
                correct: 1
            },
            {
                question: "What is a foreign key in a database?",
                options: [
                    "A key used to encrypt data",
                    "A key that uniquely identifies rows in the same table",
                    "A key used to link two tables",
                    "A backup key for recovery"
                ],
                correct: 2
            },
            {
                question: "What does ACID stand for in database transactions?",
                options: [
                    "Accuracy, Consistency, Isolation, Durability",
                    "Atomicity, Consistency, Isolation, Durability",
                    "Access, Control, Integration, Distribution",
                    "Automation, Consistency, Integrity, Data"
                ],
                correct: 1
            },
            {
                question: "What is a query in a database?",
                options: [
                    "A tool for debugging database code",
                    "A request to perform operations on data",
                    "A backup operation",
                    "A method for sorting data"
                ],
                correct: 1
            },
            {
                question: "Which command is used to create a new table in SQL?",
                options: ["CREATE TABLE", "NEW TABLE", "ADD TABLE", "INSERT TABLE"],
                correct: 0
            },
            {
                question: "What is normalization in database management?",
                options: [
                    "A process of reducing redundancy and improving data integrity",
                    "A method to encrypt the database",
                    "A way to add foreign keys to a table",
                    "A type of indexing in the database"
                ],
                correct: 0
            },
            {
                question: "Which of the following is a NoSQL database?",
                options: ["PostgreSQL", "Oracle", "MongoDB", "SQLite"],
                correct: 2
            }
        ]
    },
    {
        id: 8,
        icon: "⚙️",
        category: "Backend",
        level: "Intermediate",
        title: "Node.js Backend Development",
        description: "Build scalable server-side applications with Node.js and Express",
        modules: [
            {
                title: "Node.js Crash Course",
                description: "Build server-side applications with Node.js, the JavaScript runtime that powers modern backends.",
                videoUrl: "https://www.youtube.com/embed/fBNz5xF-Kx4",
                resources: "https://nodejs.org/en/docs",
                completed: false
            },
            {
                title: "Building REST APIs with Express",
                description: "Design and build RESTful APIs using the Express.js framework.",
                videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE",
                resources: "https://expressjs.com",
                completed: false
            }
        ],
        quiz: [
            {
                question: "What is Node.js?",
                options: ["A front-end framework", "A CSS preprocessor", "A JavaScript runtime built on Chrome's V8 engine", "A relational database"],
                correct: 2
            },
            {
                question: "Which command installs a package in a Node.js project?",
                options: ["node install", "npm run", "npx build", "npm install"],
                correct: 3
            },
            {
                question: "Which file lists a project's dependencies?",
                options: ["config.json", "package.json", "node.json", "app.json"],
                correct: 1
            },
            {
                question: "Which method creates an HTTP server in Node.js?",
                options: ["http.createServer()", "server.listen()", "http.start()", "new Server()"],
                correct: 0
            },
            {
                question: "What is Express.js?",
                options: ["A database engine", "A code compiler", "A minimal web framework for Node.js", "A testing library"],
                correct: 2
            },
            {
                question: "Which HTTP method is used to update an existing resource?",
                options: ["GET", "POST", "DELETE", "PUT"],
                correct: 3
            },
            {
                question: "What is middleware in Express?",
                options: ["A function that processes requests between the server and routes", "A database query", "A CSS file", "A build tool"],
                correct: 0
            },
            {
                question: "Which HTTP status code means 'Not Found'?",
                options: ["200", "500", "404", "301"],
                correct: 2
            },
            {
                question: "What does npm stand for?",
                options: ["Node Process Machine", "Network Packet Manager", "New Program Module", "Node Package Manager"],
                correct: 3
            },
            {
                question: "Which built-in module is used for file operations?",
                options: ["http", "os", "fs", "crypto"],
                correct: 2
            }
        ]
    },
    {
        id: 9,
        icon: "🔐",
        category: "Security",
        level: "Intermediate",
        title: "Cybersecurity & Ethical Hacking",
        description: "Learn to protect systems and master ethical security techniques",
        modules: [
            {
                title: "Cyber Security Fundamentals",
                description: "Understand core security concepts, threat landscape, and defensive strategies.",
                videoUrl: "https://www.youtube.com/embed/U_P23SqJaDc",
                resources: "https://owasp.org/www-project-top-ten/",
                completed: false
            },
            {
                title: "Web Application Penetration Testing",
                description: "Learn to identify and safely exploit common web vulnerabilities.",
                videoUrl: "https://www.youtube.com/embed/2_lswM1S264",
                resources: "https://portswigger.net/web-security",
                completed: false
            }
        ],
        quiz: [
            {
                question: "What is the main goal of cybersecurity?",
                options: ["To build faster websites", "To protect systems, networks, and data from attacks", "To increase internet speed", "To store more data"],
                correct: 1
            },
            {
                question: "Which attack uses fake emails to trick users into revealing information?",
                options: ["DDoS", "SQL injection", "Phishing", "Brute force"],
                correct: 2
            },
            {
                question: "What does a firewall do?",
                options: ["Encrypts files", "Compiles code", "Stores passwords", "Filters network traffic based on security rules"],
                correct: 3
            },
            {
                question: "Which vulnerability allows attackers to inject malicious SQL code?",
                options: ["XSS", "SQL Injection", "CSRF", "Phishing"],
                correct: 1
            },
            {
                question: "What is a DDoS attack?",
                options: ["Overwhelming a service with traffic to make it unavailable", "Stealing email passwords", "Reading private messages", "Encrypting files for ransom"],
                correct: 0
            },
            {
                question: "What is XSS?",
                options: ["Injecting malicious scripts into a webpage", "Deleting a database", "Scanning ports", "Cracking Wi-Fi"],
                correct: 0
            },
            {
                question: "What is a strong password practice?",
                options: ["Reusing one password everywhere", "Using your name and birth year", "Using a unique strong password for each account", "Writing passwords on sticky notes"],
                correct: 2
            },
            {
                question: "What does Multi-Factor Authentication (MFA) add?",
                options: ["A second verification layer beyond the password", "Faster internet", "More storage", "Automatic backups"],
                correct: 0
            },
            {
                question: "What is the principle of least privilege?",
                options: ["Giving everyone admin rights", "Giving users only the access they need", "Blocking all traffic", "Requiring long passwords"],
                correct: 1
            },
            {
                question: "What should you do with an unexpected email attachment?",
                options: ["Open it to check", "Forward it to colleagues", "Reply asking for the password", "Do not open it; verify the sender first"],
                correct: 3
            }
        ]
    },
    {
        id: 10,
        icon: "☁️",
        category: "Cloud",
        level: "Beginner",
        title: "Cloud Computing with AWS",
        description: "Learn cloud fundamentals and AWS services from scratch",
        modules: [
            {
                title: "AWS Cloud Practitioner (2020)",
                description: "Learn cloud concepts, AWS core services, and the shared responsibility model.",
                videoUrl: "https://www.youtube.com/embed/3hLmDS179YE",
                resources: "https://aws.amazon.com/training/",
                completed: false
            },
            {
                title: "AWS Cloud Practitioner (CLF-C01)",
                description: "A comprehensive course covering billing, security, and core AWS services.",
                videoUrl: "https://www.youtube.com/embed/SOTamWNgDKc",
                resources: "https://docs.aws.amazon.com/",
                completed: false
            }
        ],
        quiz: [
            {
                question: "What is cloud computing?",
                options: ["Installing software on a single PC", "Building physical servers", "Delivering computing services over the internet", "Creating mobile apps"],
                correct: 2
            },
            {
                question: "Which of these is a cloud deployment model?",
                options: ["Public", "Private", "Hybrid", "All of the above"],
                correct: 3
            },
            {
                question: "What does IaaS stand for?",
                options: ["Internet as a Service", "Infrastructure as a Service", "Integration as a Service", "Information as a Service"],
                correct: 1
            },
            {
                question: "Which AWS service provides virtual servers?",
                options: ["S3", "RDS", "EC2", "Lambda"],
                correct: 2
            },
            {
                question: "Which AWS service is a serverless compute option?",
                options: ["EC2", "VPC", "Lambda", "CloudFront"],
                correct: 2
            },
            {
                question: "Which AWS service is used for object storage?",
                options: ["IAM", "EC2", "Route 53", "S3"],
                correct: 3
            },
            {
                question: "What does the shared responsibility model mean?",
                options: ["AWS secures the cloud; customers secure what they put in it", "AWS is fully responsible for everything", "Customers are fully responsible for everything", "Security is not a concern"],
                correct: 0
            },
            {
                question: "Which service monitors AWS resources?",
                options: ["S3", "CloudWatch", "RDS", "SQS"],
                correct: 1
            },
            {
                question: "What is the pay-as-you-go pricing model?",
                options: ["Pay only for the resources you use", "Pay a flat annual fee", "Pay per user per month", "Pay only for support"],
                correct: 0
            },
            {
                question: "What does AWS stand for?",
                options: ["Advanced Web Systems", "Automated Web Solutions", "Amazon Web Services", "Amazon Working Servers"],
                correct: 2
            }
        ]
    },
    {
        id: 11,
        icon: "☕",
        category: "Programming",
        level: "Beginner",
        title: "Java Programming",
        description: "Learn Java fundamentals and object-oriented programming",
        modules: [
            {
                title: "Java 8 Full Tutorial",
                description: "Master Java syntax, core libraries, and object-oriented programming concepts.",
                videoUrl: "https://www.youtube.com/embed/grEKMHGYyns",
                resources: "https://docs.oracle.com/en/java/",
                completed: false
            },
            {
                title: "Java for Absolute Beginners",
                description: "A hands-on introduction covering variables, loops, arrays, and classes.",
                videoUrl: "https://www.youtube.com/embed/GoXwIVyNvX0",
                resources: "https://dev.java/",
                completed: false
            }
        ],
        quiz: [
            {
                question: "Which method is the entry point of a Java program?",
                options: ["start()", "main()", "run()", "begin()"],
                correct: 1
            },
            {
                question: "Which keyword is used to define a class in Java?",
                options: ["struct", "class", "object", "type"],
                correct: 1
            },
            {
                question: "Which of these is a primitive data type?",
                options: ["String", "Array", "int", "Object"],
                correct: 2
            },
            {
                question: "What does JVM stand for?",
                options: ["Java Version Manager", "Java Variable Memory", "Java Virtual Machine", "Java Visual Machine"],
                correct: 2
            },
            {
                question: "Which keyword is used to inherit a class?",
                options: ["implements", "super", "extends", "inherits"],
                correct: 2
            },
            {
                question: "What is the output of System.out.println(5 % 2)?",
                options: ["2", "2.5", "0", "1"],
                correct: 3
            },
            {
                question: "Which keyword makes a variable unchangeable?",
                options: ["static", "const", "final", "readonly"],
                correct: 2
            },
            {
                question: "Which is an OOP principle?",
                options: ["Compilation", "Inheritance", "Debugging", "Serialization"],
                correct: 1
            },
            {
                question: "Which collection stores key-value pairs?",
                options: ["ArrayList", "HashMap", "LinkedList", "HashSet"],
                correct: 1
            },
            {
                question: "What is the size of an int in bytes?",
                options: ["2", "8", "4", "16"],
                correct: 2
            }
        ]
    },
    {
        id: 12,
        icon: "🔷",
        category: "Programming",
        level: "Intermediate",
        title: "TypeScript",
        description: "Add static typing and scale your JavaScript with TypeScript",
        modules: [
            {
                title: "TypeScript for Beginners",
                description: "Add static typing, interfaces, and modern tooling to your JavaScript projects.",
                videoUrl: "https://www.youtube.com/embed/BwuLxPH8IDs",
                resources: "https://www.typescriptlang.org/docs/",
                completed: false
            }
        ],
        quiz: [
            {
                question: "What is TypeScript?",
                options: ["A database", "A CSS framework", "A superset of JavaScript that adds types", "A browser"],
                correct: 2
            },
            {
                question: "Which file extension is used for TypeScript files?",
                options: [".js", ".ts", ".jsx", ".css"],
                correct: 1
            },
            {
                question: "Which command compiles TypeScript to JavaScript?",
                options: ["ts", "npm run ts", "compile", "tsc"],
                correct: 3
            },
            {
                question: "How do you define a type alias?",
                options: ["typedef", "alias", "type", "define"],
                correct: 2
            },
            {
                question: "What does the any type do?",
                options: ["Makes a value required", "Creates an array", "Adds numbers", "Disables type checking for a value"],
                correct: 3
            },
            {
                question: "What is an interface in TypeScript?",
                options: ["A database table", "A structure that defines the shape of an object", "A CSS class", "A function"],
                correct: 1
            },
            {
                question: "Which symbol is used for union types?",
                options: ["&", "+", "|", "!"],
                correct: 2
            },
            {
                question: "What does tsc produce?",
                options: ["Python code", "HTML", "JavaScript", "Machine code"],
                correct: 2
            },
            {
                question: "Where are TypeScript compiler options configured?",
                options: ["tsconfig.json", "package.json", "config.ts", "tsettings.json"],
                correct: 0
            },
            {
                question: "TypeScript is a superset of which language?",
                options: ["Python", "Java", "C#", "JavaScript"],
                correct: 3
            }
        ]
    },
    {
        id: 13,
        icon: "🖥️",
        category: "Programming",
        level: "Beginner",
        title: "C++ Programming",
        description: "Learn C++ from fundamentals to pointers and OOP",
        modules: [
            {
                title: "C++ Tutorial for Beginners",
                description: "Learn C++ from the ground up, including pointers, memory, and object-oriented programming.",
                videoUrl: "https://www.youtube.com/embed/vLnPwxZdW4Y",
                resources: "https://learn.microsoft.com/en-us/cpp/",
                completed: false
            }
        ],
        quiz: [
            {
                question: "Which header is used for input/output in C++?",
                options: ["<math.h>", "<iostream>", "<stdio.h>", "<stdlib.h>"],
                correct: 1
            },
            {
                question: "Which operator is used for console output?",
                options: [">>", "&&", "<<", "||"],
                correct: 2
            },
            {
                question: "Which keyword creates a new object on the heap?",
                options: ["alloc", "create", "new", "make"],
                correct: 2
            },
            {
                question: "What does int main() return by default?",
                options: ["1", "0", "-1", "undefined"],
                correct: 1
            },
            {
                question: "Which is a valid C++ comment?",
                options: ["<!-- comment -->", "# comment", "' comment", "// comment"],
                correct: 3
            },
            {
                question: "What is a pointer?",
                options: ["A variable that stores a memory address", "A function", "A class", "A loop"],
                correct: 0
            },
            {
                question: "What is the size of a bool in C++?",
                options: ["4 bytes", "8 bytes", "1 byte", "16 bytes"],
                correct: 2
            },
            {
                question: "Which declares a variable correctly?",
                options: ["int x = 5;", "int x = 5", "x = 5 int", "int = 5"],
                correct: 0
            },
            {
                question: "What does & with a variable give?",
                options: ["Its memory address", "Its value", "Its type", "Its size"],
                correct: 0
            },
            {
                question: "Which standard library container is a dynamically sized array?",
                options: ["vector", "array", "string", "map"],
                correct: 0
            }
        ]
    }
];
