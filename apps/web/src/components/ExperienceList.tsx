import dayjs from "dayjs";
import { Trash2 } from "lucide-react";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { useExperience } from "../contexts/ExperienceContext";

export function ExperienceList() {
  const { experiences, removeExperience } = useExperience();

  if (experiences.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No experiences added yet.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="relative border p-4 hover:bg-muted/50"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold">{experience.title}</h3>
              <p className="text-sm text-muted-foreground">
                {experience.companyName}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeExperience(experience.id)}
              className="h-8 w-8"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">
              {dayjs(experience.startDate).format("MMM YYYY")} -{" "}
              {experience.endDate
                ? dayjs(experience.endDate).format("MMM YYYY")
                : "Present"}
            </p>
            <p className="mt-2 text-sm">{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
