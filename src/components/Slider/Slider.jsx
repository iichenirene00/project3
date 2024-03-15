import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";
import "./Slider.css";

export default function RangeSlider({ get }) {
  let input_style = {
    width: "50%",
    fontSize: "4rem",
    padding: " 0 50px",
  };

  useEffect(() => {
    get(value);
  });

  const [value, setValue] = React.useState([67, 674]);
  const marks = [
    {
      value: 100,
      label: "100",
    },
    {
      value: 200,
      label: "200",
    },
    {
      value: 300,
      label: "300",
    },
    {
      value: 400,
      label: "400",
    },
    {
      value: 500,
      label: "500",
    },
    {
      value: 600,
      label: "600",
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const Input = styled(MuiInput)`
    width: 42px;
  `;

  return (
    <Box sx={{ width: 400 }}>
      <Input
        style={input_style}
        value={value[0]}
        onChange={handleInputChange}
        readOnly={true}
      />
      <Input
        sx={{
          width: "50%",
          fontSize: "4rem",
          padding: " 0 50px",
          "& .MuiInputBase-root-MuiInput-root": {
            "&::before": {
              border: "none",
            },
          },
        }}
        value={value[1]}
        onChange={handleInputChange}
        readOnly={true}
      />
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        min={67}
        max={674}
        marks={marks}
      />
    </Box>
  );
}
