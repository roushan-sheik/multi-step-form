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
