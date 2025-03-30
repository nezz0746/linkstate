import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import dayjs from "dayjs";
import { CalendarIcon, Check, ChevronsUpDown, Search } from "lucide-react";
import { cn } from "@cryptoresume/ui/lib/utils";
import { Button } from "@cryptoresume/ui/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@cryptoresume/ui/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@cryptoresume/ui/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@cryptoresume/ui/components/ui/popover";
import { Input } from "@cryptoresume/ui/components/ui/input";
import { Textarea } from "@cryptoresume/ui/components/ui/textarea";
import { Calendar } from "@cryptoresume/ui/components/ui/calendar";
import { companies } from "../data/companies";
import { useExperience } from "../contexts/ExperienceContext";
import debounce from "lodash/debounce";
import { Dialog, DialogContent } from "@cryptoresume/ui/components/ui/dialog";

const formSchema = z.object({
  companyName: z.string().min(1, "Company is required"),
  title: z.string().min(1, "Title is required"),
  startDate: z.date({
    required_error: "Start date is required",
  }),
  endDate: z.date().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ExperienceForm() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { addExperience } = useExperience();

  const updateSearch = useCallback(
    debounce((value: string) => {
      setDebouncedSearch(value);
    }, 300),
    [],
  );

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      title: "",
      description: "",
    },
  });

  function onSubmit(values: FormValues) {
    addExperience({
      ...values,
      startDate: values.startDate.toISOString(),
      endDate: values.endDate?.toISOString(),
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Company</FormLabel>
              <div className="relative">
                <Button
                  type="button"
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between"
                  onClick={() => setCommandOpen(true)}
                >
                  {field.value || "Select company..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
                {field.value && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      form.setValue("companyName", "");
                      setSearch("");
                      setDebouncedSearch("");
                    }}
                    className="absolute right-0 top-0 h-full px-3"
                  >
                    Remove
                  </Button>
                )}
              </div>
              <Dialog open={commandOpen} onOpenChange={setCommandOpen}>
                <DialogContent className="p-0">
                  <Command className="rounded-lg border shadow-md">
                    <div className="flex items-center border-b px-3">
                      <Search className="h-4 w-4 shrink-0 opacity-50" />
                      <CommandInput
                        placeholder="Search companies..."
                        value={search}
                        onValueChange={(value) => {
                          setSearch(value);
                          updateSearch(value);
                        }}
                        className="h-11 border-0 outline-none focus:ring-0"
                      />
                    </div>
                    <CommandList>
                      <CommandEmpty className="py-6 text-center text-sm">
                        No companies found
                      </CommandEmpty>
                      <CommandGroup className="max-h-[300px] overflow-auto p-1">
                        {filteredCompanies.map((company) => (
                          <CommandItem
                            key={company.id}
                            value={company.name}
                            onSelect={(value) => {
                              form.setValue("companyName", value);
                              setSearch("");
                              setDebouncedSearch("");
                              setCommandOpen(false);
                            }}
                            className="flex items-center gap-2 px-2"
                          >
                            <span>{company.name}</span>
                            {company.name === field.value && (
                              <Check className="h-4 w-4 ml-auto" />
                            )}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </DialogContent>
              </Dialog>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Software Engineer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          dayjs(field.value).format("MMM D, YYYY")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>End Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          dayjs(field.value).format("MMM D, YYYY")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your role and achievements..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Add Experience</Button>
      </form>
    </Form>
  );
}
