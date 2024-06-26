"use client";

import { Bird, Github, Rabbit } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { modelAtom } from "@/store";
import { ModelValue } from "@/types";
import { useAtom } from "jotai";

const GitHubIcon = () => {
  return (
    <a
      href="https://github.com/jacksonkasi1/open-search/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition duration-300 ease-in-out"
      aria-label="Open Search GitHub"
    >
      <Github className="text-current h-6 w-6" />
    </a>
  );
};

export function Header() {
  const [modal, setModel] = useAtom(modelAtom);

  const handleModelChange = (value: ModelValue) => {
    setModel(value);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center w-full px-4 h-14 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 ">
      <div className="justify-self-start">
        <Select onValueChange={handleModelChange} defaultValue={modal}>
          <SelectTrigger
            id="model"
            className="items-start [&_[data-description]]:hidden"
          >
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="groq">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Rabbit className="size-5" />
                <div className="grid gap-0.5">
                  <p>
                    Mixtral{" "}
                    <span className="font-medium text-foreground">Groq</span>
                  </p>
                  <p className="text-xs" data-description>
                    Open AI runs on the Groq model for speed and efficiency.
                  </p>
                </div>
              </div>
            </SelectItem>
            <SelectItem value="cloudflare">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Bird className="size-5" />
                <div className="grid gap-0.5">
                  <p>
                    Workers AI{" "}
                    <span className="font-medium text-foreground">
                      Cloudflare
                    </span>
                  </p>
                  <p className="text-xs" data-description>
                    Workers AI model runs on Cloudflare's global network
                  </p>
                </div>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <h1 className="justify-self-center text-lg sm:text-xl lg:text-2xl font-semibold dark:text-gray-800 text-white">
        Open Search
      </h1>
      <div className="justify-self-end">
        <GitHubIcon />
      </div>
    </header>
  );
}
