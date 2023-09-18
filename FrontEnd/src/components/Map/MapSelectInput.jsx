import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const MapSelectInput = ({
  cityName,
  setCityName,
  locations,
  hanldeSelectInput,
  handleSearchInput,
}) => {
  return (
    <Box>
      <FormControl
        sx={{
          //   backgroundColor: "red",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",

          //   margin: 0,
          //   paddin: 2,
          //   width: "100px",

          //   borderLeft: "none",
          //   padding: "none",
        }}
      >
        <TextField
          label="Enter City Name"
          variant="outlined"
          onChange={(e) => setCityName(e.target.value)}
          onKeyDown={handleSearchInput}
          //   onBlur={handleSearchInput}
          value={cityName}
        />

        <Select
          sx={{
            position: "relative",
            marginLeft: "-47px",
            borderTop: "none",
          }}
          //   className="customStyle"
          //   defaultValue={cityName}
          onChange={(e) => hanldeSelectInput(e.target.value)}
          value=""
        >
          {/* <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem> */}
          {locations?.map((city) => {
            return <MenuItem value={city.name}>{city.name}</MenuItem>;
            // <option ></option>;
          })}
        </Select>
      </FormControl>
      {/* <NativeSelect
          defaultValue={cityName}
          onChange={(e) => hanldeSelectInput(e)}
          sx={{
            backgroundColor: "red",
            display: "inline",
            zIndex: 9,
          }}
        >
          {locations?.map((city) => {
            return <option value={city.name}>{city.name}</option>;
          })}
        </NativeSelect> */}
    </Box>
  );
};

export default MapSelectInput;
