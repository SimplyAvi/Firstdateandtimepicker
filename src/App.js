import React, { useState } from 'react';
import DateMomentUtils from '@date-io/moment';
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function App() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <MuiPickersUtilsProvider utils={DateMomentUtils}>
      <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        label="Start Date"
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        disablePast
        format="yyyy/MM/dd HH:mm"
      />
 
      <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        label="End Date"
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        disablePast
        format="yyyy/MM/dd HH:mm"
      />
    </MuiPickersUtilsProvider>
  );
}

export default App;
