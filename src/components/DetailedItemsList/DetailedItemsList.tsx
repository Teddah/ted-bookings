import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { HouseSharp } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { CottageItem } from "../App/App";

interface DetaildItemsListProps {
  items: CottageItem[];
  onClick: (item: CottageItem) => void;
}

export default function DetailedItemsList({
  items,
  onClick,
}: DetaildItemsListProps) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 460,
        bgcolor: "background.paper",
      }}
    >
      {items?.map((item: CottageItem) => {
        return (
          <ListItem
            alignItems="flex-start"
            sx={{
              border: "1px solid lightgray",
              borderRadius: 2,
              mb: 2,
            }}
          >
            <ListItemAvatar>
              <HouseSharp fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {`${item.rooms} rum, ${item.beds} sängar`}
                  </Typography>
                  <div>
                    <Typography component="p" mt={2}>
                      {`Pris: ${item.price}kr/natt`}
                    </Typography>
                    <Typography
                      component="p"
                      mt={2}
                      fontWeight={400}
                      color={item.booked ? "red" : "green"}
                    >
                      {item.booked ? "Bokad" : "Ledig"}
                    </Typography>
                  </div>
                </React.Fragment>
              }
            />
            <Button
              disabled={item.booked}
              variant="outlined"
              onClick={() => onClick(item)}
            >
              Boka
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
}
