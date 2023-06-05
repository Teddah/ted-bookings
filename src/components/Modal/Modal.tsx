import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DatePicker from "react-datepicker";
import { CottageItem } from "../App/App";
import { Typography } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";

interface Modalprops {
  open: boolean;
  currentItem: CottageItem | null;
  handleOnClose: () => void;
  handleBooking: (
    item: CottageItem,
    firstname: string,
    lastname: string,
    date: Date | null
  ) => void;
}

export default function Modal({
  open,
  currentItem,
  handleOnClose,
  handleBooking,
}: Modalprops) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date()
  );

  const handleOnBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!currentItem) return;

    handleBooking(currentItem, firstname, lastname, selectedDate);
    setFirstName("");
    setLastname("");
    setSelectedDate(new Date());
  };

  return (
    <Dialog open={open} onClose={handleOnClose}>
      <DialogTitle>{currentItem?.name}</DialogTitle>
      <DialogContent>
        <Typography>Boka din stuga osv</Typography>
        <form onSubmit={(e) => handleOnBooking(e)}>
          <TextField
            autoFocus
            required
            sx={{ mb: 4 }}
            id="firstname"
            label="Förnamn"
            type="text"
            fullWidth
            variant="standard"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            required
            sx={{ mb: 4 }}
            id="lastname"
            label="Efternamn"
            type="text"
            fullWidth
            variant="standard"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          {/* <label> */}
          <Typography style={{ marginBottom: 6 }}>
            Välj datum
          </Typography>
          <DatePicker
            selected={selectedDate}
            required
            onChange={(date) => setSelectedDate(date)}
          />
          {/* </label> */}
          <Typography marginTop={4}>
            Rum: {currentItem?.rooms}st
          </Typography>
          <Typography>Sängar: {currentItem?.beds}st</Typography>
          <Typography marginTop={2}>
            Pris: {currentItem?.price}kr/natt
          </Typography>
          <DialogActions>
            <Button onClick={handleOnClose}>Avbryt</Button>
            <Button variant="outlined" type="submit">
              Boka
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
