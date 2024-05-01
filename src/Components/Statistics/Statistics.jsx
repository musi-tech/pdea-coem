import { Box, Typography } from '@mui/material'
import React from 'react'
import Records from '../../helper/Records/Records'
import CntDiv from "./CntDiv"
import bgImage from "./images.jpeg"

function Statistics() {
  return (
    <Box
    
    sx={{
      background: "black",
      color: "white",
      padding: "24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems:"center"
    }}
  >
    
    <Box sx={{ padding: "4px", paddingX: "12px" }}>
      <CntDiv className="" number={7000}
      description={'HAPPY STUDENT'}
      />
      {/* <Typography variant="h4">Happy Students</Typography> */}
    </Box>

    <Box sx={{ padding: "4px", paddingX: "12px" }}>
      <CntDiv number={1000}
      description={'PLACEMENT FOR 2022-23 BATCH'}
       />
      {/* <Typography variant="h4">Placements</Typography> */}
    </Box>

    <Box sx={{ padding: "4px", paddingX: "12px" }}>
      <CntDiv number={1350}
      description={'PLACEMENT FOR 2021-22 BATCH'}
      />
      {/* <Typography variant="h4">Teachers</Typography> */}
    </Box>

    <Box sx={{ padding: "4px", paddingX: "12px" }}>
      <CntDiv number={900}
      description={'PLACEMENT FOR 2020-21 BATCH'}
      />
      {/* <Typography variant="h4">Teachers</Typography> */}
    </Box>

    <Box sx={{ padding: "4px", paddingX: "12px" }}>
      <CntDiv number={1600}
      description={'PUBLICATION'}
      />
      {/* <Typography variant="h4">Teachers</Typography> */}
    </Box>

    <Box sx={{ padding: "4px", paddingX: "12px" }}>
      <CntDiv number={110}
      description={'MoU'}
      />
      {/* <Typography variant="h4">Teachers</Typography> */}
    </Box>
  </Box>
  )
}

export default Statistics