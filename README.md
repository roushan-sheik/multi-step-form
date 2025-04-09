# 📝 Multi-Step Form with Validation

A professional and responsive multi-step form built using **Next.js (App Router)**, **React Hook Form**, **Zod** for validation, and **Tailwind CSS** for styling.

## 🚀 Features

- Multi-step form with navigation (`Next` / `Previous`)
- Real-time validation using `Zod`
- Error messages for invalid inputs
- Reusable and modular components
- Form state management using `useState`
- Final data preview before submission
- Responsive design with dark mode support
- Bonus: Simulated API submission using React Query

---

## 🧪 Technologies Used

- ✅ Next.js (App Router)
- ✅ React Hook Form
- ✅ Zod
- ✅ TailwindCSS
- ✅ TypeScript
- ⚙️ React Query

---

## 📂 Folder Structure

```
   ├─ src
   │  ├─ app
   │  │  ├─ (AppLayout)
   │  │  │  ├─ layout.tsx
   │  │  │  └─ page.tsx
   │  │  ├─ favicon.ico
   │  │  ├─ globals.css
   │  │  └─ layout.tsx
   │  ├─ components
   │  │  └─ layout
   │  │     ├─ footer
   │  │     │  └─ Footer.tsx
   │  │     └─ header
   │  │        └─ Header.tsx
   │  ├─ container
   │  │  └─ register
   │  │     ├─ SectionContainer.tsx
   │  │     ├─ components
   │  │     │  ├─ StepOne.tsx
   │  │     │  ├─ StepSummary.tsx
   │  │     │  ├─ StepThree.tsx
   │  │     │  ├─ StepTwo.tsx
   │  │     │  └─ ui
   │  │     │     ├─ ButtonNext.tsx
   │  │     │     └─ FormProgress.tsx
   │  │     ├─ schema
   │  │     │  └─ formSchema.ts
   │  │     ├─ sections
   │  │     │  └─ MultiStepForm.tsx
   │  │     └─ types
   │  │        └─ formTypes.ts
   │  ├─ infrastucture
   │  ├─ lib
   │  │  ├─ cn.ts
   │  │  └─ utils.ts
   │  └─ types
   │     └─ form.ts
   └─ tsconfig.json


```

## **📂 `src/` Folder Structure Guide**

This explains how to structure and place files inside the `src` folder. In short:

### **📂 src/** (Root Folder)

Files in this folder are organized in a **domain-based** manner. A **domain** refers to separate data entities like **product**, **user**, **checkout**, etc.

---

### **⏩ Folder Structure Based on Domain**

Each domain will have its own folder where all relevant files for that domain are placed.

- `src/components/{domain}` → **UI components** (e.g., `UserProfile.tsx`)
- `src/constants/{domain}` → **Constants specific to the domain**
- `src/models/{domain}` → **Data models and TypeScript interfaces**
- `src/hooks/{domain}` → **Custom hooks**
- `src/infrastructure/{domain}` → **API calls and query-related functions**

---

### **📂 components/** (UI Component Folder)

- Each domain's UI components will reside in its **own folder**.
- A separate folder named `layout` will contain global UI components like **Header** and **Footer**.

```bash

components
├── product
│   ├── ProductCard.tsx
│   ├── ProductList.tsx
├── user
│   ├── UserProfile.tsx
└── layout
    ├── Header.tsx
    ├── Footer.tsx
    ├── Subscribe.tsx

```

---

### **📂 infrastructure/** (Folder for API Calls and Data Fetching)

This folder includes domain-based API calls, React Query setup, and type definitions.

```bash

infrastructure/
├── product/
│   ├── productAPIClient.ts // API functions
│   ├── utils/
│   │   ├── queries.ts      // React Query objects
│   │   ├── keys.ts         // Query keys
│   │   ├── types.ts        // Request/Response types
│   └── index.ts
├── cart/
│   ├── cartApiBoundary.ts
│   ├── utils/
│   │   ├── queries.ts
│   │   ├── keys.ts
│   │   ├── types.ts
│   └── index.ts

```

---

### **📂 containers/** (Similar to the `app` directory in Next.js)

- Each page will have its own folder containing **related components, hooks, models, and constants**.

```bash

containers
└── about-us
    ├── components
    │   └── sections
    │       ├── TrendingProductsSection.tsx
    │       ├── OurVisionSection.tsx
    └── constants
        ├── brands.ts
        ├── categories.ts

```

---

### **📂 common/** (Shared Components & Utilities)

This folder holds **components and utility files reused across multiple domains**.

---

### **📂 providers/** (Global State Management)

- This is where app-wide contexts like **authentication** or **global state** will be managed.

---

### **📂 utils/** (Utility Functions & Components)

- General-purpose functions and hooks go here.
- **JSX-based utilities** are placed inside `utils/react`.

```bash

utils
├── function
├── hook
├── logger
└── react
    ├── Condition.tsx
    ├── Convert.tsx

```

---

### **📂 styles/** (Design System)

- For storing CSS variables, themes, and global styles.

---

## 📦 Getting Started

### 1. Clone the Repository

> HTTPS

```bash
 git clone https://github.com/roushan-sheik/multi-step-form.git

```

> SSH

```bash
 git clone git@github.com:roushan-sheik/multi-step-form.git

```

### 2. Navigate to the Project Directory

```bash
cd multi-step-form

```

### 3. Install Dependencies

```bash
npm install

```

### 4. Run the Development Server

```bash
npm run dev

```

The server will be available at `http://localhost:3000` (or your configured port).

---
