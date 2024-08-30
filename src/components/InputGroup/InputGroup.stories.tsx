import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";
import { useState } from "react";

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  args: {
    value: "Example@example.com",
    label: "Email",
    size: "md",
    type: "email",
    onChange: () => {},
    onBlur: () => {},
    onSubmit: () => {},
    onFocus: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    placeholder: "Input...",
    hint: "Type your Email",
    infoIcon: true,
    tooltip: "Type your Email",
    searchIcon: true,
    helpIcon: true,
    required: true,
    error: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  args: {
    theme: "light",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      args.onChange?.(event); 
    };

    return (
      <div
        data-theme={args.theme}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <InputGroup {...args} value={value} onChange={handleChange} />
      </div>
    );
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    theme: "dark",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      args.onChange?.(event);
    };

    return (
      <div
        data-theme={args.theme}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <InputGroup {...args} value={value} onChange={handleChange} />
      </div>
    );
  },
};


export const LightThemeWithoutError: Story = {
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  args: {
    error: false,
    theme: "light",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      args.onChange?.(event); 
    };

    return (
      <div
        data-theme={args.theme}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <InputGroup {...args} value={value} onChange={handleChange} />
      </div>
    );
  },
};

export const DarkThemeWithoutError: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    error: false,
    theme: "dark",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      args.onChange?.(event);
    };

    return (
      <div
        data-theme={args.theme}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <InputGroup {...args} value={value} onChange={handleChange} />
      </div>
    );
  },
};
