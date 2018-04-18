import React from "react";
import { storiesOf } from "@storybook/react";
import beta from "@yarnexample/beta";

storiesOf("Test", module).add("standard", () => <div>{beta}</div>);
