import "@vanilla-extract/css/disableRuntimeStyles";
import { setProjectAnnotations } from "@storybook/react";
import projectAnnotations from "../.storybook/preview";

setProjectAnnotations(projectAnnotations);
