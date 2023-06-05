import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { CottageItem } from "../App/App";

interface Modalprops {
  open: boolean;
  currentItem: CottageItem | null;
  handleOnClose: () => void;
  handleBooking: (item: CottageItem) => void;
}

export default function Modal({
  open,
  currentItem,
  handleOnClose,
  handleBooking,
}: Modalprops) {
  return (
    <div>
      <Dialog open={open} onClose={handleOnClose}>
        <DialogTitle>{currentItem?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>Boka din stuga osv</DialogContentText>
          <TextField
            autoFocus
            required
            sx={{ mb: 4 }}
            id="firstname"
            label="Förnamn"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            sx={{ mb: 4 }}
            id="lastname"
            label="Efternamn"
            type="text"
            fullWidth
            variant="standard"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Välj ett datum" />
          </LocalizationProvider>
          <DialogContentText marginTop={4}>
            Rum: {currentItem?.rooms}st
          </DialogContentText>
          <DialogContentText>
            Sängar: {currentItem?.beds}st
          </DialogContentText>
          <DialogContentText marginTop={2}>
            Pris: {currentItem?.price}kr/natt
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnClose}>Avbryt</Button>
          <Button
            variant="outlined"
            onClick={() => currentItem && handleBooking(currentItem)}
          >
            Boka
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
