import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { HouseSharp } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { CottageItem } from "../App/App";
import { Box } from "@mui/material";

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
        bgcolor: "background.paper",
      }}
    >
      {items?.map((item: CottageItem) => {
        return (
          <ListItem
            key={item.id}
            alignItems="flex-start"
            sx={{
              border: "1px solid lightgray",
              minWidth: 300,
              borderRadius: 2,
              mb: 2,
              opacity: item.booked ? 0.6 : 1,
            }}
          >
            <ListItemAvatar>
              <HouseSharp fontSize="large" />
            </ListItemAvatar>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {`${item.rooms} rum, ${item.beds} sängar`}
                </Typography>

                <Typography mt={2}>
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
              </Box>
              <Button
                disabled={item.booked}
                sx={{ height: 40 }}
                variant="outlined"
                onClick={() => onClick(item)}
              >
                Boka
              </Button>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
}
