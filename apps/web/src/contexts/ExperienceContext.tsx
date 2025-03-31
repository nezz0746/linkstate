import { createContext, useContext, useState, ReactNode } from "react";

export type Experience = {
  id: string;
  companyName: string;
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
};

const mockExperiences: Experience[] =
  process.env.NODE_ENV === "development"
    ? [
        {
          id: "1",
          companyName: "Google",
          title: "Senior Software Engineer",
          startDate: "2020-01-01",
          description:
            "Led the development of Google Cloud Platform's machine learning infrastructure, improving model training efficiency by 40%.",
        },
        {
          id: "2",
          companyName: "Meta",
          title: "Software Engineer",
          startDate: "2018-03-01",
          endDate: "2019-12-31",
          description:
            "Developed and maintained core React components used across Facebook's main application, reaching billions of users.",
        },
        {
          id: "3",
          companyName: "Amazon",
          title: "Full Stack Developer",
          startDate: "2016-06-01",
          endDate: "2018-02-28",
          description:
            "Built and scaled AWS Lambda services, handling millions of requests per day with 99.99% uptime.",
        },
        {
          id: "4",
          companyName: "Microsoft",
          title: "Junior Developer",
          startDate: "2014-09-01",
          endDate: "2016-05-31",
          description:
            "Contributed to the development of TypeScript, focusing on type inference improvements and developer tooling.",
        },
      ]
    : [];

type ExperienceContextType = {
  experiences: Experience[];
  addExperience: (experience: Omit<Experience, "id">) => void;
  removeExperience: (id: string) => void;
  showForm: boolean;
  setShowForm: (showForm: boolean) => void;
};

const ExperienceContext = createContext<ExperienceContextType | undefined>(
  undefined,
);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [showForm, setShowForm] = useState(false);
  const [experiences, setExperiences] = useState<Experience[]>(mockExperiences);

  const addExperience = (experience: Omit<Experience, "id">) => {
    setExperiences((prev) => [
      ...prev,
      { ...experience, id: Math.random().toString(36).substr(2, 9) },
    ]);
  };

  const removeExperience = (id: string) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <ExperienceContext.Provider
      value={{
        experiences,
        addExperience,
        removeExperience,
        showForm,
        setShowForm,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience() {
  const context = useContext(ExperienceContext);
  if (context === undefined) {
    throw new Error("useExperience must be used within a ExperienceProvider");
  }
  return context;
}
