import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const Card = ({ coin, symbol, icon, cost, value, percentGain, totalGain }) => {
  const useStyles = makeStyles({
    accordion: {
      width: "23rem",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<Icon>expand_more</Icon>} aria-controls="panel1a-content" id="panel1a-header">
          <img src="" alt={coin + " logo"} />
          <Typography>{coin + " Portfolio"}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Cost</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Card;
