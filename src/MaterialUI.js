import { React, useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";

function TabPanel({ value, index, children }) {
  return value === index ? <Box sx={{ p: 2 }}>{children}</Box> : null;
}

export default function MaterialUI() {
  const [value, setValue] = useState(0); // state for current tab

  return (
    <Box>
      <Tabs
        value={value}
        onChange={(e, newValue) => {
          console.log(newValue);
          setValue(newValue);
        }}
      >
        <Tab label="hello" />
        <Tab label="Tab B" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <h3>This is Tab A</h3>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h3>This is Tab B</h3>
      </TabPanel>
    </Box>
  );
}
